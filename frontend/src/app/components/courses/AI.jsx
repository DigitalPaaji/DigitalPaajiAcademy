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

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    // Replace this with your actual PDF URL
    const pdfUrl = "/Images/pdf/ai.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AI_DM_Syllabus.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      {/* Sticky Download PDF Button */}
      <div className="w-full mx-auto">
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={handleDownloadPDF}
            className="group relative flex items-center justify-center gap-2 hover:bg-[#e98724] bg-black border border-[#e98724] hover:border-black hover:text-black text-white px-2 lg:px-6 py-3 rounded-lg shadow-xl transition-all duration-300 ease-in-out"
          >
            <span className="text-base font-bold tracking-wider">
              Course Modules
            </span>
            <svg
              className="w-5 h-5 transform group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className=" ">
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 py-12  flex flex-col lg:flex-row items-center gap-4 xl:gap-12 bg-cover bg-center overflow-hidden">
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
             Master AI Based Digital Marketing & Career in 48 Weeks

            </h1>

            {/* Description */}
            <div className="text-sm sm:text-base md:text-lg my-4 sm:my-6">
              <p>
Join the most advanced Ai digital marketing course designed for future marketers. At our ai based digital marketing institute, you will learn how Artificial Intelligence is transforming modern marketing strategies. This program is also ideal for students looking for Ai digital marketing after 12 to start a high-growth career.

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
              <span className="text-[18px] sm:text-lg md:text-xl font-semibold block sm:inline">
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
          <div className="bg-linear-to-b from-[#e9872436] via-transparent to-[#e9872415] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24  2xl:px-40">
            {/* Header */}
            <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h3 className="bungee-shade-regular text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                Why Digital Paaji?
              </h3>
              <p className="text-base text-gray-700 max-w-3xl mx-auto">
             Digital Paaji is a leading AI based digital marketing institute focused on practical implementation of AI tools in real campaigns. Our AI digital marketing course combines marketing fundamentals with automation, AI content tools, and smart advertising strategies. Students searching for AI digital marketing after 12 can build job-ready skills from scratch.

              </p>
            </div>

            {/* Features Grid - 4 columns on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
              {/* Feature 1: Project-Based */}
              <div className="bg-linear-to-br from-[#e9872436] via-transparent to-[#e9872428] rounded-xl p-6 md:p-8 text-center ">
                <img
                  src="/Images/course/portfolio.png"
                  alt=""
                  className="w-16 h-16 mx-auto"
                />
                <h4 className="poppins text-xl xl:text-2xl mb-2 text-gray-900">
                  Project-Based Learning
                </h4>
                <p className="text-base text-gray-800">
                  Build an impressive portfolio while learning. This is an ideal
                  graphic design course after 12th for students who want
                  practical exposure and job-ready skills from day one.
                </p>
              </div>

              {/* Feature 2: Expert Mentors */}
              <div className="bg-linear-to-br from-[#e9872436] via-transparent to-[#e9872428] rounded-xl p-6 md:p-8 text-center ">
                <img
                  src="/Images/course/mentor.png"
                  alt=""
                  className="w-16 h-16 mx-auto"
                />
                <h4 className="poppins text-xl xl:text-2xl mb-2 text-gray-900">
                  Expert Mentors
                </h4>
                <p className="text-base text-gray-800">
                  Learn from professional designers with 8+ years of real
                  industry experience. If you are searching for a graphic design
                  course near me, our trainers provide step-by-step practical
                  guidance.
                </p>
              </div>

              {/* Feature 3: Career Support */}
              <div className="bg-linear-to-br from-[#e9872436] via-transparent to-[#e9872428] rounded-xl p-6 md:p-8 text-center ">
                <img
                  src="/Images/course/career.png"
                  alt=""
                  className="w-16 h-16 mx-auto"
                />
                <h4 className="poppins text-xl xl:text-2xl mb-2 text-gray-900">
                  Career Support
                </h4>
                <p className="text-base text-gray-800">
                  Get mock interview training, resume building support, and
                  career guidance to help you start your design career faster.
                </p>
              </div>

              {/* Feature 4: Free Tools */}
              <div className="bg-linear-to-br from-[#e9872436] via-transparent to-[#e9872428] rounded-xl p-6 md:p-8 text-center ">
                <img
                  src="/Images/course/tools.png"
                  alt=""
                  className="w-16 h-16 mx-auto"
                />
                <h4 className="poppins text-xl xl:text-2xl mb-2 text-gray-900">
                  Free Tools & Resources
                </h4>
                <p className="text-base text-gray-800">
                  Exclusive access to resources and design assets to accelerate
                  your learning journey.
                </p>
              </div>
            </div>
          </div>

          {/* Investment Section with Payment Options */}
          <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24  2xl:px-40 bg-black">
            <div className="flex items-center justify-center flex-wrap gap-8 lg:gap-12">
              {/* Section Header */}
              <div className="mb-8 md:mb-12 w-full lg:w-1/2">
                <h3 className="bungee-shade-regular text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-100">
                  Investment in Your Future
                </h3>
                <p className="text-base text-gray-300 max-w-3xl mt-6">
 The demand for AI-powered marketers is growing rapidly. Enrolling in our ai digital marketing course means learning automation, smart analytics, and AI-driven ad strategies. As a trusted Ai based digital marketing institute, we offer career-focused training with flexible EMI options. This program is perfect for anyone planning Ai digital marketing after 12 to secure future-ready opportunities.

                </p>

                {/* Payment Options */}
                <div className="mt-8 space-y-4">
                  <div className="poppins text-xl xl:text-2xl font-semibold text-gray-200 flex items-center gap-3">
                    <img
                      src="/Images/course/payment.png"
                      alt=""
                      className="bg-gray-300 p-2 rounded-full w-16 h-16"
                    />
                    <span>Pay in easy monthly installments</span>
                  </div>

                  <div className="text-base grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="w-5 h-5 text-[#e98724]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Flexible EMI options available</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="w-5 h-5 text-[#e98724]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>100% practical training with live projects</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="w-5 h-5 text-[#e98724]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Portfolio building support for job placement</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="w-5 h-5 text-[#e98724]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Career guidance and interview preparation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="max-w-2xl mx-auto w-full lg:w-fit">
                <div className="bg-white border-4 border-[#e98724] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative p-8 ">
                    {/* Best Value Badge */}
                    <div className="absolute top-0 right-0  bg-black text-white px-6 py-2 rounded-bl-xl text-base font-semibold mb-6">
                      BEST VALUE
                    </div>

                    {/* Regular Price with Strike-through */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-gray-600 text-[18px] md:text-lg">
                        Regular Fee
                      </span>
                      <span className="text-gray-700 line-through text-lg md:text-xl">
                        ₹45,999
                      </span>
                    </div>

                    {/* Offer Price */}
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900/60 blur-[5px] select-none">
                        ₹39,999
                      </span>
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900/70 blur-[3px] select-none">
                        ?
                      </span>
                    </div>

                    {/* Duration & Format */}
                    <div className="grid grid-cols-2 gap-2 py-4 border-y border-gray-300 mb-8">
                      <div className="text-center space-y-3 ">
                        <p className=" text-base ">Duration</p>
                        <p className="poppins text-lg md:text-xl text-gray-900">
                          48 Weeks
                        </p>
                      </div>
                      <div className="text-center space-y-3">
                        <p className=" text-base ">Format</p>
                        <p className="poppins text-lg md:text-xl text-gray-900">
                          Offline/Online
                        </p>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-4">
                      <Link
                        href="/book-demo"
                        className="block w-full bg-black text-white text-center py-4 px-6 rounded-lg poppins text-lg md:text-xl "
                      >
                        Book a Free Demo & Know the Price
                      </Link>
                      <Link
                        href="/enrollnow"
                        className="block w-full bg-[#e98724] text-black text-center py-4 px-6 rounded-lg poppins text-lg md:text-xl"
                      >
                        Reserve Your Seat Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Scope Section - NEW */}
          <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 bg-linear-to-b from-[#e9872436] via-transparent to-[#e9872415]">
            <div className="text-center mb-12">
              <h3 className="bungee-shade-regular text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900">
                Career Scope 
              </h3>
              <p className="text-base text-gray-700 mt-6 max-w-3xl mx-auto">
              Graduates from our Ai based digital marketing institute are prepared for agencies, startups, and freelancing. This is an excellent option for students pursuing Ai digital marketing after 12.
 Starting Salary: ₹3L - ₹7L (Depends on skills & performance)
After completing this Ai digital marketing course, students can work as:

              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                { title: "AI Marketing Specialist", icon: "/Images/course/seo6.png" },
                { title: "Performance Marketer", icon: "/Images/course/performance.png" },
                {
                  title: "AI Content Strategist",
                  icon: "/Images/course/seo.png",
                },
                {
                  title: "Digital Growth Manager",
                  icon: "/Images/course/ppc.png",
                },
              ].map((role, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <img
                    src={role.icon}
                    alt={role.title}
                    className="w-16 h-16 mx-auto mb-3"
                  />
                  <h4 className="poppins text-sm md:text-base font-semibold text-gray-900">
                    {role.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* What You Will Learn Section */}
          <div className="bg-linear-to-b from-[#e9872436] via-transparent to-[#e9872415] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24  2xl:px-40">
            <div className="text-center">
              <h3 className="bungee-shade-regular text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                What You Will Learn
              </h3>
              <p className="text-base text-gray-700 mb-8 max-w-3xl mx-auto">
           Our curriculum blends traditional marketing with AI-powered systems. At our Ai based digital marketing institute, students master automation tools, AI content generation, and smart performance marketing. This Ai digital marketing course ensures you stay ahead of industry trends.

              </p>

              {/* Features Grid - 4 columns on desktop */}
    {/* Features Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base md:gap-8 mt-12 md:mt-16">

  {/* Module 1 */}
  <div className="relative group cursor-pointer">
    <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
    <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
      <img src="/Images/course/dm.png" className="w-16 h-16 mb-4 group-hover:scale-110 transition" />
      <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
        Marketing Foundation
      </h4>
      <p className="text-gray-600">
        Understand branding, funnels, and core digital marketing principles.
      </p>
    </div>
  </div>

  {/* Module 2 */}
  <div className="relative group cursor-pointer">
    <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 group-hover:top-1 group-hover:left-1.5" />
    <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
      <img src="/Images/course/dm2.png" className="w-16 h-16 mb-4 group-hover:scale-110 transition" />
      <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
        Kickstart Your Journey in Digital Marketing
      </h4>
      <p className="text-gray-600">
        Learn SEO basics, social media, and performance ads integrated with AI tools.
      </p>
    </div>
  </div>

  {/* Module 3 */}
  <div className="relative group cursor-pointer">
    <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 group-hover:top-1 group-hover:left-1.5" />
    <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
      <img src="/Images/course/seo4.png" className="w-16 h-16 mb-4 group-hover:scale-110 transition" />
      <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
        Digital Consumer Behaviour
      </h4>
      <p className="text-gray-600">
        Study online buying psychology, AI-driven targeting, and customer data analysis.
      </p>
    </div>
  </div>

  {/* Module 4 */}
  <div className="relative group cursor-pointer">
    <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 group-hover:top-1 group-hover:left-1.5" />
    <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
      <img src="/Images/course/mentor.png" className="w-16 h-16 mb-4 group-hover:scale-110 transition" />
      <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
        Online Lead Strategy
      </h4>
      <p className="text-gray-600">
        Build automated funnels and generate leads using AI-based systems.
      </p>
    </div>
  </div>

  {/* Module 5 */}
  <div className="relative group cursor-pointer">
    <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 group-hover:top-1 group-hover:left-1.5" />
    <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
      <img src="/Images/course/seo2.png" className="w-16 h-16 mb-4 group-hover:scale-110 transition" />
      <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
        Transform Your Brand with Graphic Design
      </h4>
      <p className="text-gray-600">
        Create AI-assisted creatives and marketing visuals for high-converting campaigns.
      </p>
    </div>
  </div>

</div>
              <div className="w-full  ">
                <div className=" inline-block">
                  <button
                    onClick={handleDownloadPDF}
                    className="group relative flex items-center justify-center gap-2 hover:bg-[#e98724] bg-black border border-[#e98724] hover:border-black hover:text-black text-white px-2 lg:px-6 py-3 rounded-lg shadow-xl transition-all duration-300 ease-in-out"
                  >
                    <span className="text-base font-bold tracking-wider">
                      Download All Modules
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Who Should Enroll Section */}
          <div className="text-center py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 bg-black">
            <h3 className="bungee-shade-regular text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-200 mb-12">
              Who Should Enroll?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 w-full h-full bg-white rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                <div className="relative bg-black backdrop-blur-sm rounded-xl p-6 md:p-8 text-center border border-white transition-all duration-300 ease-out group-hover:top-0.5 group-hover:left-1 min-h-[300px] flex flex-col items-center justify-center">
                  <img
                    src="/Images/course/student.png"
                    alt="Students"
                    className="w-16 h-16 mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <h4 className="poppins text-xl xl:text-2xl mb-2 text-gray-200 transition-colors duration-300 group-hover:text-[#e98724]">
                    Students
                  </h4>
                  <p className="text-base text-gray-300">
                    Perfect for 12th pass students looking to start a creative
                    career
                  </p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-[#e98724]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 w-full h-full bg-white rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                <div className="relative bg-black backdrop-blur-sm rounded-xl p-6 md:p-8 text-center border border-white transition-all duration-300 ease-out group-hover:top-0.5 group-hover:left-1 min-h-[300px] flex flex-col items-center justify-center">
                  <img
                    src="/Images/course/working.png"
                    alt="Working Professionals"
                    className="w-16 h-16 mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <h4 className="poppins text-xl xl:text-2xl mb-2 text-gray-200 transition-colors duration-300 group-hover:text-[#e98724]">
                    Working Professionals
                  </h4>
                  <p className="text-base text-gray-300">
                    Enhance your skills and switch to a creative career
                  </p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-[#e98724]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 w-full h-full bg-white rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                <div className="relative bg-black backdrop-blur-sm rounded-xl p-6 md:p-8 text-center border border-white transition-all duration-300 ease-out group-hover:top-0.5 group-hover:left-1 min-h-[300px] flex flex-col items-center justify-center">
                  <img
                    src="/Images/course/freelance.png"
                    alt="Freelancers"
                    className="w-16 h-16 mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <h4 className="poppins text-xl xl:text-2xl mb-2 text-gray-200 transition-colors duration-300 group-hover:text-[#e98724]">
                    Freelancers
                  </h4>
                  <p className="text-base text-gray-300">
                    Expand your service offerings and increase your income
                  </p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-[#e98724]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 w-full h-full bg-white rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                <div className="relative bg-black backdrop-blur-sm rounded-xl p-6 md:p-8 text-center border border-white transition-all duration-300 ease-out group-hover:top-0.5 group-hover:left-1 min-h-[300px] flex flex-col items-center justify-center">
                  <img
                    src="/Images/course/owner.png"
                    alt="Business Owners"
                    className="w-16 h-16 mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <h4 className="poppins text-xl xl:text-2xl mb-2 text-gray-200 transition-colors duration-300 group-hover:text-[#e98724]">
                    Business Owners
                  </h4>
                  <p className="text-base text-gray-300">
                    Create your own marketing materials and save costs
                  </p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-[#e98724]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section - NEW */}
          <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 bg-linear-to-b from-[#e9872436] via-transparent to-[#e9872415]">
            <div className="max-w-4xl mx-auto">
              <h3 className="bungee-shade-regular text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 text-center mb-12">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4 text-base">
                {/* FAQ 1 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="poppins text-lg md:text-xl font-semibold text-gray-900">
Is prior marketing knowledge required?


                      </span>
                      <span className="text-[#e98724] group-open:rotate-180 transition-transform">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                   No, our AI based digital marketing institute starts from basics and gradually moves to advanced AI tools.

                    </div>
                  </details>
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="poppins text-lg md:text-xl font-semibold text-gray-900">
            Is placement support provided?


                      </span>
                      <span className="text-[#e98724] group-open:rotate-180 transition-transform">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
               Yes, students of our Ai digital marketing course receive portfolio guidance, interview preparation, and career support.


                    </div>
                  </details>
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="poppins text-lg md:text-xl font-semibold text-gray-900">
Will I get a certificate?


                      </span>
                      <span className="text-[#e98724] group-open:rotate-180 transition-transform">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                    Yes, after successfully completing the program at our Ai based digital marketing institute, you will receive a course completion certificate.
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerBanner;


// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// function AddOn() {

//   const modules = [
//     {
//       "title": "Marketing Foundation",
//       "icon": "/Images/course/dmspecialist/1.png",
//       "points": [
//         "History of Marketing",
//         "Traditional vs Digital Marketing",
//         "Soft Skills and Grooming ",
        
//       ]
//     },
//     {
//       "title": "Kickstart Your Journey in Digital Marketing",
//       "icon": "/Images/course/dmspecialist/2.png",
//       "points": [
//         "The Current Opportunity",
//         "Digital Marketing Channels",
//         "Careers in Digital Marketing",
        
//       ]
//     },
//     {
//       "title": "Digital Consumer Behaviour",
//       "icon": "/Images/course/dmspecialist/3.png",
//       "points": [
//         "Digital Consumer Journey",
//         "Understanding Online Business Goals",
      
//       ]
//     },
//     {
//       "title": "Digital Visiblity Strategy",
//       "icon": "/Images/course/dmspecialist/4.png",
//       "points": [
//         "Website Planning",
//         " Local VisibilityStrategy",
//         "Social Media Strategy",
      
//       ]
//     },
//     {
//       "title": "Online Lead Strategy",
//       "icon": "/Images/course/dmspecialist/5.png",
//       "points": [
//         "Need of online Advertising",
//         "Types of Online Ads",
//         "Media Buying Principles",
//         "Cinematic color grading workflow",
//         "Nurturing & Lead Funnels"
//       ]
//     },
//     {
//       "title": "Transform Your Brand with Powerful Graphic Design",
//       "icon": "/Images/course/dmspecialist/6.png",
//       "points": [
//         "Graphic Design Fundamentals",
//         "Designing- Marketing Kits",
//         "Designing Online Documents",
//         "Advanced Design Principles",
//         "Social Media & Whatsapp Banner Design"
//       ]
//     },
//     {
//       "title": "Proven Video Marketing Strategies + How to Launch a Powerful YouTube Channel",
//       "icon": "/Images/course/dmspecialist/7.png",
//       "points": [
//         "Video Creation Strategy",
//         "Importance of Video Marketing •",
//         "Types of Online Videos",
//         "Building Explainer Video Scripts",
//         "Live Exercise: Creating Explainer Videos • Video Scripting",
//         "Basic Video Editing",
//         "Setting Youtube Channel",
//         "Uploading Video on Youtube"
//       ]
//     },
//     {
//       "title": "Master the Art of Website Design with Powerful UI/UX Principles",
//       "icon": "/Images/course/dmspecialist/8.png",
//       "points": [
//       "Buying Domain & Hosting",
//   "Understanding cPanel",
//   "Installing WordPress",
//   "Customizing Theme",
//   "Building Home Page, Blog & E-Commerce Pages",
//   "Adding One Squeeze Page",
//   "Customizing Menu",
//   "Customization Practice & Doubt Session",
//       ]
//     },
//     {
//       "title": "Introduction to Social Media Mastery",
//       "icon": "/Images/course/dmspecialist/9.png",
//       "points": [
//         "Introduction to social media marketing with Case Study",
//         "Social Media Gameplan: Tools, Tips & Growth Hacks",
       
//       ]
//     },
//     {
//       "title": "Building Brands on Facebook",
//       "icon": "/Images/course/dmspecialist/10.png",
//       "points": [
//          "The Power of Facebook for Digital Marketing Success",
//   "Facebook Profile vs Page vs Group",
//   "Creating Facebook Pages and Groups",
//   "Optimizing Facebook Profile Settings",
//   "How to Grow Your Facebook Page",
//   "Meta Business Suite Tools",
//   "Social Media Audit",
//   "Strategic Best Practices",
//   "Facebook Messenger Optimization",
//   "Facebook Posting Ideas",
//   "Creating a Content Calendar",
//   "Facebook Monetization",
//       ]
//     },
//     {
//       "title": "Harnessing the Power of X Marketing",
//       "icon": "/Images/course/dmspecialist/11.png",
//       "points": [
//        "Introduction to X",
//   "Setting Up an Optimized X Profile",
//   "Content Strategy on X",
//   "X Analytics",
//   "Quick Guided Setup",
//   "Success Stories and Case Studies",
//       ]
//     },
//     {
//       "title": "Mastering LinkedIn & LinkedIn Marketing",
//       "icon": "/Images/course/dmspecialist/12.png",
//       "points": [
//           "Build a Powerful LinkedIn Presence to Attract Jobs & Projects",
//   "Introduction to LinkedIn",
//   "Setting Up a LinkedIn Profile: Essential Components",
//   "Optimizing Your LinkedIn Profile",
//   "LinkedIn Analytics",
//   "What Is LinkedIn SSI ?",
//       ]
//     },
//     {
//       "title": "Mastering Instagram for Digital Marketing",
//       "icon": "/Images/course/dmspecialist/13.png",
//       "points": [
//         "Instagram Profile Optimization",
//   "Instagram Competitor & Brand Audit",
//   "Instagram Tools",
//   "Instagram Account Audit",
//   "Campaign Bucket Sheet",
//   "Social Media Content Planning (Content Calendar)",
//   "Influencer Marketing & Research",
//   "Instagram Marketing for Influencers",
//       ]
//     },
//     {
//       "title": "Landing Page Strategies That Work",
//       "icon": "/Images/course/dmspecialist/14.png",
//       "points": [
//          "Key Elements of a Landing Page",
//   "User Flow Designing",
//   "Landing Page Copywriting",
//   "Building Action, Trust & Thank-You Pages",
//   "A/B Versions of Landing Pages",
//   "Key Landing Page Creation Tools",
//       ]
//     },
//     {
//       "title": "Meta Advertising (Instagram & Facebook)",
//       "icon": "/Images/course/dmspecialist/15.png",
//       "points": [
//         "Meta Ads: From Beginner to Advanced",
//   "Meta Ads Ecosystem",
//   "Meta Ad Campaign Structure",
//   "Campaign Objective Types",
//   "Audience Targeting Basics",
//   "Meta Ad Formats",
//   "Meta Ads Policy & Compliance",
//   "Scaling Your Meta Ad Campaign",
//       ]
//     },
//     {
//       "title": "Search Engine Optimization Introduction to SEO",
//       "icon": "/Images/course/dmspecialist/12.png",
//       "points": [
//        "What Is a Search Engine?",
//   "Types of SEO",
//   "SEO Techniques",
//   "Algorithms & Updates",
//   "Keyword Research in SEO",
//     "Blogging",
//       " On-Page Optimization",
//         "HTML Optimization For Search Engine",
//           "Off-Page SEO",
//           "Google Search Console & Webmaster Tools",
//           "Technical SEO",

//           "SEO Audit",

//       ]
//     },
//     {
//       "title": "Google Analytics & Ga4",
//       "icon": "/Images/course/video/m5.png",
//       "points": [
//         "what is Google Analytics 4",
//         "Google Analytics Hierarchy Overview",
//         "Steps For Configuring GA4 & Installation in Website",
//         "Types Of Analytics Reports"
        
//       ]
//     },
//     {
//       "title": "Google Ads Complete Guide ",
//       "icon": "/Images/course/dmspecialist/11.png",
//       "points": [
//    "Google Search Ads",
//   "Bing Ads",
//   "Search Ad Case Study (Real Estate)",
//   "Display Advertising",
//   "Rebranding & Remarketing",
//   "Video Advertising",
//   "Shopping Advertising",
//       ]
//     }








//     ,
//     {
//       "title": "Email Marketing ",
//       "icon": "/Images/course/dmspecialist/18.png",
//       "points": [
//    "Strategic Significance of Email Marketing",
//   "Core Objectives and Strategic Benefits of Remarketing",
//   "Application and ROI Optimization Through Remarketing",
//   "Key Categories of Email Campaigns",
//   "Leading Email Marketing Platforms",
//   "Email Copywriting and Optimization Best Practices",
//   "Marketing Automation & Drip Campaigns",
//   "Email List Building and Lead Capture Tools",
//       ]
//     },
//     {
//       "title": "Quora Marketing ",
//       "icon": "/Images/course/dmspecialist/1.png",
//       "points": [
//   "Overview of Quora for Brand Visibility",
//   "Creating and Optimizing Quora Profiles",
//   "Identifying and Answering High-Value Questions",
//   "Crafting Engaging, SEO-Friendly Answers",
//   "Using Quora Spaces for Community Growth",
//   "Quora Content Strategy and Consistency",
//   "Driving Website Traffic via Quora",
//   "Introduction to Quora Ads",
//   "Tracking Performance and Analytics",
//       ]
//     },
//     {
//       "title": "Pinterest Marketing",
//       "icon": "/Images/course/dmspecialist/9.png",
//       "points": [
//      "Pinterest as a Visual Search Engine",
//   "Setting Up a Business Profile and Boards",
//   "Pinterest SEO and Keyword Optimization",
//   "Seasonal Trends and Campaign Ideas",
//   "Introduction to Promoted Pins (Ads)",
//   "Analyzing Pin Performance with Pinterest Analytics",
//       ]
//     },
//     {
//       "title": "Growth Hacking  ",
//       "icon": "/Images/course/dmspecialist/2.png",
//       "points": [
//      "Introduction to Growth Hacking",
//   "Understanding the AARRR Framework",
//   "Identifying Growth Loops and Funnels",
//   "Customer Persona and Data-Driven Targeting",
//   "Landing Page and Conversion Rate Optimization (CRO)",
//   "Email and Automation for Scalable Growth",
//       ]
//     },
//     {
//       "title": "Online Reputation Managment",
//       "icon": "/Images/course/dmspecialist/3.png",
//       "points": [
//     "Introduction to Online Reputation Management (ORM)",
//   "Key Elements of Reputation Management",
//   "Monitoring Brand Mentions and Sentiments",
//   "Handling Negative Reviews and Feedback",
//   "Building a Positive Online Image",
//   "ORM for Individuals vs Businesses",
//   "Search Engine Reputation Management (SERM)",
//   "Social Media and ORM Integration",
//   "Crisis Management in Digital Reputation",
//   "ORM Tools and Reporting",
//       ]
//     },
//     {
//       "title": "Inbound Marketing ",
//       "icon": "/Images/course/dmspecialist/4.png",
//       "points": [
//    "Inbound Marketing vs Outbound Marketing",
//   "Audience Profiling and Buyer Persona Mapping",
//   "Customer Journey and Buyer Touchpoint Mapping",
//   "High-Impact Content Formats by Funnel Stage",
//   "Strategic Content Distribution Channels",
//   "Content Ideation and Topic Generation",
//   "Creating a Content Ideation Framework",
//   "Content Repurposing Strategy",
//       ]
//     },
//     {
//       "title": "Web Content Writing ",
//       "icon": "/Images/course/video/m6.png",
//       "points": [
//      "Key Fundamentals of Content Writing",
//   "Content Writing for Business Websites",
//   "Leading Tools for Content Creation",
//   "AI-Powered Tools for Content Development",
//   "Conversational Content for Social Media",
//   "E-commerce Content Writing",
//   "Content Writing vs Copywriting",
//   "Best Practices for Copywriting",
//   "Creating Effective Ad Copy",
//   "Writing for Landing Pages",
//   "Funnel Copywriting – WhatsApp and Newsletters",
//   "Storytelling in Content",
//       ]
//     },
//     {
//       "title": "Selling On Amazon & Market Places  ",
//       "icon": "/Images/course/dmspecialist/14.png",
//       "points": [
//  "Prerequisites for Creating an Amazon Seller Account",
//   "Product Listing Best Practices",
//   "Order Management and Shipping",
//   "Pricing and Payments",
//   "Amazon SEO (Search Engine Optimization)",
//   "Amazon Ads (Advertising)",
//       ]
//     },
//     {
//       "title": "Starting an Agency",
//       "icon": "/Images/course/dmspecialist/team.png",
//       "points": [
//    "Leading Freelancing Platforms",
//   "Crafting a Compelling Freelancer/Business Profile",
//   "Strategic Pricing for Services",
//   "Live Walkthrough: Project Acquisition Strategies",
//   "Small Agency/Freelancer Lead Generation",
//   "Case Studies",
//       ]
//     },
//     {
//       "title": "Blogging, Adsense & Affiliate Marketing",
//       "icon": "/Images/course/dmspecialist/15.png",
//       "points": [
//    "Blog Planning & Strategy",
//   "Setting Up Your Blog in WordPress",
//   "Email Marketing Setup For Your Blog",
//   "SEO For Your Blog",
//   "Monetizing Your Blog With Affiliates, Adsense & Collabs",
//   "Top 15 Content Planning & Production Tools For Your Blogs",
//   "Creating & Disseminating Your 1st Blog Post",
//   "Blog Success Blueprint"
//       ]
//     },
//     {
//       "title": "AI Powered Digital Marketing",
//       "icon": "/Images/course/video/m18.png",
//       "points": [
//    "What is AI-Based Digital Marketing?",
//   "Applications of AI in Digital Marketing",
//   "ChatGPT & Prompt Engineering",
//   "AI for Content & Copywriting",
//   "AI Video & Audio Creation",
//   "AI Branding & Design",
//   "AI Marketing & Outreach",
//       ]
//     },
//     {
//       "title": "Interview Process and Preparation",
//       "icon": "/Images/course/graphic/15.png",
//       "points": [
//    "Advanced Masterclasses by Indusrty Experts",
//   "Portfolio Creation with Dedicated Career Mentor",
//   "3 Bonus Earning Courses",
//   "2 Month Industrial Internship with LOR",
//   "Access to DigiPerformer Online Community Forum",
//   "Video Advertising",
//   "Certification and Interview Preparation",
//       ]
//     },
 
//   ]


//   return (
//     <div className="relative   bg-white">

//            <div
//           className="absolute top-0 inset-0 opacity-20 "
//           style={{
//             backgroundImage: "url(/Images/course/bg.png)",

//           }}
//         ></div>
//                    <img
//         className="absolute top-0 left-0 w-full h-auto  opacity-10"
//        src='/Images/course/web.png'
//        alt=""/>     
//                 <img
//         className="absolute bottom-0 right-0 w-full h-auto  opacity-10"
//        src='/Images/course/web.png'
//        alt=""/>
//     <div 
//     className=" bg-linear-to-b from-[#e9872436] py-24 via-transparent to-[#e9872428]"
//     >
//      {/* <div className="text-center py-24 px-4 md:px-12 lg:px-32 xl:px-72 ">
//         <h2 className="  bungee-shade-regular text-4xl md:text-5xl xl:text-7xl font-bold text-center ">
//           Learning Roadmap
//         </h2>

//         <p
//           className="  text-base md:text-md my-4 mx-8 xl:mx-0 text-center"
//           style={{ textAlign: "center" }}
//         >
//          Here at Digital Paaji, we provide an extensive array of SEO services aimed at increasing your online presence and search engine rankings.
//         </p>
//       </div>*/}

//       <div className="relative text-center px-4 md:px-12 xl:px-32  ">

//   <div className="relative z-10">
    
// <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  place-items-center">
//   {modules.map((item, index) => (
//     <div key={index} className="p-2 lg:p-8 w-full  space-y-6  ">
      
//       {/* Icon */}
//    <div className="w-1/2 h-auto ">

  
//         <img
//           src={item.icon}
//          alt={''}
//           className="w-full  h-auto object-cover"
//         />
//     </div>
// <div className=" text-start">

//       {/* Title */}
//       <h2 className=" text-2xl text-black">
//         {item.title}
//       </h2>

//       {/* Points */}
//       <ul className="text-base md:text-lg space-y-2  ">
//         {item.points.map((point, i) => (
//           <li key={i} className="flex items-start  gap-2 text-left">
//             {/* Bullet Icon */}
//             <Image
//               src="/Images/course/point.png" // ← change icon path if needed
//               width={22}
//               height={22}
//               alt="check"
//               className="  mt-1"
//             />                                                            
//             <span>{point}</span>
//           </li>
//         ))}
//       </ul>
// </div>

//     </div>
//   ))}
// </div>


  
//     </div>
//       </div>
//     </div>
//      </div>
//   );
// }

// export default AddOn;