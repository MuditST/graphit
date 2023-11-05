"use client";

import { cn } from "../lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {LayoutDashboard,  AreaChart,  Settings, PencilRuler} from "lucide-react";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./FreeCounter";
const montserrat = Montserrat({weight: "600",subsets: ["latin"]})

const routes = [{label: "Gallery", icon: LayoutDashboard, href: "/gallery", color: "white"},

{label: "Create Graph", icon: PencilRuler, href: "/create", color: "white"},

{label: "Upload Graph", icon: AreaChart, href: "/upload", color: "white"},

{label: "Setting", icon: Settings, href: "/settings", color: "white"}]

const Sidebar = ({apiLimitCount = 0}) => {
    const pathname = usePathname();
  return (
    <div className='space-y-4 py-4 flex flex-col h-full text-secondary bg-primary'>
        <div className="px-3 py-2 flex-1">
            <Link href="/gallery" className="flex items-cetner pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4">
                    <Image fill alt="Logo" src="/logo.png" />
                </div>
                <h1 className={cn("text-3xl font-bold", montserrat.className)}>Graph It</h1>
            </Link>
            <div className="space-y-1">
                {routes.map((route)=>(<Link href={route.href} key={route.href} 
                className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10": "text-zinc-400")}>
                    <div className="flex items-center flex-1">
                        <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                        {route.label}

                    </div>
                </Link>))}
            </div>
        </div>
        <FreeCounter apiLimitCount={apiLimitCount}/>
    </div>
  )
}

export default Sidebar