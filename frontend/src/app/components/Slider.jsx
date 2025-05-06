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
    <div className=" mx-6 lg:mx-12 xl:mx-24 py-24 text-center">
       {/* <h1 className=" text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold mb-12 ">
       Reviewed & Recognized by the Best
        </h1> */}

      <div className="flex flex-wrap justify-center xl:gap-24 items-center ">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={60}
            className="object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
