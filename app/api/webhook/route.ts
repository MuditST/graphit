const Stripe = require("stripe"); // Assuming you're using CommonJS module syntax
const { headers } = require("next/headers");
const { NextResponse } = require("next/server");
const prismadb = require("/Projects/graphit/lib/prismadb");
const { stripe } = require("/Projects/graphit/lib/stripe");

export async function POST(req) {
    const body = await req.text()
    const signature = headers().get("Stripe-Signature") as string
    let event;
    try{
        event = stripe.webhooks.constructEvent(
            body,signature,process.env.STRIPE_WEBHOOK_SECRET
        )
    } catch (error) {
        return new NextResponse(`Webhook Error: ${error.message}`, {status:400})
    }

    const session = event.data.object

    if (event.type ==="checkout.session.completed") {
        const subscription = await stripe.subscriptionItems.retrieve(
            session.subscription
        )
        if (!session?.metadata?.userId) {
            return new NextResponse("User id is required", {status:400})
        }
        await prismadb.userSubscription.create({
            data:{
                userId: session?.metadata?.userId,
                stripeSubscriptionId: subscription.id,
                stripeCustomerId: subscription.customer,
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(
                    subscription.current_period_end * 1000
                )
            }
        })
    }
    if (event.type ==="invoice.payment_succeeded") {
        const subscription = await stripe.subscription.retrieve(
            session.subscription
        )
        await prismadb.userSubscription.update({
            where:{
                stripeSubscriptionId: subscription.id,
            },
            data:{
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(
                    subscription.current_period_end * 1000
                )
            }
        })
    }
    return new NextResponse(null , {status: 200})
}