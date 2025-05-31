// components/BrandShowcase.jsx
"use client";
import React from "react";
import Image from "next/image";

const logos = [
  { src: "/Images/rating/justdial.webp", alt: "JustDial" },
  { src: "/Images/rating/google.webp", alt: "google" },
  { src: "/Images/rating/glassdoor.webp", alt: "glassdoor" },
  { src: "/Images/rating/ambition.webp", alt: "AmbitionBox" },

];

export default function BrandShowcase() {
  return (
    <div className=" mx-6 lg:mx-12 xl:mx-24 py-12 lg:py-24 text-center">
   

      <div className="flex flex-wrap justify-center gap-6 lg:gap-24 xl:gap-24 items-start lg:items-center ">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={40}
            height={40}
            className="w-26 h-20 lg:h-auto  lg:w-32  object-contain lg:object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
