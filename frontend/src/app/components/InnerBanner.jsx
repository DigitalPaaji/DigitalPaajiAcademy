"use client";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";

function InnerBanner({ heading }) {
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
      },
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
    <div className=" ">
   <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-24 py-12  flex flex-col lg:flex-row items-center gap-4 xl:gap-12 bg-cover bg-center overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 opacity-35 bg-cover bg-center"
    style={{
      backgroundImage: "url(/Images/course/bg.png)",
    }}
  />
  
  {/* Content Section */}
  <div className="relative w-full lg:w-1/2 z-10 px-2 sm:px-0">
    {/* Heading */}
    <h1 className="bungee-shade-regular text-3xl sm:text-4xl md:text-5xl  xl:text-7xl text-[#000000] leading-tight">
      {heading}
    </h1>
    
    {/* Description */}
    <div className="text-sm sm:text-base md:text-lg my-4 sm:my-6">
      <p>
        At Digital Paaji Academy, our specialized programs in digital
        marketing, graphic design, video editing, SEO and web development
        are designed to make you industry-ready. Our hands-on, mentor-led
        courses give you the tools to succeed.
      </p>
    </div>
    
    {/* Button */}
    <div className="relative z-20 w-28 sm:w-32 h-12 sm:h-14 md:h-16 group">
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
          poppins-bold text-base sm:text-lg md:text-xl cursor-pointer 
          absolute top-0 left-0 
          w-full h-full bg-black text-white rounded-md 
          flex items-center justify-center 
          transition-all duration-150 
          group-hover:top-[2px] group-hover:left-[2px]"
      >
        Enroll Now
      </Link>
    </div>
  </div>
  
  {/* Image Section */}
  <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-8 lg:mt-0">
    {/* Badge */}
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 lg:left-1/3 lg:translate-x-0 px-4 sm:px-6 py-2 sm:py-3 md:py-4 bg-white text-gray-900 border-2 text-xs sm:text-sm rounded-lg text-center shadow-lg z-20 whitespace-nowrap">
      <span className="text-base sm:text-lg md:text-xl font-semibold block sm:inline">
        100% Practical
      </span>{" "}
      <span className="block sm:inline text-xs sm:text-sm">
        Live Projects Training
      </span>
    </div>
    
    {/* Image */}
    <img
      src="/Images/paaji.webp"
      className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] xl:max-w-[500px] h-auto object-contain"
      alt="Digital Paaji Academy"
      loading="lazy"
    />
  </div>
