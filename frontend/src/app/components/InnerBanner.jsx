'use client';
import Link from "next/link";
import React, { useRef } from "react";

function InnerBanner({ heading}) {
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
<div
  className="relative w-full h-auto py-12 lg:h-[500px] flex flex-col max-w-5xl mx-auto  items-center justify-center bg-cover bg-center overflow-hidden"

>
       <div
          className="absolute top-0 inset-0 opacity-20 "
          style={{
            backgroundImage: "url(/Images/course/bg.png)",

          }}
        ></div>

      {/* Background Image */}
      {/* <img
        className="absolute top-12 left-4 lg:left-[20%] w-16  h-auto "
       src='/Images/course/1.png'
       alt=""/>
             <img
        className="absolute top-36 left-2 lg:left-[12%] w-20  h-auto "
       src='/Images/course/2.png'
       alt=""/>
          <img
        className="absolute bottom-32 left-80 w-60 lg:w-[200px] h-auto object-left"
       src='/Images/course/video/m5.png'
       alt=""/>
          <img
        className="absolute top-24 right-[20%]  w-32 h-auto object-left"
       src='/Images/course/3.png'
       alt=""/>*/}
       
   <img
        className="absolute bottom-0 rotate-45 right-0 opacity-20 w-full h-auto object-left"
       src='/Images/course/web.png'
       alt=""/> 

      {/* Heading */}
      <h1 className="bungee-shade-regular relative z-20 text-4xl md:text-5xl xl:text-7xl text-center text-[#000000] px-4">
        {heading}
      </h1>
               <div className=" text-base md:text-md my-4 mx-8 xl:mx-0 text-center xl:text-left">
            <p>
              At Digital Paaji Academy, our specialized programs in digital
              marketing, graphic design, video editing, SEO and web development
              are designed to make you industry-ready. Our hands-on, mentor-led
              courses give you the tools to succeed.
            </p>
          </div>
            <div className="relative z-20 w-32 h-16 mx-auto xl:mx-0  group">
    {/* Shadow/Base */}
    <div
      className="absolute top-[6px] left-[4px] 
      bg-white border-2 border-white 
      w-full h-full rounded-md 
      transition-all duration-150 
   group-hover:top-[4px] group-hover:left-[3px]"
    />

    {/* Actual Button */}
    <Link
    href="/enrollnow"
    ref={btnRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
      className="
        poppins-bold text-xl cursor-pointer absolute top-0 left-0 
        w-full h-full bg-black text-white rounded-md 
        flex items-center justify-center 
        transition-all duration-150 
        group-hover:top-[2px] group-hover:left-[2px]"
    >
      Enroll Now
    </Link>
  </div>
    </div>
  );
}

export default InnerBanner;
