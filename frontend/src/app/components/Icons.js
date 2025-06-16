'use client';
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import VoiceAssistant from "./Voicebot";

function Icons() {
 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 fixed bottom-28 right-4 z-[99999999]">
        <div
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="cursor-pointer text-white flex items-center justify-center"
        >
          <Image src={'/Images/arrow.gif'} width={40} height={40} alt="" className="w-7 h-7  bg-[rgb(0,0,0)] text-white rounded-full" />
        </div>

        
      </div>

      <div className="flex flex-col items-center justify-center gap-2 fixed bottom-16 right-4 z-[99999999]">
      <a
  href="https://wa.me/917814536643"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer text-white rounded-full flex items-center justify-center"
>
   <Image
    src="/Images/whIcon.gif"
    width={20}
    height={20}
    alt=""
    className="w-9 h-9 rounded-full object-cover"
  />
</a>

      </div>
       <div className="flex flex-col items-center justify-center gap-2 fixed bottom-4 right-4 z-[99999999]">
     <VoiceAssistant/>

      </div>
    </div>
  );
}

export default Icons;

