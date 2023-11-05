"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Heading from './Heading';
import { LayoutDashboard } from 'lucide-react';
const LandingContent = () => {
    const [scale1, setScale1] = useState(480);
    const handleMouseMove1 = (event) => {
        const rect = event.target.getBoundingClientRect();
    
        
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setScale1(100); }
    
        
        
    
  return (
    
    <div className='w-full overflow-hidden'>
        <div className='w-full flex justify-center'>
        <Heading 
        title="Gallery"
        description="Top New Creations"
        icon={LayoutDashboard}
        iconColor="text-white"
        bgColor="bg-white/10"/></div>
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4">
        <div onMouseMove={handleMouseMove1} className="overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-span-2 lg:row-span-2">
              <Image
                src='/images/Image1.png'
                alt={`Photo 1`}
                width= {scale1}
                height= {480}
                layout="responsive"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-start-3">
              <Image
                src='/images/Image2.png'
                alt={`Photo 2`}
                width= {640}
                height= {480}
                layout="responsive"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-2">
              <Image
                src='/images/Image1.png'
                alt={`Photo 3`}
                width= {640}
                height= {480}
                layout="responsive"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-start-1 lg:row-start-3">
              <Image
                src='/images/Image2.png'
                alt={`Photo 4`}
                width= {640}
                height= {480}
                layout="responsive"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-start-2 lg:row-start-3">
              <Image
                src='/images/Image2.png'
                alt={`Photo 4`}
                width= {640}
                height= {480}
                layout="responsive"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm shadow-secondary lg:col-start-4 lg:row-start-1">
              <Image
                src='/images/Image2.png'
                alt={`Photo 4`}
                width= {640}
                height= {480}
                layout="responsive"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              />
            </div>
        </div>
      
        </div>
        </div>
  )
}

export default LandingContent