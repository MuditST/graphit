"use client";
import React, { useState } from "react";
import Image from "next/image";
import Heading from "./Heading";
import { LayoutDashboard } from "lucide-react";
const LandingContent = () => {
  const [scale, setScale] = useState("100%");
  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    setScale(`${x.toFixed(0)}%`);
  };
  const [scale2, setScale2] = useState("100%");
  const handleMouseMove2 = (event) => {
    const rect2 = event.target.getBoundingClientRect();
    const x2 = ((event.clientX - rect2.left) / rect2.width) * 100;
    setScale2(`${x2.toFixed(0)}%`);
  };
  const [scale3, setScale3] = useState("100%");
  const handleMouseMove3 = (event) => {
    const rect3 = event.target.getBoundingClientRect();
    const x3 = ((event.clientX - rect3.left) / rect3.width) * 100;
    setScale3(`${x3.toFixed(0)}%`);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full flex justify-center">
        <Heading
          title="Hall of Graphs"
          description="Top Creations of the Week"
          icon={LayoutDashboard}
          iconColor="text-white"
          bgColor="bg-white/10"
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4">
          <div
            onMouseMove={handleMouseMove}
            className="w-auto h-auto bg-[url('/images/Image2.png')] bg-cover overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-span-2 lg:row-span-2"
          >
            <div
              style={{
                width: scale,
                position: "relative",
                overflow: "hidden",
                height: "100%",
                transition: "width 0.2s ease-out",
                willChange: "width",
              }}
            >
              <Image
                src="/images/Image1.png"
                alt={`Photo 1`}
                fill
                objectPosition="left center"
                objectFit="cover"
              />
            </div>
          </div>
          <div
            onMouseMove={handleMouseMove2}
            className="w-auto h-auto bg-[url('/images/Image2.png')] bg-cover overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-start-3"
          >
            <div
              style={{
                width: scale2,
                position: "relative",
                overflow: "hidden",
                height: "100%",
                transition: "width 0.2s ease-out",
                willChange: "width",
              }}
            >
              <Image
                src="/images/Image1.png"
                alt={`Photo 1`}
                fill
                objectPosition="left center"
                objectFit="cover"
              />
            </div>
          </div>
          <div
            onMouseMove={handleMouseMove3}
            className="w-auto h-auto bg-[url('/images/Image2.png')] bg-cover overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-2"
          >
            <div
              style={{
                width: scale3,
                position: "relative",
                overflow: "hidden",
                height: "100%",
                transition: "width 0.2s ease-out",
                willChange: "width",
              }}
            >
              <Image
                src="/images/Image1.png"
                alt={`Photo 1`}
                fill
                objectPosition="left center"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-auto h-auto bg-[url('/images/Image2.png')] bg-cover overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-start-1 lg:row-start-3">
            <Image
              src="/images/Image2.png"
              alt={`Photo 4`}
              width={640}
              height={480}
              layout="responsive"
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            />
          </div>
          <div className="w-auto h-auto bg-[url('/images/Image2.png')] bg-cover overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-start-2 lg:row-start-3">
            <Image
              src="/images/Image2.png"
              alt={`Photo 4`}
              width={640}
              height={480}
              layout="responsive"
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            />
          </div>
          <div className="w-auto h-auto bg-[url('/images/Image2.png')] bg-cover overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-start-4 lg:row-start-1">
            <Image
              src="/images/Image2.png"
              alt={`Photo 4`}
              width={640}
              height={480}
              layout="responsive"
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
