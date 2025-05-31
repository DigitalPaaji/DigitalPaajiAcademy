"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Journey() {
  const btnRef = useRef(null);
  const borderRef = useRef(null);



  const handleMouseEnter = () => {
    // Press-in effect (move down slightly)
    gsap.to(btnRef.current, {
      y: 2,
      scale: 0.98,
      duration: 0.2,
      ease: "power2.inOut",
    });

    // Border ripple
    gsap.fromTo(
      borderRef.current,
      {
        scale: 1,
        opacity: 0.5,
      },
      {
        scale: 1.1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }
    );
  };

  const handleMouseLeave = () => {
    // Reset position and scale
    gsap.to(btnRef.current, {
      y: 0,
      scale: 1,
      duration: 0.2,
      ease: "power2.inOut",
    });

    // Reset border
    gsap.to(borderRef.current, {
      scale: 1,
      opacity: 0.5,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };
  return (
    <div className="px-6 lg:px-12 xl:px-24 py-24 ">
      <div className="flex flex-col xl:flex-row items-center justify-center gap-12">
        {/* Left Content */}
        <div className=" w-full xl:w-[50%] text-center md:text-left">
          <h2 className="bungee-shade-regular text-4xl md:text-5xl xl:text-6xl font-bold mb-12 border-b pb-4 border-black">
          Shaping the Next Generation of Digital Leaders

          </h2>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-start">
              <Image
                alt=""
                loading="lazy"
                width={40}
                src={"/Images/journey/1.webp"}
                height={40}
                className="w-16 h-16 object-cover mx-auto md:mx-0"
              />
              <p className="poppins text-md mt-2 ">
              At Digital Paaji Academy, we believe every student has the potential to achieve something great with the right mentorship.

              </p>
            </div>
            <div className="flex flex-col justify-start">
              <Image
              loading="lazy"
                alt=""
                width={40}
                src={"/Images/journey/2.webp"}
                height={40}
                className="w-16 h-16 object-cover  mx-auto md:mx-0"
              />
              <p className="poppins text-md mt-2 ">
                From your first day, you'll dive into interactive lessons, live sessions, and challenges that mirror real industry scenarios.

              </p>
            </div>
            <div className="flex flex-col justify-start">
              <Image
                alt=""
                loading="lazy"
                width={40}
                src={"/Images/journey/3.webp"}
                height={40}
                className="w-16 h-16 object-cover  mx-auto md:mx-0"
              />
              <p className="poppins text-md mt-2 ">
               Every step of your journey is designed to build not just skills, but a strong portfolio, industry exposure, and readiness.

              </p>
            </div>
            <div className="flex flex-col justify-start">
              <Image
              loading="lazy"
                alt=""
                width={40}
                src={"/Images/journey/4.webp"}
                height={40}
                className="w-16 h-16 object-cover  mx-auto md:mx-0"
              />
              <p className="poppins text-md mt-2 ">
               Our students gain hands-on experience in tools, technologies, and strategies used by top companies today. 

              </p>
            </div>
          </div>
          <div className="relative z-20 w-[280px] md:w-[350px] mx-auto md:mx-0 h-16 border-red-900 ">
            {/* Shadow/Base */}
            <div className="absolute top-[6px] left-[4px]  bg-white border-2 border-white w-full h-full rounded-md transition-all duration-100 " />

            {/* Actual Button */}
            <Link
              href="/enroll"
              ref={btnRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="poppins  text-lg absolute top-0 left-0 w-full h-full bg-black text-white rounded-md flex items-center justify-center 
               active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100"
            >
              CRAFTED BY DIGITAL PAAJI
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full xl:w-[50%] h-fit xl:h-[800px]">
          {/* <img
            src="/Images/journey/team.webp"
            alt="Sample"
            className=" w-full h-[100%] object-cover "
          /> */}

              <video
  src="/Images/journey/team.webm"
  loading="lazy"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
/>


        </div>
      </div>
    </div>
  );
}

export default Journey;
