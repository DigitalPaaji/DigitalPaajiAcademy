"use client";
import React from "react";
import Image from "next/image";

function ReelCollage() {
  const mediaItems = [
    { src: "/Images/about2.webp" },
    { src: "/Images/about2.webp" },
    { src: "/Images/about2.webp" },
    { src: "/Images/about2.webp" },
    { src: "/Images/about2.webp" },
    { src: "/Images/about2.webp" },
    { src: "/Images/about2.webp" },
    { src: "/Images/about2.webp" },
    // Add more reel-style images
  ];

  return (
    <div className="w-full px-2 sm:px-6 md:px-12 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mediaItems.map((item, index) => (
        <div
          key={index}
          className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src={item.src}
            alt={`reel-image-${index}`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export default ReelCollage;
