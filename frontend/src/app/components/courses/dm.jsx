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
    const pdfUrl = "/syllabus.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Digital_Paaji_Syllabus.pdf"; // Name of the downloaded file
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
              Become a Digital Marketing Specialist in 4 Months
            </h1>

            {/* Description */}
            <div className="text-sm sm:text-base md:text-lg my-4 sm:my-6">
              <p>
                Master digital marketing skills, tools, and real campaign
                strategies in 4 months with our digital marketing course in
                Patiala designed for practical learning and career growth.
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
                Digital Paaji is a trusted digital marketing institute Patiala
                offering practical, industry-focused training. This program is
                perfect for students searching for a digital marketing course
                after 12th or professionals looking for career growth. Our
                digital marketing course in Patiala focuses on live projects,
                tools, and real campaign training to make you job-ready.
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
                  Digital Marketing Specialist course after 12th for students who want
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
                  Digital marketing is one of the fastest growing career fields.
                  Joining our digital marketing course in Patiala helps you
                  build strong job, freelancing, and business opportunities.
                  Many students choose our digital marketing course after 12th
                  to start earning early. As a leading digital marketing
                  institute Patiala, we focus on long-term career success.
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
                        ₹25,999
                      </span>
                    </div>

                    {/* Offer Price */}
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900/60 blur-[5px] select-none">
                        ₹19,999
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
                         16 Weeks
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
                Digital marketing offers strong long-term career growth because
                every business is shifting online. After completing a digital
                marketing course, students can work in marketing agencies, IT
                companies, startups, e-commerce companies, or start freelancing.
                Digital marketing also allows remote jobs and international
                client opportunities. Starting Salary: ₹2.0 - ₹3.5 LPA
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Digital Marketing Executive",
                  icon: "/Images/course/career.png",
                },
                {
                  title: "SEO Executive",
                  icon: "/Images/course/career.png",
                },
                {
                  title: "Social Media Manager",
                  icon: "/Images/course/career.png",
                },
                {
                  title: "Performance Marketing Executive",
                  icon: "/Images/course/career.png",
                },
                {
                  title: "Google Ads Specialist",
                  icon: "/Images/course/career.png",
                },
                {
                  title: "Content Marketing Executive",
                  icon: "/Images/course/career.png",
                },
                {
                  title: "Email Marketing Executive",
                  icon: "/Images/course/career.png",
                },
                {
                  title: "Freelance Digital Marketer",
                  icon: "/Images/course/career.png",
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
                Our curriculum is designed based on real industry trends and
                tools. As a professional digital marketing institute Patiala, we
                provide practical training covering the complete marketing
                ecosystem to build strong career-ready skills.
              </p>

              {/* Features Grid - 4 columns on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base md:gap-8 mt-12 md:mt-16">
                {/* Module 1 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative  bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/Images/course/portfolio.png"
                        className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition"
                      />
                    </div>
                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Introduction to Digital Marketing
                    </h4>
                    <p className="text-gray-600">
                      Learn digital marketing basics, online branding, and
                      marketing channels. Core foundation taught in digital
                      marketing institute Patiala programs for beginners.
                    </p>
                  </div>
                </div>

                {/* Module 2 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative  bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/Images/course/mentor.png"
                        className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition"
                      />
                    </div>

                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Social Media Marketing
                    </h4>

                    <p className="text-gray-600">
                      Learn content strategy, posting plans, and audience
                      targeting. Important skills included in digital marketing
                      courses after 12th for modern marketing careers.
                    </p>
                  </div>
                </div>

                {/* Module 3 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative  bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/Images/course/career.png"
                        className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition"
                      />
                    </div>

                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Google My Business Setup
                    </h4>

                    <p className="text-gray-600">
                      Learn business listing setup, optimization, and local
                      visibility strategies. Covered in a digital marketing
                      course in Patiala for local business marketing.
                    </p>
                  </div>
                </div>

                {/* Module 4 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative  bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/Images/course/portfolio.png"
                        className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition"
                      />
                    </div>

                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      SEO (On Page, Off Page, Technical, Local)
                    </h4>

                    <p className="text-gray-600">
                      Learn website ranking, keyword optimization, backlinks,
                      and local SEO strategies taught by digital marketing
                      institute Patiala experts.
                    </p>
                  </div>
                </div>

                {/* Module 5 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative  bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/Images/course/mentor.png"
                        className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition"
                      />
                    </div>

                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Graphic Designing - Canva
                    </h4>

                    <p className="text-gray-600">
                      Learn to create social media posts, ads, and brand
                      creatives. Practical skill included in digital marketing
                      course after 12th training modules.
                    </p>
                  </div>
                </div>

                {/* Module 6 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative  bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/Images/course/career.png"
                        className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition"
                      />
                    </div>

                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Meta Ads (Instagram & Facebook Ads)
                    </h4>

                    <p className="text-gray-600">
                      Learn ad campaign setup, audience targeting, and
                      performance tracking. Important module taught in digital
                      marketing course in Patiala programs.
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
                        Who can join this course?
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
                      Anyone interested in digital marketing, including students
                      after 12th, graduates, and business owners.
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
                      Yes, we provide portfolio guidance, interview preparation,
                      and career support.
                    </div>
                  </details>
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="poppins text-lg md:text-xl font-semibold text-gray-900">
                        {" "}
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
                      Yes, you will receive an ISO-certified course completion
                      certificate after successfully completing the training.
                    </div>
                  </details>
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="poppins text-lg md:text-xl font-semibold text-gray-900">
                        Do I need my own laptop?
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
                      Yes, having your own laptop is recommended for practice
                      and faster learning.
                    </div>
                  </details>
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="poppins text-lg md:text-xl font-semibold text-gray-900">
                        Are there internships?
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
                      Yes, top-performing students may get internships or live
                      project opportunities.
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
//       "title": "MODULE 1: Marketing Foundation",
//       "icon": "/Images/course/dmspecialist/1.png",
//       "points": [
//         "History of Marketing",
//         "Traditional vs. Digital Marketing",

//       ]
//     },
//     {
//       "title": "MODULE 2: Digital Marketing Ecosystem",
//       "icon": "/Images/course/dmspecialist/2.png",
//       "points": [
//         "The Current Opportunity",
//         "Digital Marketing Channels",
//         "Careers in Digital Marketing",

//       ]
//     },
//     {
//       "title": "MODULE 3: Digital Consumer Behaviour",
//       "icon": "/Images/course/dmspecialist/3.png",
//       "points": [
//         "Digital Consumer Journey",
//         "Understanding Online Business Goals",

//       ]
//     },
//     {
//       "title": "MODULE 4: Digital Visibility Strategy",
//       "icon": "/Images/course/dmspecialist/4.png",
//       "points": [
//         "Website Planning",
//         "Local Visibility",
//         "Social Media Visibility",

//       ]
//     },
//     {
//       "title": "MODULE 5: Online Lead Strategy",
//       "icon": "/Images/course/dmspecialist/5.png",
//       "points": [
//         "Need of Online Advertising",
//         "Types of Online Ads",
//         "Media Buying Principles",
//         "Nurturing & Lead Funnels",

//       ]
//     },
//     {
//       "title": "MODULE 6: Graphic Designing For Business",
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
//       "title": "MODULE 7: Video Marketing For Business",
//       "icon": "/Images/course/dmspecialist/7.png",
//       "points": [
//         "Video Creation Strategy",
//         "Importance of Video Marketing",
//         "Types of Online Videos",
//         "Building Explainer Video Scripts",
//         "Live Exercise: Creating Explainer Videos",
//         "Video Scripting",
//         "Basic Video Editing",
//             "Setting Youtube Channel",
//         "Uploading Video on Youtube"
//       ]
//     },
//     {
//       "title": "MODULE 8: Building Your Business Website",
//       "icon": "/Images/course/dmspecialist/8.png",
//       "points": [
//         "Buying Domain & Hosting",
//         "Understanding C-panel",
//         "Installing WordPress",
//         "Customizing Theme",
//         "Building Home Page & Blog",
//         "Adding One Squeeze Page",
//         "Customizing Menu",
//         "Customization Practice & Doubt Session"
//       ]
//     },
//     {
//       "title": "MODULE 9: Introduction to Social Media",
//       "icon": "/Images/course/dmspecialist/9.png",
//       "points": [
//         "Social Media Marketing Concept",
//         "Exploring Social Media Channels",
//         "Facebook Business Marketing",
//               "Twitter Marketing",
//         "LinkedIn Marketing",
//         "Instagram Marketing",

//       ]
//     },
//     {
//       "title": "MODULE 10: Landing Page Optimization",
//       "icon": "/Images/course/dmspecialist/10.png",
//       "points": [
//         "Things to Know when planning a Lead Generation Campaign",
//         "Key Elements of a Landing Page",
//         "User Flow Designing",
//         "LP Copywriting",
//         "Building: Action, Trust & Thank-You Page",
//         "A/B Versions Of LP",
//         "Key LP Creation Tools"
//       ]
//     },
//     {
//       "title": "MODULE 11: Facebook & Instagram Advertising",
//       "icon": "/Images/course/dmspecialist/11.png",
//       "points": [
//         "Introduction to Facebook & IG Ads Importance",
//         "Types of Ads- Image, Video, Carousel, Story etc.",
//         "Types of Campaigns- Awareness, Consideration, Conversion",
//         "Sub campaigns- Reach, Traffic, Lead Generation, Sales, App Install etc.",
//         "FB & Instagram Ad Policies",
//         "Creating Your Ad Campaign- Live Walkthrough",
//         "Ad Campaign Best Practices",
//         "Ad Campaign Case-Study"
//       ]
//     },
//     {
//       "title": "MODULE 12: Introduction to SEO",
//       "icon": "/Images/course/dmspecialist/12.png",
//       "points": [
//         "Google Search Console Tool",
//         "SEO Keyword Research",
//         "Off Page SEO: Link Building Techniques",
//         "On Page SEO: Content Optimization",
//         "Local SEO",
//         "On Page SEO: Technical & HTML"
//       ]
//     },
//     {
//       "title": "MODULE 13: Web Analytics & Traffic Reporting",
//       "icon": "/Images/course/dmspecialist/13.png",
//       "points": [
//         "Introduction to Web Analytics",
//         "Introduction to Google Analytics",
//         "Google Analytics Account Structure",
//         "Google Analytics Audience Report",
//         "Google Analytics Acquisition Report",
//         "Google Analytics Behaviour Report",
//         "Installing Google Analytics On Website"
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
//     <div className="w-1/2 h-auto ">

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
//               src="/Images/course/point.png"
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
