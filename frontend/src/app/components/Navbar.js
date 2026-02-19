"use client";
import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
function Navbar({openPopup}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const btnRef = useRef(null);
  const borderRef = useRef(null);
  const dropdownRef = useRef(null);


const [courseMenuOpen, setCourseMenuOpen] = useState(false);

useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [menuOpen]);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1280) { // xl breakpoint
      setMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const handleMouseEnter = () => {
    gsap.to(btnRef.current, {
      y: 2,
      scale: 0.98,
      duration: 0,
      ease: "power3.inOut",
    });

    gsap.fromTo(
      borderRef.current,
      {
        scale: 1,
        opacity: 0.5,
      },
      {
        scale: 1.1,
        opacity: 1,
        duration: 0.2,
        ease: "power3.out",
      }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      y: 0,
      scale: 1,
      duration: 0.2,
      ease: "power3.inOut",
    });

    gsap.to(borderRef.current, {
      scale: 1,
      opacity: 0.5,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", display: "flex" }
      );
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          if (dropdownRef.current) {
            dropdownRef.current.style.display = "none";
          }
        },
      });
    }
  }, [menuOpen]);


  const [isHovering, setIsHovering] = useState(false);

   const handleMouseHover = () => {
    setIsHovering(true);
  };

  const handleMouseHoverLeave = () => {
    setIsHovering(false);
  }
  return (
    <div className="fixed  top-0 w-full h-[100px] z-[99999] backdrop-blur-md bg-gradient-to-b from-black/70 via-black/60 to-transparent ">
      <div className="text-black flex items-center justify-between px-6 lg:px-12 xl:px-24 h-[100px]">
     
     
     
        <Link href={"/"}
          className="relative flex items-center justify-start gap-2 w-fit xl:w-[250px]"
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseHoverLeave}
        >
           <div
              className="hidden xl:block w-16 h-auto overflow-hidden cursor-pointer transition-all duration-400"
              onMouseEnter={() => handleMouseHover("logo2")}
            >
              <Image width={200} height={200} src="/favicon.webp" alt="logo" className="w-16 h-16 object-cover" />
            </div>
            <div
              className="block xl:hidden overflow-hidden cursor-pointer"
              onMouseEnter={() => handleMouseEnter("logo2")}
            >
              <Image width={200} height={200} src="/Images/whitelogo.webp" alt="logo" className="w-[9rem] h-[3rem] object-contain"/>
            </div>

           
          {/* xl screen Logo */}
          {/* <Link href={"/"} className="">
            <div
              className="hidden xl:block w-16 h-auto overflow-hidden cursor-pointer transition-all duration-400"
              onMouseEnter={() => handleMouseHover("logo2")}
            >
              <Image width={200} height={200} src="/favicon.webp" alt="logo" className="w-12 h-12 object-cover" />
            </div>
          </Link> */}

          
          <div
            className={`hidden xl:flex items-center justify-center overflow-hidden transition-[width] duration-1000 ease-in-out h-[3rem] ${
              isHovering ? "w-32 object-cover" : "w-0"
            }`}
          >
            <Image width={200} height={200}
              src="/Images/whitelogo.webp"
              alt="logo2"
              className=" w-full h-[100%]"
            />
          </div>
      </Link>

   <ul className="poppins text-white hidden xl:flex space-x-8 font-medium text-base xl:text-md">
  {/* Course Corner with Mega Dropdown */}
  <li className="relative group">
    <Link 
      href="/#course-corner" 
      className="relative inline-block group"
    >
      <span>Course Corner</span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff850d] transition-[width] duration-300 group-hover:w-full"></span>
    </Link>
    
    {/* Mega Dropdown Menu */}
    <div className="absolute left-0 top-full mt-2 w-[600px] bg-black/95 backdrop-blur-sm border border-[#ff850d]/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-6">
      <div className="grid grid-cols-2 gap-4">
        {/* Video Editing Course */}
        <Link href="/courses/video-editing-course-patiala" className="block p-3 hover:bg-[#ff850d]/10 rounded-lg transition-colors duration-300">
          <h4 className="text-[#ff850d] font-semibold text-sm">Video Editing Course</h4>
          <p className="text-gray-400 text-xs mt-1">12 Weeks • 18 Modules</p>
        </Link>

        {/* Digital Marketing Specialist */}
        <Link href="/courses/digital-marketing-specialist-course-patiala" className="block p-3 hover:bg-[#ff850d]/10 rounded-lg transition-colors duration-300">
          <h4 className="text-[#ff850d] font-semibold text-sm">Digital Marketing Specialist</h4>
          <p className="text-gray-400 text-xs mt-1">16 Weeks • 12 Modules</p>
        </Link>

        {/* Graphic Designing Course */}
        <Link href="/courses/graphic-designing-course-patiala" className="block p-3 hover:bg-[#ff850d]/10 rounded-lg transition-colors duration-300">
          <h4 className="text-[#ff850d] font-semibold text-sm">Graphic Designing Course</h4>
          <p className="text-gray-400 text-xs mt-1">8 Weeks • 16 Modules</p>
        </Link>

        {/* Web Design & Development */}
        <Link href="/courses/web-design-and-development-course-patiala" className="block p-3 hover:bg-[#ff850d]/10 rounded-lg transition-colors duration-300">
          <h4 className="text-[#ff850d] font-semibold text-sm">Web Design & Development</h4>
          <p className="text-gray-400 text-xs mt-1">12 Weeks • 16 Modules</p>
        </Link>



        {/* Digital Marketing Master */}
        <Link href="/courses/digital-marketing-master-course-patiala" className="block p-3 hover:bg-[#ff850d]/10 rounded-lg transition-colors duration-300">
          <h4 className="text-[#ff850d] font-semibold text-sm">Digital Marketing Master</h4>
          <p className="text-gray-400 text-xs mt-1">24 Weeks • 15 Modules</p>
        </Link>

        {/* Performance Marketing */}
        <Link href="/courses/performance-marketing-specialization-course-patiala" className="block p-3 hover:bg-[#ff850d]/10 rounded-lg transition-colors duration-300">
          <h4 className="text-[#ff850d] font-semibold text-sm">Performance Marketing</h4>
          <p className="text-gray-400 text-xs mt-1">8 Weeks • 10 Modules</p>
        </Link>

        {/* Social Media Marketing */}
        <Link href="/courses/social-media-marketing-mastery-course-patiala" className="block p-3 hover:bg-[#ff850d]/10 rounded-lg transition-colors duration-300">
          <h4 className="text-[#ff850d] font-semibold text-sm">Social Media Marketing</h4>
          <p className="text-gray-400 text-xs mt-1">8 Weeks • 7 Modules</p>
        </Link>

        {/* SEO Mastery */}
        <Link href="/courses/search-engine-optimization-mastery-course-patiala" className="block p-3 hover:bg-[#ff850d]/10 rounded-lg transition-colors duration-300">
          <h4 className="text-[#ff850d] font-semibold text-sm">SEO Mastery</h4>
          <p className="text-gray-400 text-xs mt-1">8 Weeks • 6 Modules</p>
        </Link>

        {/* AI Based Digital Marketing */}
        <Link href="/courses/ai-based-digital-marketing-course-patiala" className="block p-3 hover:bg-[#ff850d]/10 rounded-lg transition-colors duration-300">
          <h4 className="text-[#ff850d] font-semibold text-sm">AI Based Digital Marketing</h4>
          <p className="text-gray-400 text-xs mt-1">48 Weeks • 8 Modules</p>
        </Link>
      </div>
      
      {/* View All Courses Link */}
      <div className="mt-4 pt-4 border-t border-[#ff850d]/30 text-center">
        <Link href="/#course-corner" className="text-[#ff850d] hover:text-white transition-colors duration-300 text-sm font-semibold">
          View All Courses →
        </Link>
      </div>
    </div>
  </li>

  {/* Other menu items remain the same */}
  <li>
    <Link href="/about" className="relative inline-block group">
      <span>Paaji Diaries</span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff850d] transition-[width] duration-300 group-hover:w-full"></span>
    </Link>
  </li>
  
  <li>
    <Link href="/vibe" className="relative inline-block group">
      <span>Vibe Check</span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff850d] transition-[width] duration-300 group-hover:w-full"></span>
    </Link>
  </li>
  
  <li>
    <Link href="/result" className="relative inline-block group">
      <span>Student Certificates</span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff850d] transition-[width] duration-300 group-hover:w-full"></span>
    </Link>
  </li>
  
  <li>
    <Link href="/contact" className="relative inline-block group">
      <span>Talk to Paaji</span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff850d] transition-[width] duration-300 group-hover:w-full"></span>
    </Link>
  </li>
