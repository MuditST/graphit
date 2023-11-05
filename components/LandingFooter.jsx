import React from "react";

const LandingFooter = () => {
  return (
    <div className="text-white font-bold py-36 text-center space-y-5 h-screen flex flex-col items-center justify-center">
      <div className="relative w-full max-w-lg ">
        <div className="absolute top-12 left-8 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay blur-xl animate-blob"></div>
        <div className="absolute top-12 right-8 w-72 h-72 bg-sky-500 rounded-full mix-blend-overlay blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -top-14 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-overlay blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Our Motive</h1>
      </div>

      <div className="text-sm md:text-xl font-light text-zinc-400 w-3/5 pt-5">
        Utilize AI to transform mundane graphs into captivating visual
        representations, enhancing the overall learning and communication
        experience.
      </div>
    </div>
  );
};

export default LandingFooter;
