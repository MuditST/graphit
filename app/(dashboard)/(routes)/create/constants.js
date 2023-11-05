import * as z from "zod"

export const formSchema = z.object({
    x: z.string().min(1,{
        message: "Something is required",
        
    }),
    y: z.string().min(1,{
        message: "Something is required",
        
    }),
    xval: z.string().min(1,{
        message: "Something is required",
        
    }),
    yval: z.string().min(1,{
        message: "Something is required",
        
    })
})

