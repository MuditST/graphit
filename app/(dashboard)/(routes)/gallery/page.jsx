import React from 'react'
import Image from 'next/image';
import Heading from "/Projects/graphit/components/Heading"

import { LayoutDashboard } from 'lucide-react';
const GalleryPage = () => {
  
    const images = [
        { src: '/images/Image1.png', width: 640, height: 480 },
        { src: '/images/Image2.png', width: 640, height: 480 },
        { src: '/images/Image1.png', width: 640, height: 480 },
        { src: '/images/Image2.png', width: 640, height: 480 },
        { src: '/images/Image1.png', width: 640, height: 480 },
      ];
  return (
    <div className='bg-primary min-h-screen'>
      <Heading 
        title="Gallery"
        description="Top New Creations"
        icon={LayoutDashboard}
        iconColor="text-white"
        bgColor="bg-white/10" />
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-sm shadow-secondary">
              <Image
                src={image.src}
                alt={`Photo ${index + 1}`}
                width={image.width}
                height={image.height}
                layout="responsive"
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryPage






