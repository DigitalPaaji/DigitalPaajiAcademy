"use client";
import React from "react";

function ReelCollage() {
  const mediaItems = [
    { src: "/Images/vibe/3.mp4" }, 
    { src: "/Images/vibe/2.mp4" },
       { src: "/Images/vibe/1.mp4" },
 
    { src: "/Images/vibe/5.mp4" },
    { src: "/Images/vibe/6.mp4" },
    { src: "/Images/vibe/4.mp4" }, 

  ];

  return (
    <div className=" w-full px-4 sm:px-6 md:px-12 py-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {mediaItems.map((item, index) => (
        <div
          key={index}
          className="aspect-square relative w-full overflow-hidden "
        >
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transform ${
              index === 0 || index === 2 ? "rotate-270" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
}

export default ReelCollage;