</ul>


     {/* Enroll Now - Right */}

  <div className="relative z-20 w-24 sm:w-28 lg:w-36 h-10 sm:h-12 group">
  
    <div
      className="absolute top-[6px] left-[4px] 
      bg-black border-2 border-[#000000b4] 
      w-full h-full rounded-md 
      transition-all duration-150 
   group-hover:top-[4px] group-hover:left-[3px]"
    />

    <Link
    href={"/enrollnow"}
      // onClick={() => openPopup()}
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        poppins-bold cursor-pointer absolute top-0 left-0 
        w-full h-full bg-white text-black rounded-md 
        flex items-center justify-center 
        transition-all duration-150 
        group-hover:top-[2px] group-hover:left-[2px]  animate-fadeUp"
    >
      Enroll Now
    </Link>
  </div>




        {/* Hamburger Icon - Mobile */}
       
          <button onClick={toggleMenu} className="xl:hidden text-2xl cursor-pointer text-white">
            {menuOpen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
          </button>
       
      </div>
<ul
  ref={dropdownRef}
  className={`poppins xl:hidden flex flex-col bg-black/95 backdrop-blur-sm border border-[#ff850d]/30 text-white shadow-xl mx-4 md:mx-8  rounded-xl px-4 py-6 text-center text-md font-medium 
  max-h-[85vh] overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900
  ${menuOpen ? 'block' : 'hidden'}`}
>


  {/* Course Corner with Expandable Submenu - Enhanced */}
  <li className="w-full mb-2">
    <button 
      onClick={() => setCourseMenuOpen(!courseMenuOpen)}
      className="cursor-pointer flex items-center justify-between gap-2 w-full p-3 rounded-lg hover:bg-gray-900/20 transition-all duration-300 group"
    >
      <span className="flex items-center gap-2">
        <svg className="w-5 h-5 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="group-hover:text-[#ff850d] transition-colors">Course Corner</span>
      </span>
      <svg 
        className={`w-5 h-5 transition-transform duration-300 ${courseMenuOpen ? 'rotate-180' : ''} text-gray-400`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    {/* Expandable Course Menu - Grid Layout */}
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${courseMenuOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="mt-2 p-2 bg-black/50 rounded-lg border border-gray-50/20">
        {/* Course Categories */}
        <div className="grid grid-cols-1 gap-2">
          {/* Video Editing */}
          <Link 
            href="/courses/video-editing-course-patiala" 
            onClick={() => {
              setMenuOpen(false);
              setCourseMenuOpen(false);
            }}
            className="block p-3 rounded-lg hover:bg-gray-800/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#ff850d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <span className="font-semibold block group-hover:text-[#ff850d] transition-colors">Video Editing Course</span>
                <span className="text-gray-400 text-xs">12 Weeks • 18 Modules</span>
              </div>
            </div>
          </Link>

          {/* Digital Marketing Specialist */}
          <Link 
            href="/courses/digital-marketing-specialist-course-patiala"
            onClick={() => {
              setMenuOpen(false);
              setCourseMenuOpen(false);
            }}
            className="block p-3 rounded-lg hover:bg-gray-800/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#ff850d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <span className="font-semibold block group-hover:text-[#ff850d] transition-colors">Digital Marketing Specialist</span>
                <span className="text-gray-400 text-xs">16 Weeks • 12 Modules</span>
              </div>
            </div>
          </Link>

          {/* Graphic Designing */}
          <Link 
            href="/courses/graphic-designing-course-patiala"
            onClick={() => {
              setMenuOpen(false);
              setCourseMenuOpen(false);
            }}
            className="block p-3 rounded-lg hover:bg-gray-800/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#ff850d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <span className="font-semibold block group-hover:text-[#ff850d] transition-colors">Graphic Designing Course</span>
                <span className="text-gray-400 text-xs">8 Weeks • 16 Modules</span>
              </div>
            </div>
          </Link>

          {/* Web Design & Development */}
          <Link 
            href="/courses/web-design-and-development-course-patiala"
            onClick={() => {
              setMenuOpen(false);
              setCourseMenuOpen(false);
            }}
            className="block p-3 rounded-lg hover:bg-gray-800/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#ff850d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <span className="font-semibold block group-hover:text-[#ff850d] transition-colors">Web Design & Development</span>
                <span className="text-gray-400 text-xs">12 Weeks • 16 Modules</span>
              </div>
            </div>
          </Link>

     

          {/* Digital Marketing Master */}
          <Link 
            href="/courses/digital-marketing-master-course-patiala"
            onClick={() => {
              setMenuOpen(false);
              setCourseMenuOpen(false);
            }}
            className="block p-3 rounded-lg hover:bg-gray-800/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#ff850d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <span className="font-semibold block group-hover:text-[#ff850d] transition-colors">Digital Marketing Master</span>
                <span className="text-gray-400 text-xs">24 Weeks • 15 Modules</span>
              </div>
            </div>
          </Link>

          {/* Performance Marketing */}
          <Link 
            href="/courses/performance-marketing-specialization-course-patiala"
            onClick={() => {
              setMenuOpen(false);
              setCourseMenuOpen(false);
            }}
            className="block p-3 rounded-lg hover:bg-gray-800/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#ff850d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <span className="font-semibold block group-hover:text-[#ff850d] transition-colors">Performance Marketing</span>
                <span className="text-gray-400 text-xs">8 Weeks • 10 Modules</span>
              </div>
            </div>
          </Link>

          {/* Social Media Marketing */}
          <Link 
            href="/courses/social-media-marketing-mastery-course-patiala"
            onClick={() => {
              setMenuOpen(false);
              setCourseMenuOpen(false);
            }}
            className="block p-3 rounded-lg hover:bg-gray-800/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#ff850d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <span className="font-semibold block group-hover:text-[#ff850d] transition-colors">Social Media Marketing</span>
                <span className="text-gray-400 text-xs">8 Weeks • 7 Modules</span>
              </div>
            </div>
          </Link>

          {/* SEO Mastery */}
          <Link 
            href="/courses/search-engine-optimization-mastery-course-patiala"
            onClick={() => {
              setMenuOpen(false);
              setCourseMenuOpen(false);
            }}
            className="block p-3 rounded-lg hover:bg-gray-800/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#ff850d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <span className="font-semibold block group-hover:text-[#ff850d] transition-colors">SEO Mastery</span>
                <span className="text-gray-400 text-xs">8 Weeks • 6 Modules</span>
              </div>
            </div>
          </Link>

          {/* AI Based Digital Marketing */}
          <Link 
            href="/courses/ai-based-digital-marketing-course-patiala"
            onClick={() => {
              setMenuOpen(false);
              setCourseMenuOpen(false);
            }}
            className="block p-3 rounded-lg hover:bg-gray-800/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#ff850d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <span className="font-semibold block group-hover:text-[#ff850d] transition-colors">AI Based Digital Marketing</span>
                <span className="text-gray-400 text-xs">48 Weeks • 8 Modules</span>
              </div>
            </div>
          </Link>
        </div>

        {/* View All Courses Link */}
        <Link 
          href="/#course-corner"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block mt-3 p-3 bg-[#ff850d] hover:bg-[#ff850d]/90 text-black font-semibold text-center rounded-lg transition-all duration-300 hover:scale-[1.02]"
        >
          Browse All Courses →
        </Link>
      </div>
    </div>
  </li>

  {/* Regular Menu Items with Icons */}
  <li className="w-full mb-1">
    <Link 
      href="/about" 
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-900/20 transition-all duration-300 group"
    >
      <svg className="w-5 h-5 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span className="group-hover:text-[#ff850d] transition-colors">Paaji Diaries</span>
    </Link>
  </li>
  
  <li className="w-full mb-1">
    <Link 
      href="/vibe" 
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-900/20 transition-all duration-300 group"
    >
      <svg className="w-5 h-5 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="group-hover:text-[#ff850d] transition-colors">Vibe Check</span>
    </Link>
  </li>
  
  <li className="w-full mb-1">
    <Link 
      href="/contact" 
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-900/20 transition-all duration-300 group"
    >
      <svg className="w-5 h-5 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span className="group-hover:text-[#ff850d] transition-colors">Talk to Paaji</span>
    </Link>
  </li>
  
  <li className="w-full mb-1">
    <Link 
      href="/result" 
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-900/20 transition-all duration-300 group"
    >
      <svg className="w-5 h-5 text-[#ff850d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="group-hover:text-[#ff850d] transition-colors">Student Certificates</span>
    </Link>
  </li>

</ul>
   
  
{/* {isOpen && <Popup closeMenu={closeMenu} className=""/>}  */}

      
    </div>
  );
}

export default Navbar;
