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
    const pdfUrl = "/Images/pdf/ve.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Video_Editing_Syllabus.pdf"; // Name of the downloaded file
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
              Master Video Editing & Career in 3 Months
            </h1>

            {/* Description */}
            <div className="text-sm sm:text-base md:text-lg my-4 sm:my-6">
              <p>
                Join the most practical video editing course in Patiala designed
                for beginners, students, and professionals who want real
                industry skills and career opportunities.
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
                We don't just teach software - we teach storytelling, editing
                psychology, and real client workflow. Our training is perfect
                for students looking for a video editing course after 12th and
                career switchers who want practical skills.
              </p>
            </div>

            {/* Features Grid - 4 columns on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 ">
              {/* Feature 1: Project-Based */}
              <div className="bg-linear-to-br from-[#e9872436] via-transparent to-[#e9872428] rounded-xl p-6 md:p-8 text-center ">
                <img
                  src="/Images/course/portfolio.png"
                  alt=""
                  className="w-16 h-16 mx-auto"
                />
                <h4 className="poppins text-xl md:text-2xl mb-2 text-gray-900">
                  Project-Based Learning
                </h4>
                <p className="text-base text-gray-800">
                  Build an impressive portfolio while learning. This is an ideal
                  Video Editing course after 12th for students who want
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
                <h4 className="poppins text-xl md:text-2xl mb-2 text-gray-900">
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
                <h4 className="poppins text-xl md:text-2xl mb-2 text-gray-900">
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
                <h4 className="poppins text-xl md:text-2xl mb-2 text-gray-900">
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
                  High-quality education shouldn't be expensive. We offer
                  affordable training with flexible EMI options. If you are
                  searching for a video editing course in Patiala, Digital Paaji
                  provides career-focused learning with real project experience.
                </p>

                {/* Payment Options */}
                <div className="mt-8 space-y-4">
                  <div className="poppins text-xl md:text-2xl font-semibold text-gray-200 flex items-center gap-3">
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
                        ₹24,999
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
                          3 Months
                        </p>
                      </div>
                      <div className="text-center space-y-3">
                        <p className=" text-base ">Format</p>
                        <p className="poppins text-lg md:text-xl text-gray-900">
                          Offline
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
                Video editing has become one of the most in-demand creative
                skills in today's digital world. From Netflix series to
                Instagram reels, from corporate presentations to wedding films –
                every industry needs skilled video editors. Starting Salary:
                ₹1.5 L - ₹6.7 LPA
              </p>
            </div>

            {/* Career Roles Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                { title: "Video Editor", icon: "/Images/course/video.png" },
                {
                  title: "Social Media Designer",
                  icon: "/Images/course/sm.png",
                },
                {
                  title: "Brand Identity Designer",
                  icon: "/Images/course/brand.png",
                },
                {
                  title: "Marketing Designer",
                  icon: "/Images/course/idea.png",
                },
                {
                  title: "Freelance Designer",
                  icon: "/Images/course/freelance.png",
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
                Our curriculum is updated regularly to match current video
                production trends. This program also includes basics of motion
                graphics and fundamentals covered in an After Effects course to
                help you become industry-ready.
              </p>

              {/* Features Grid - 4 columns on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-base gap-6 md:gap-8 mt-12 md:mt-16">
                {/* Card 1 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <img
                      src="/Images/course/video1.png"
                      className="w-16 h-16 mb-4 group-hover:scale-110 transition"
                    />
                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Introduction to Video Editing & Premiere Pro Basics
                    </h4>
                    <p className="text-gray-600">
                      Understanding the interface, timeline, and workspace{" "}
                      <br />
                      Importing and organizing footage <br />
                      Basic cutting, trimming, and sequencing techniques
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <img
                      src="/Images/course/pp.png"
                      className="w-16 h-16 mb-4 group-hover:scale-110 transition"
                    />
                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Advanced Editing Techniques in Premiere Pro
                    </h4>
                    <p className="text-gray-600">
                      Multi-camera editing and sync <br />
                      Speed ramping and time remapping <br />
                      Transitions, effects, and keyframe animation
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <img
                      src="/Images/course/color.png"
                      className="w-16 h-16 mb-4 group-hover:scale-110 transition"
                    />
                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Color Correction & Grading
                    </h4>
                    <p className="text-gray-600">
                      Color theory for video <br />
                      Using Lumetri Color panel <br />
                      Creating cinematic looks and color grades
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <img
                      src="/Images/course/sound.png"
                      className="w-16 h-16 mb-4 group-hover:scale-110 transition"
                    />
                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Audio Editing & Sound Design
                    </h4>
                    <p className="text-gray-600">
                      Audio cleanup and noise reduction <br />
                      Adding music, sound effects, and voiceovers <br />
                      Mixing and mastering for professional output
                    </p>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <img
                      src="/Images/course/motion.png"
                      className="w-16 h-16 mb-4 group-hover:scale-110 transition"
                    />
                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Motion Graphics & Visual Effects with After Effects
                    </h4>
                    <p className="text-gray-600">
                      Creating animated titles and lower thirds <br />
                      Text animations and kinetic typography <br />
                      Compositing and visual effects fundamentals
                    </p>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="relative group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-black rounded-xl transition-all duration-500 ease-out group-hover:top-1 group-hover:left-1.5" />
                  <div className="relative bg-white rounded-xl p-6 md:p-8 text-center border border-black transition-all duration-300 group-hover:top-0.5 group-hover:left-1 h-[280px] md:h-[360px] 2xl:h-[320px] flex flex-col gap-2 items-center justify-center">
                    <img
                      src="/Images/course/portfolio.png"
                      className="w-16 h-16 mb-4 group-hover:scale-110 transition"
                    />
                    <h4 className="poppins text-xl xl:text-2xl group-hover:text-[#e98724]">
                      Export & Portfolio Development
                    </h4>
                    <p className="text-gray-600">
                      Export settings for different platforms (YouTube,
                      Instagram, TV) <br />
                      Building a professional showreel <br />
                      Freelancing tips and client management
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
                  <h4 className="poppins text-xl md:text-2xl mb-2 text-gray-200 transition-colors duration-300 group-hover:text-[#e98724]">
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
                  <h4 className="poppins text-xl md:text-2xl mb-2 text-gray-200 transition-colors duration-300 group-hover:text-[#e98724]">
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
                  <h4 className="poppins text-xl md:text-2xl mb-2 text-gray-200 transition-colors duration-300 group-hover:text-[#e98724]">
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
                  <h4 className="poppins text-xl md:text-2xl mb-2 text-gray-200 transition-colors duration-300 group-hover:text-[#e98724]">
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
                        What are the requirements for this course?
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
                      No prior experience is required. Anyone interested in
                      learning editing can join this video editing course after
                      12th or after graduation.
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
                      Yes, we provide portfolio building, freelance guidance,
                      and interview preparation for students of our video
                      editing course in Patiala.
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
                      Yes, you will receive an ISO-certified course completion
                      certificate after finishing the training program.
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
                      and faster learning, especially for students doing a video
                      editing course after 12th.
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
                      Yes, top-performing students may get internship
                      opportunities or live project exposure.
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
//       "title": "MODULE 1: Introduction to Video Editing",
//       "icon": "/Images/course/video/m1.png",
//       "points": [
//         "What is video editing",
//         "Types of editing: cinematic, vlog, reels",
//         "FPS, resolution, bitrate basics",
//         "Video formats (MP4, MOV, ProRes)",
//         "Understanding codecs"
//       ]
//     },
//     {
//       "title": "MODULE 2: Adobe Premiere Pro Workspace & Basics",
//       "icon": "/Images/course/video/m2.png",
//       "points": [
//         "Interface overview",
//         "Importing media",
//         "Timeline navigation",
//         "Keyboard shortcuts for faster editing",
//         "Understanding sequence settings"
//       ]
//     },
//     {
//       "title": "MODULE 3: Basic Editing Tools",
//       "icon": "/Images/course/video/m3.png",
//       "points": [
//         "Razor, Slip, Slide, Ripple, Rolling edits",
//         "Trimming techniques",
//         "Markers & workspace",
//         "Multi-track editing",
//         "Linking & unlinking video/audio"
//       ]
//     },
//     {
//       "title": "MODULE 4: Audio Editing + Sound Design",
//       "icon": "/Images/course/video/m4.png",
//       "points": [
//         "Audio levels, keyframes",
//         "Reducing noise",
//         "Using Essential Sound panel",
//         "Adding SFX, whooshes, cinematic hits",
//         "Syncing audio with video"
//       ]
//     },
//     {
//       "title": "MODULE 5: Color Correction & Grading",
//       "icon": "/Images/course/video/m5.png",
//       "points": [
//         "Lumetri Color panel",
//         "Exposure, contrast, temperature, tint",
//         "LUTs: how to use professionally",
//         "Cinematic color grading workflow",
//         "Skin tone correction"
//       ]
//     },
//     {
//       "title": "MODULE 6: Text, Titles & Graphics",
//       "icon": "/Images/course/video/m6.png",
//       "points": [
//         "Essential Graphics panel",
//         "Lower thirds",
//         "Title animation",
//         "Kinetic typography basics",
//         "Creating templates for reuse"
//       ]
//     },
//     {
//       "title": "MODULE 7: Transitions (Basic to Advanced)",
//       "icon": "/Images/course/video/m7.png",
//       "points": [
//         "Cut-on-action",
//         "Match cuts",
//         "Speed ramping (smooth 60fps ramp)",
//         "Morph cut",
//         "Custom transitions",
//         "Luma fade",
//         "Glitch & zoom transitions"
//       ]
//     },
//     {
//       "title": "MODULE 8: Effects & Motion",
//       "icon": "/Images/course/video/m8.png",
//       "points": [
//         "Scale, Position, Rotation",
//         "Keyframing",
//         "Motion blur",
//         "Warp Stabilizer",
//         "Green screen editing (Ultra Key)",
//         "Nesting clips"
//       ]
//     },
//     {
//       "title": "MODULE 9: Exporting for All Platforms",
//       "icon": "/Images/course/video/m9.png",
//       "points": [
//         "YouTube, Instagram Reel, FB settings",
//         "High-quality export",
//         "Low-size export (client-friendly)",
//         "VBR vs CBR bitrate",
//         "Best codecs (H.264 / H.265)"
//       ]
//     },
//     {
//       "title": "MODULE 10: After Effects – Introduction",
//       "icon": "/Images/course/video/m10.png",
//       "points": [
//         "Interface & workflow",
//         "Compositions & layers",
//         "Importing from Premiere (Dynamic Link)",
//         "Keyframes: spatial & temporal",
//         "Graph editor basics"
//       ]
//     },
//     {
//       "title": "MODULE 11: Text Animation Masterclass",
//       "icon": "/Images/course/video/m11.png",
//       "points": [
//         "Write-on text animation",
//         "Typewriter effect",
//         "Kinetic typography",
//         "Callouts & infographics",
//         "Lower third animations"
//       ]
//     },
//     {
//       "title": "MODULE 12: Motion Graphics",
//       "icon": "/Images/course/video/m12.png",
//       "points": [
//         "Shape layers",
//         "Line animations",
//         "Logo animation",
//         "Icon animation",
//         "Animated transitions",
//         "Using parenting & pick whip"
//       ]
//     },
//     {
//       "title": "MODULE 13: Visual Effects (VFX Essentials)",
//       "icon": "/Images/course/video/m13.jpg",
//       "points": [
//         "Tracking (point, planar, mocha basics)",
//         "Screen replacement",
//         "Object removal",
//         "Camera Shake effects",
//         "Light leaks & overlays",
//         "Green screen keying (Keylight 1.2)"
//       ]
//     },
//     {
//       "title": "MODULE 14: Advanced After Effects Techniques",
//       "icon": "/Images/course/video/m14.png",
//       "points": [
//         "Expressions (wiggle, loop, delay)",
//         "3D layers",
//         "Camera & lights",
//         "Parallax animation",
//         "Fake 3D text"
//       ]
//     },
//     {
//       "title": "MODULE 15: Premiere Pro + After Effects Integration",
//       "icon": "/Images/course/video/m15.png",
//       "points": [
//         "Dynamic Link workflow",
//         "Editing in Premiere, animating in AE",
//         "Replacements & final render pipeline",
//         "Building reusable templates for clients"
//       ]
//     },
//     {
//       "title": "MODULE 16: Content Creation Special Module",
//       "icon": "/Images/course/video/m16.png",
//       "points": [
//         "Editing YouTube vlogs",
//         "Short-form content (reels/tiktok)",
//         "Wedding highlights",
//         "Corporate videos",
//         "Event recaps",
//         "Cinematic B-roll editing"
//       ]
//     },
//     {
//       "title": "MODULE 17: Real Projects (Portfolio Building)",
//       "icon": "/Images/course/video/m17.png",
//       "points": [
//         "3 YouTube videos",
//         "5 Instagram reels",
//         "1 cinematic montage",
//         "1 wedding highlight sample",
//         "1 logo animation",
//         "1 full motion graphics ad",
//         "1 special effects clip (tracking / screen replace)"
//       ]
//     },
//     {
//       "title": "MODULE 18: Final Exam + Certification",
//       "icon": "/Images/course/video/m18.png",
//       "points": [
//         "Full video project",
//         "Motion graphics task",
//         "Export & delivery workflow test",
//         "Feedback & certification"
//       ]
//     }
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
//         alt={''}
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
