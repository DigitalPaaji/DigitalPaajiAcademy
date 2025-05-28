'use client';
import Image from 'next/image';


export default function HoverCard() {
  return (
    <div className="w-full h-full py-24 lg:py-0 lg:h-[900px] flex flex-col lg:flex-row items-center justify-between px-6  lg:px-0 gap-12 overflow-hidden">
      
      {/* Left Side Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 items-start text-left lg:pl-12 xl:pl-24">
        <h1 className="bungee-shade-regular text-center mx-auto lg:mx-0 font-bold text-4xl md:text-6xl xl:text-8xl  lg:text-left">
          Don't Be Shy, <br /> Say Hi!
        </h1>
        <p className="poppins text-md mt-2 text-center lg:text-left ">
          Not just learning — you're unlocking a launchpad to your future. Let's
          turn skills into success. Want to be part of the fun? Join us and make
          every Friday unforgettable. Because at Paaji Academy, you don't just
          learn - you live the vibe.
        </p>
      </div>

      {/* Right Side Image */}
      <div className="w-full lg:w-1/2 flex justify-center ">
        <Image
          src="/Images/about2.webp"
          alt="Contact Us Visual"
          width={500}
          height={500}
          className="w-full h-[100%] object-contain lg:object-cover"
        />
      </div>
    </div>
  );
}
