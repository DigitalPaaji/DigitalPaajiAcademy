import React from "react";

function InnerBanner({ heading}) {
  return (
<div
  className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center bg-cover bg-center bg-white"
  style={{
    backgroundImage: "url('/Images/course/bg.png')",

  }}
>
<div className="absolute inset-0  bg-linear-to-b from-[#e9872457] via-[#bdc8e625] to-[#e9872457] "></div>

      {/* Background Image */}
      <img
        className="absolute top-4 left-4 lg:left-[20%] w-40 lg:w-[200px] h-auto "
       src='/Images/course/m7.png'
       alt=""/>
   <img
        className="absolute bottom-0 right-4 w-60 lg:w-[400px] h-auto object-left"
       src='/Images/course/m1.png'
       alt=""/>
      {/* Heading */}
      <h1 className="bungee-shade-regular relative z-10  text-4xl md:text-5xl xl:text-7xl text-center text-black px-4">
        {heading}
      </h1>
    </div>
  );
}

export default InnerBanner;
