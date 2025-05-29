"use client";
import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import Popup from "./Popup";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null); 
  const btnRef = useRef(null);
  const borderRef = useRef(null);
  const dropdownRef = useRef(null);

 const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };



  useEffect(() => {
    gsap.from(btnRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
    
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

  return (
    <div className=" w-full  z-[99999999999]"
  >
      <div className="backdrop-blur-md bg-gradient-to-b from-[#e1bc978a] via-[#e1bc978a] to-[#ffffff80] text-black flex items-center justify-between px-6 lg:px-12 xl:px-24 h-[100px]">
        <Link href="/">
          <Image
            src="/Images/logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-12 object-cover"
          />
        </Link>

        <ul className="poppins hidden lg:flex space-x-8 font-medium text-md xl:text-lg">
          <li>
            <Link href="/#course-corner" >Course Corner</Link>
          </li>
          <li>
            <Link href="/about">Paaji Diaries</Link>
          </li>
          <li>
            <Link href="/vibe">Vibe Check</Link>
          </li>
             <li>
            <Link href="/contact">Talk to Paaji</Link>
          </li>
        
        </ul>

        {/* Enroll Now - Right */}
        <div className=" ">
          <div className="relative z-20 w-24 sm:w-28 lg:w-36 h-10 sm:h-12 ">
            {/* Shadow/Base */}
            <div className="absolute top-[6px] left-[4px] hover:pt-4 bg-black border-2 border-[#000000b4] w-full h-full rounded-md transition-all duration-100 pointer-events-none" />

            {/* Actual Button */}
            <button
              onClick={()=>openMenu()}
              ref={btnRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="
               
              poppins-bold cursor-pointer absolute top-0 left-0 w-full h-full bg-white text-black rounded-md flex items-center justify-center 
               "
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="lg:hidden ">
          <button onClick={toggleMenu} className="text-2xl cursor-pointer">
            {menuOpen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

     


   
    <ul
        ref={dropdownRef}
        className="poppins lg:hidden flex-col items-center gap-6 bg-black text-white shadow-md px-6 py-4 text-center text-md font-medium hidden"
      >
      <li>
            <Link href="/#course-corner" onClick={() => setMenuOpen(!menuOpen)} >Course Corner</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(!menuOpen)} >Paaji Diaries</Link>
          </li>
          <li>
            <Link href="/vibe" onClick={() => setMenuOpen(!menuOpen)} >Vibe Check</Link>
          </li>
         
         

      </ul>
   
   
  
{isOpen && <Popup closeMenu={closeMenu} />} 

      
    </div>
  );
}

export default Navbar;
