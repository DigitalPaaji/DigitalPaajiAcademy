"use client";
import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
// import { usePathname } from 'next/navigation';

function Navbar({openPopup}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const btnRef = useRef(null);
  const borderRef = useRef(null);
  const dropdownRef = useRef(null);
// Add these state declarations at the top of your component

const [courseMenuOpen, setCourseMenuOpen] = useState(false);

  // useEffect(() => {
  //   gsap.from(btnRef.current, {
  //     opacity: 0,
  //     y: 30,
  //     duration: 1,
  //     ease: "power3.out",
  //   });
    
  // }, []);

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




        {/* <Link href="/">
          <Image
            src="/Images/whitelogo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-12 object-cover"
          />
        </Link> */}

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

        {/* Digital Marketing Foundation */}
        <Link href="/courses/digital-marketing-foundation-course-patiala" className="block p-3 hover:bg-[#ff850d]/10 rounded-lg transition-colors duration-300">
          <h4 className="text-[#ff850d] font-semibold text-sm">Digital Marketing Foundation</h4>
          <p className="text-gray-400 text-xs mt-1">10 Weeks • 12 Modules</p>
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
  className={`poppins xl:hidden flex-col items-center gap-6 bg-black text-white shadow-md px-6 py-4 text-center text-md font-medium ${menuOpen ? 'flex' : 'hidden'}`}
>
  {/* Course Corner with Expandable Submenu */}
  <li className="w-full">
    <button 
      onClick={() => setCourseMenuOpen(!courseMenuOpen)}
      className="flex items-center justify-center gap-2 w-full hover:text-[#ff850d] transition-colors duration-300"
    >
      <span>Course Corner</span>
      <svg 
        className={`w-4 h-4 transition-transform duration-300 ${courseMenuOpen ? 'rotate-180' : ''}`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    {/* Expandable Course Menu */}
    <div className={`overflow-hidden transition-all duration-300 ${courseMenuOpen ? 'max-h-[2000px] mt-4' : 'max-h-0'}`}>
      <div className="space-y-2 pl-4 border-l-2 border-[#ff850d]/30">
        {/* Video Editing Course */}
        <Link 
          href="/courses/video-editing-course-patiala" 
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-left hover:text-[#ff850d] transition-colors duration-300 text-sm"
        >
          <span className="font-semibold">Video Editing Course</span>
          <p className="text-gray-400 text-xs">12 Weeks • 18 Modules</p>
        </Link>

        {/* Digital Marketing Specialist */}
        <Link 
          href="/courses/digital-marketing-specialist-course-patiala"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-left hover:text-[#ff850d] transition-colors duration-300 text-sm"
        >
          <span className="font-semibold">Digital Marketing Specialist</span>
          <p className="text-gray-400 text-xs">16 Weeks • 12 Modules</p>
        </Link>

        {/* Graphic Designing Course */}
        <Link 
          href="/courses/graphic-designing-course-patiala"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-left hover:text-[#ff850d] transition-colors duration-300 text-sm"
        >
          <span className="font-semibold">Graphic Designing Course</span>
          <p className="text-gray-400 text-xs">8 Weeks • 16 Modules</p>
        </Link>

        {/* Web Design & Development */}
        <Link 
          href="/courses/web-design-and-development-course-patiala"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-left hover:text-[#ff850d] transition-colors duration-300 text-sm"
        >
          <span className="font-semibold">Web Design & Development</span>
          <p className="text-gray-400 text-xs">12 Weeks • 16 Modules</p>
        </Link>

        {/* Digital Marketing Foundation */}
        <Link 
          href="/courses/digital-marketing-foundation-course-patiala"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-left hover:text-[#ff850d] transition-colors duration-300 text-sm"
        >
          <span className="font-semibold">Digital Marketing Foundation</span>
          <p className="text-gray-400 text-xs">10 Weeks • 12 Modules</p>
        </Link>

        {/* Digital Marketing Master */}
        <Link 
          href="/courses/digital-marketing-master-course-patiala"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-left hover:text-[#ff850d] transition-colors duration-300 text-sm"
        >
          <span className="font-semibold">Digital Marketing Master</span>
          <p className="text-gray-400 text-xs">24 Weeks • 15 Modules</p>
        </Link>

        {/* Performance Marketing */}
        <Link 
          href="/courses/performance-marketing-specialization-course-patiala"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-left hover:text-[#ff850d] transition-colors duration-300 text-sm"
        >
          <span className="font-semibold">Performance Marketing</span>
          <p className="text-gray-400 text-xs">8 Weeks • 10 Modules</p>
        </Link>

        {/* Social Media Marketing */}
        <Link 
          href="/courses/social-media-marketing-mastery-course-patiala"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-left hover:text-[#ff850d] transition-colors duration-300 text-sm"
        >
          <span className="font-semibold">Social Media Marketing</span>
          <p className="text-gray-400 text-xs">8 Weeks • 7 Modules</p>
        </Link>

        {/* SEO Mastery */}
        <Link 
          href="/courses/search-engine-optimization-mastery-course-patiala"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-left hover:text-[#ff850d] transition-colors duration-300 text-sm"
        >
          <span className="font-semibold">SEO Mastery</span>
          <p className="text-gray-400 text-xs">8 Weeks • 6 Modules</p>
        </Link>

        {/* AI Based Digital Marketing */}
        <Link 
          href="/courses/ai-based-digital-marketing-course-patiala"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-left hover:text-[#ff850d] transition-colors duration-300 text-sm"
        >
          <span className="font-semibold">AI Based Digital Marketing</span>
          <p className="text-gray-400 text-xs">48 Weeks • 8 Modules</p>
        </Link>

        {/* View All Courses Link */}
        <Link 
          href="/#course-corner"
          onClick={() => {
            setMenuOpen(false);
            setCourseMenuOpen(false);
          }}
          className="block py-2 text-[#ff850d] hover:text-white transition-colors duration-300 text-sm font-semibold mt-2"
        >
          View All Courses →
        </Link>
      </div>
    </div>
  </li>

  {/* Regular Menu Items */}
  <li>
    <Link 
      href="/about" 
      onClick={() => setMenuOpen(false)}
      className="hover:text-[#ff850d] transition-colors duration-300"
    >
      Paaji Diaries
    </Link>
  </li>
  
  <li>
    <Link 
      href="/vibe" 
      onClick={() => setMenuOpen(false)}
      className="hover:text-[#ff850d] transition-colors duration-300"
    >
      Vibe Check
    </Link>
  </li>
  
  <li>
    <Link 
      href="/contact" 
      onClick={() => setMenuOpen(false)}
      className="hover:text-[#ff850d] transition-colors duration-300"
    >
      Talk to Paaji
    </Link>
  </li>
  
  <li>
    <Link 
      href="/result" 
      onClick={() => setMenuOpen(false)}
      className="hover:text-[#ff850d] transition-colors duration-300"
    >
      Student Certificates
    </Link>
  </li>
</ul>
   
  
{/* {isOpen && <Popup closeMenu={closeMenu} className=""/>}  */}

      
    </div>
  );
}

export default Navbar;
