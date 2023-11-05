"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "../components/ui/button";
const LandingHero = () => {
    const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5 h-screen flex flex-col items-center">
        <div className="relative w-full max-w-lg ">
            <div className="absolute top-12 left-8 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay blur-xl animate-blob"></div>
            <div className="absolute top-12 right-8 w-72 h-72 bg-sky-500 rounded-full mix-blend-overlay blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -top-14 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-overlay blur-xl animate-blob animation-delay-4000"></div>
        </div>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>An AI Powered Graph tool to</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 p-2">
          <TypewriterComponent
            options={{
              strings: [
                "Generate Graphs from Scratch.",
                "Convert Existing Graphs.",
                "Analyze Graph Data.",
                
              ],
              autoStart: true,
              loop: true,
              
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Express your graphs with Passion
      </div>
      <div>
        <Link href={isSignedIn ? "/gallery" : "/sign-up"}>
          <Button className="z-10 hover:bg-secondary bg-slate-500 text-secondary hover:text-primary md:text-lg p-4 md:p-6 font-semibold">
            Start Generating For Free
          </Button>
        </Link>
        
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400 w-3/5 pt-5">
        Express your graphs with Passion Express your graphs with PassionExpress your graphs with PassionExpress your graphs with PassionExpress your graphs with PassionExpress your graphs with Passion
      </div>
      
    </div>
  )
}

export default LandingHero