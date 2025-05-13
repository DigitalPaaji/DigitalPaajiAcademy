"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Journey() {
  const btnRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    // Entry animation on load
    gsap.from(btnRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

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
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="bungee-shade-regular text-4xl md:text-5xl xl:text-6xl font-bold mb-12 border-b pb-4 border-black">
            Start Your Journey with Digital Paaji Academy
          </h2>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-start">
              <Image
                alt=""
                width={40}
                src={"/Images/icon.webp"}
                height={40}
                className="w-16 h-16 object-cover mx-auto md:mx-0"
              />
              <p className="poppins text-md mt-2 ">
                Not just learning — you're unlocking a launchpad to your future.
                Let's turn skills into success.
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <Image
                alt=""
                width={40}
                src={"/Images/icon.webp"}
                height={40}
                className="w-16 h-16 object-cover  mx-auto md:mx-0"
              />
              <p className="poppins text-md mt-2 ">
                Not just learning — you're unlocking a launchpad to your future.
                Let's turn skills into success.
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <Image
                alt=""
                width={40}
                src={"/Images/icon.webp"}
                height={40}
                className="w-16 h-16 object-cover  mx-auto md:mx-0"
              />
              <p className="poppins text-md mt-2 ">
                Not just learning — you're unlocking a launchpad to your future.
                Let's turn skills into success.
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <Image
                alt=""
                width={40}
                src={"/Images/icon.webp"}
                height={40}
                className="w-16 h-16 object-cover  mx-auto md:mx-0"
              />
              <p className="poppins text-md mt-2 ">
                Not just learning — you're unlocking a launchpad to your future.
                Let's turn skills into success.
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
        <div className="flex-1 w-full xl:w-1/2 md:h-[450px] xl:h-[550px]">
          <img
            src="/Images/about2.webp"
            alt="Sample"
            className=" w-full h-[100%] object-contain "
          />
        </div>
      </div>
    </div>
  );
}

export default Journey;
