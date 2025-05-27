'use client';
import Image from "next/image";
import React from "react";
import { MdLocalPhone } from "react-icons/md";

function Icons() {
 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 fixed bottom-4 right-4 z-[99999999]">
        <div
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="cursor-pointer text-white flex items-center justify-center"
        >
          <Image src={'/Images/arrow.gif'} width={40} height={40} alt="" className="w-9 h-9  bg-[rgb(0,0,0)] text-white rounded-full" />
        </div>

        
      </div>

      <div className="flex flex-col items-center justify-center gap-2 fixed bottom-16 right-4 z-[99999999]">
        <a
        href="tel:+919876545678"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="cursor-pointer text-white rounded-full flex items-center justify-center"
        >
          <MdLocalPhone  className="w-9 h-9 p-2  bg-[rgba(0,0,0,0.89)]  rounded-full   text-white " />
        </a>

      </div>
    </div>
  );
}

export default Icons;

