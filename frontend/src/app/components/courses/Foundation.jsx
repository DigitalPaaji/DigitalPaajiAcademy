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
    const pdfUrl = "/Images/pdf/dmspecialist.pdf";
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
              Master SEO & Career in 1 Months
            </h1>

            {/* Description */}
            <div className="text-sm sm:text-base md:text-lg my-4 sm:my-6">
              <p>
                Master practical SEO skills, ranking strategies, and real tools
                to build a digital career in 3 months with top SEO training
                institutes in Patiala.
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
                Digital Paaji is among the top SEO training institutes in
                Patiala offering practical, job-focused training. This program
                is ideal for students searching for an SEO course after 12th or
                professionals looking to advance their digital marketing skills.
                Our comprehensive SEO training in Patiala helps students build
                complete search engine optimization expertise and kickstart
                their careers in digital marketing.
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
                  Digital marketing is one of the fastest-growing career fields,
                  and SEO is at its core. Joining our program at one of the
                  leading SEO training institutes in Patiala helps you build
                  strong freelancing and job opportunities. Many students who
                  join an SEO course after 12th gain in-demand skills that lead
                  to excellent career growth and earning potential in the
                  digital marketing industry.
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
                SEO offers long-term stable career growth because every business
                needs online visibility. After completing SEO training, students
                can work in digital marketing agencies, IT companies, startups,
                or as freelancers. SEO also allows remote job opportunities and
                international client work. Starting Salary: ₹1.44 LPA - ₹2.40
                LPA
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                { title: "SEO Executive", icon: "/Images/course/career.png" },
                { title: "SEO Analyst", icon: "/Images/course/career.png" },
                {
                  title: "Digital Marketing Executive",
                  icon: "/Images/course/career.png",
                },
                {
                  title: "Content SEO Specialist",
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
                Our curriculum is designed based on real Google algorithm
                updates and industry best practices. As one of the trusted SEO
                training institutes in Patiala, we focus on practical ranking
                strategies that deliver real results. Students gain
                comprehensive knowledge of on-page SEO, off-page SEO, technical
                SEO, keyword research, and analytics for complete search engine
                optimization mastery.
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
                      Introduction to SEO & Search Engine Fundamentals
                    </h4>
                    <p className="text-gray-600">
                      How search engines work <br />
                      Google ranking factors & algorithms <br />
                      SEO terminology and industry overview
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
                      Keyword Research & Strategy
                    </h4>

                    <p className="text-gray-600">
                      Finding profitable keywords <br />
                      Search intent & keyword mapping <br />
                      Competitor keyword analysis
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
                      On-Page SEO & Content Optimization
                    </h4>

                    <p className="text-gray-600">
                      Title tags & meta optimization <br />
                      SEO content writing <br />
                      URL structure & internal linking
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
                      Technical SEO
                    </h4>

                    <p className="text-gray-600">
                      Website speed optimization <br />
                      Mobile responsiveness & Core Web Vitals <br />
                      Sitemaps, robots.txt & architecture
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
                      Off-Page SEO & Link Building
                    </h4>

                    <p className="text-gray-600">
                      Backlink strategies <br />
                      Guest posting & outreach <br />
                      Local SEO & Google Business optimization
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
                      SEO Tools & Analytics
                    </h4>

                    <p className="text-gray-600">
                      Google Search Console & Analytics <br />
                      SEMrush, Ahrefs & SEO tools <br />
                      Tracking rankings & ROI
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
               What are the Requirements for the SEO course?

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
                Is this SEO course after 12th suitable for beginners?

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
                 Yes, this SEO course after 12th is designed for beginners. We provide step-by-step training in on-page SEO, off-page SEO, keyword research, and website optimization to make students industry-ready.

                    </div>
                  </details>
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="poppins text-lg md:text-xl font-semibold text-gray-900">
Will I get a certificate after completing the SEO training?

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
                    Yes, you will receive a recognized and ISO certified course completion certificate after successfully finishing our SEO training and digital marketing course in Patiala.

                    </div>
                  </details>
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="poppins text-lg md:text-xl font-semibold text-gray-900">
                    Do I need my own laptop for the SEO course after 12th?

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
          Yes, having your own laptop is recommended for practice, live projects, keyword research, and SEO tools during the SEO course after 12th.

                    </div>
                  </details>
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="poppins text-lg md:text-xl font-semibold text-gray-900">
     Are there internships in the SEO course in Patiala?

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
                    Yes, top-performing students get opportunities for internships and live projects through our SEO course in Patiala with real industry exposure.

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

// function Foundation() {

//   const modules = [
//    {
//     "title": "MODULE 01: Digital Marketing Ecosystem",
//     "icon": "/Images/course/dmspecialist/2.png",
//     "points": [
//       "The Current Opportunity",
//       "Digital Marketing Channels",
//       "Careers in Digital Marketing"
//     ]
//   },
//   {
//     "title": "MODULE 02: Computers & Internet Basics",
//     "icon": "/Images/course/dmspecialist/1.png",
//     "points": [
//       "Computers & Internet Basics",
//       "Networking Terms & Concepts",
//       "Web Browser & The Internet",
//       "MS Office",
//       "Internet Research"
//     ]
//   },
//   {
//     "title": "MODULE 03: Google Workspace Mastery",
//     "icon": "/Images/course/dmspecialist/3.png",
//     "points": [
//       "Gmail Customization",
//       "Google Docs",
//       "Google Slides",
//       "Google Forms",
//       "Google Sites"
//     ]
//   },
//   {
//     "title": "MODULE 04: SEO (Search Engine Optimization)",
//     "icon": "/Images/course/dmspecialist/12.png",
//     "points": [
//       "SEO Keyword Research",
//       "On-Page SEO",
//       "HTML for SEO",
//       "Off-Page & Local SEO"
//     ]
//   },
//   {
//     "title": "MODULE 05: Digital Graphics Creation",
//     "icon": "/Images/course/dmspecialist/13.png",
//     "points": [
//       "Basics of Banner Creation",
//       "Resume Creation in Canva",
//       "Social Media Post Creation in Canva",
//       "YouTube Thumbnail Creation in Canva"
//     ]
//   },
//   {
//     "title": "MODULE 06: Social Media Optimization",
//     "icon": "/Images/course/dmspecialist/6.png",
//     "points": [
//       "What is Social Media & Why Care",
//       "Facebook for Business Marketing",
//       "Instagram for Business Marketing",
//       "LinkedIn Profile Setup"
//     ]
//   },
//   {
//     "title": "MODULE 07: Video Creation & Editing",
//     "icon": "/Images/course/dmspecialist/7.png",
//     "points": [
//       "Video Script & Shooting",
//       "Explainer Video Creation",
//       "Social Media Reel Creation",
//       "Basic Video Editing",
//       "Setting YouTube Channel",
//       "Uploading Video on YouTube"
//     ]
//   },
//   {
//     "title": "MODULE 08: Online Advertising",
//     "icon": "/Images/course/dmspecialist/11.png",
//     "points": [
//       "Introduction to Ad Types",
//       "Types of Bidding",
//       "Ad Auction Process",
//       "Ad Targeting Methods",
//       "Ad Budgeting"
//     ]
//   },
//    {
//     "title": "MODULE 09: Communicative English",
//     "icon": "/Images/course/dmspecialist/eng.png",
//     "points": [
//       "Importance of Communication",
//       "Communicating in English (Necessity or Worthless)",
//       "Getting Started with Talk About Self",
//       "Understanding the Building Blocks of English Language"
//     ]
//   },
//   {
//     "title": "MODULE 10: Introduction to Tenses",
//     "icon": "/Images/course/dmspecialist/tenses.png",
//     "points": [
//       "Understanding Tenses and Their Usage",
//       "Sentence Structuring Using Correct Tense Forms",
//       "Speech (Topic Assignment Based on Situation)"
//     ]
//   },
//   {
//     "title": "MODULE 11: Communication Activities & Role Plays",
//     "icon": "/Images/course/dmspecialist/1.png",
//     "points": [
//       "Extempore Speeches",
//       "Role Plays Based on Situations",
//       "Group Discussion",
//       "Team Work",
//       "Debates"
//     ]
//   },
//   {
//     "title": "MODULE 12: Corporate Grooming",
//     "icon": "/Images/course/dmspecialist/team.png",
//     "points": [
//       "Body Language",
//       "Dressing Etiquettes – Dressing as per the Occasion",
//       "Telephonic Communication",
//       "Do's and Don'ts of Corporate World",
//       "Professional E-mail Etiquettes"
//     ]
//   },
//   {
//     "title": "MODULE 13: Interview Preparation",
//     "icon": "/Images/course/graphic/15.png",
//     "points": [
//       "Resume Building",
//       "Mock Interview Session",
//       "Common Interview Questionnaire and Relevant Answers"
//     ]
//   }
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
//             alt={''}
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

// export default Foundation;