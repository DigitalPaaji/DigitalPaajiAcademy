import React from "react";

function InnerBanner({ heading}) {
  return (
<div
  className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center bg-cover bg-center "

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
        className="absolute top-24 right-[20%]  w-32 h-auto object-left"
       src='/Images/course/3.png'
       alt=""/>
          <img
        className="absolute bottom-32 left-80 w-60 lg:w-[200px] h-auto object-left"
       src='/Images/course/m5.png'
       alt=""/>
   <img
        className="absolute bottom-32 right-56 w-60 lg:w-[200px] h-auto object-left"
       src='/Images/course/m7.png'
       alt=""/> */}

      {/* Heading */}
      <h1 className="bungee-shade-regular relative z-20 text-4xl md:text-5xl xl:text-7xl text-center text-[#000000] px-4">
        {heading}
      </h1>
    </div>
  );
}

export default InnerBanner;