</div>
  <div className="bg-white">
  {/* Why Digital Paaji Section */}
  <div className="bg-linear-to-b from-[#e9872436] via-transparent to-[#e9872415] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
    {/* Header */}
    <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
      <h3 className="bungee-shade-regular text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
        Why Digital Paaji?
      </h3>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        We don't just teach tools; we teach design thinking and creative aesthetics for the real world.
      </p>
      {/* <p className="poppins text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 pt-2">
        Real stories, Real results, Real impact
      </p> */}
    </div>

    {/* Features Grid - 4 columns on desktop */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
      {/* Feature 1: Project-Based */}
      <div className="bg-linear-to-b from-[#e9872436] via-transparent to-[#e9872428] rounded-xl p-6 md:p-8 text-center ">
         <img src="/Images/course/portfolio.png" alt="" className="w-16 h-16 mx-auto"/>
        <h4 className="poppins-bold text-xl md:text-2xl mb-2 text-gray-900">Project-Based</h4>
        <p className="text-sm md:text-base">
          Build a stunning portfolio while you learn.
        </p>
      </div>

      {/* Feature 2: Expert Mentors */}
      <div className="bg-linear-to-b from-[#e9872436] via-transparent to-[#e9872428] rounded-xl p-6 md:p-8 text-center ">
                 <img src="/Images/course/mentor.png" alt="" className="w-16 h-16 mx-auto"/>
     
        <h4 className="poppins-bold text-xl md:text-2xl mb-2 text-gray-900">Expert Mentors</h4>
        <p className="text-sm md:text-base">
          Get taught by designers with 10+ years experience.
        </p>
      </div>

      {/* Feature 3: Career Support */}
      <div className="bg-linear-to-b from-[#e9872436] via-transparent to-[#e9872428] rounded-xl p-6 md:p-8 text-center ">
       <img src="/Images/course/career.png" alt="" className="w-16 h-16 mx-auto"/>
        <h4 className="poppins-bold text-xl md:text-2xl mb-2 text-gray-900">Career Support</h4>
        <p className="text-sm md:text-base">
          Mock interviews and resume building assistance.
        </p>
      </div>

      {/* Feature 4: Free Tools */}
      <div className="bg-linear-to-b from-[#e9872436] via-transparent to-[#e9872428] rounded-xl p-6 md:p-8 text-center ">
  <img src="/Images/course/tools.png" alt="" className="w-16 h-16 mx-auto"/>
        <h4 className="poppins-bold text-xl md:text-2xl mb-2 text-gray-900">Free Tools</h4>
        <p className="text-sm md:text-base">
          Exclusive access to resources and design assets.
        </p>
      </div>
    </div>
  </div>

  {/* Investment Section */}
  <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-black">
    <div className="flex items-center justify-center ">
      {/* Section Header */}
      <div className=" mb-12 md:mb-16 w-full lg:w-1/2">
        <h3 className="bungee-shade-regular text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-100">
          Investment in Your Future
        </h3>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mt-6">
          High-quality education shouldn't be overpriced. We offer the most competitive fees in Patiala 
          with flexible EMI options to help you get started immediately.
        </p>
        <div className="poppins text-xl md:text-2xl font-semibold text-gray-200  mt-4 flex items-center justify-start gap-3">
            <img src="/Images/course/payment.png" alt="" className=" bg-gray-300 p-2 rounded-full w-16 h-16 "/><span>
              Pay in easy installments

              </span>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="max-w-2xl mx-auto w-full lg:w-1/2">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-shadow">
          <div className="p-8 md:p-10">
            {/* Best Value Badge */}
            <div className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold mb-6">
              Best Value
            </div>
            
            {/* Regular Price with Strike-through */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-500 text-lg md:text-xl">Regular Fee</span>
              <span className="text-gray-400 line-through text-2xl md:text-3xl">₹24,999</span>
            </div>
            
            {/* Offer Price */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">₹19,999</span>
              <span className="text-lg md:text-xl">?</span>
            </div>
            
            {/* Duration & Format */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="block text-base mb-1">Duration</span>
                <span className="poppins-bold text-xl md:text-2xl text-gray-900">3 Months</span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="block text-base mb-1">Format</span>
                <span className="poppins-bold text-xl md:text-2xl text-gray-900">Offline</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-4">
              <Link
                href="/book-demo"
                className="block w-full bg-black text-white text-center py-4 px-6 rounded-lg poppins-bold text-lg md:text-xl hover:bg-gray-800 transition-colors"
              >
                Book a Free Demo & Know the Price
              </Link>
              <Link
                href="/enrollnow"
                className="block w-full bg-white text-black text-center py-4 px-6 rounded-lg poppins-bold text-lg md:text-xl border-2 border-black hover:bg-gray-50 transition-colors"
              >
                Reserve Your Seat Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* What You Will Learn Section */}
  <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="bungee-shade-regular text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
        What You Will Learn
      </h3>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
        Our curriculum is updated weekly to match current global trends.
      </p>
      
      {/* Download Syllabus Button */}
      <Link
        href="/syllabus.pdf"
        className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg poppins-bold text-lg md:text-xl hover:bg-gray-800 transition-colors group"
      >
        <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download Syllabus PDF
      </Link>
    </div>
  </div>

  {/* Who Should Enroll Section */}
  <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-gray-50">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="bungee-shade-regular text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 mb-8">
        Who Should Enroll?
      </h3>
      
      {/* Add your enrollment criteria here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <span className="poppins-bold text-2xl">🎨</span>
          <h4 className="poppins-bold text-xl mt-4 mb-2">Creative Beginners</h4>
          <p className="text-base">No prior experience needed. Start from scratch.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <span className="poppins-bold text-2xl">💼</span>
          <h4 className="poppins-bold text-xl mt-4 mb-2">Working Professionals</h4>
          <p className="text-base">Upskill or switch to a creative career.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <span className="poppins-bold text-2xl">📱</span>
          <h4 className="poppins-bold text-xl mt-4 mb-2">Freelancers</h4>
          <p className="text-base">Expand your service offerings.</p>
        </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
          <span className="poppins-bold text-2xl">📱</span>
          <h4 className="poppins-bold text-xl mt-4 mb-2">Freelancers</h4>
          <p className="text-base">Expand your service offerings.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default InnerBanner;
