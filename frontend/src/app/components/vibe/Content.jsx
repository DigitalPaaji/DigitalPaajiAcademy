"use client";
import React from "react";
import Image from "next/image";

function ReelCollage() {
  const mediaItems = [
    { src: "/Images/vibe/1.mp4" },
    { src: "/Images/vibe/2.mp4" },
    { src: "/Images/vibe/3.mp4" },
    { src: "/Images/vibe/4.mp4" },
    { src: "/Images/vibe/5.mp4" },
    { src: "/Images/vibe/6.mp4" },
   
    // Add more reel-style images
  ];

  return (
    <div className="w-full px-2 sm:px-6 md:px-12 py-12 flex items-center justify-center flex-wrap gap-6">
      {mediaItems.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden"
        >
           <video
  src={item.src}
  loading="lazy"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
/>
        </div>
      ))}
    </div>
  );
}

export default ReelCollage;
