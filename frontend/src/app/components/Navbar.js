"use client";
import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null); // Reference to the navbar
  const btnRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    // Entry animation on load
    gsap.from(btnRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

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
      }
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

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // Navbar Animation (fade in)
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, ease: "power3.out" }
    );

    // Sidebar animation
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <div ref={navbarRef}>
      <div className="flex items-center justify-between px-6 lg:px-12 xl:px-24 h-[100px]">
        {/* Logo - Left */}
        <Link href="/">
          <Image
            src="/Images/logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-12 object-cover"
          />
        </Link>

        {/* Center Links - Desktop */}
        <ul className="hidden lg:flex space-x-8 font-medium text-md xl:text-lg">
          <li>
            <Link href="/programs">Programs</Link>
          </li>
          <li>
            <Link href="/story">Our Story</Link>
          </li>
          <li>
            <Link href="/mentors">Mentors</Link>
          </li>
          <li>
            <Link href="/tales">Honhar Tales</Link>
          </li>
        </ul>

        {/* Enroll Now - Right */}
        <div className=" hidden lg:block">
          <div className="relative z-20 w-36 h-12 ">
            {/* Shadow/Base */}
            <div className="absolute top-[6px] left-[4px] bg-black border-2 border-[#000000b4] w-full h-full rounded-md transition-all duration-100 pointer-events-none" />

            {/* Actual Button */}
            <Link
              href="/enroll"
              ref={btnRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="poppins-bold absolute top-0 left-0 w-full h-full bg-white text-black rounded-md flex items-center justify-center 
               active:translate-x-[4px] active:translate-y-[2px] transition-all duration-100"
            >
              Enroll Now
            </Link>
          </div>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Sidebar Menu - Mobile */}
      {/* <div
        ref={menuRef}
        className="fixed top-0 left-0 h-full w-4/5 bg-white shadow-2xl p-6 flex flex-col gap-8 text-md z-40 lg:hidden"
        style={{ transform: "translateX(-100%)" }}
      > */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 h-screen w-4/5 bg-white shadow-2xl p-6 flex flex-col gap-8 text-md z-40 lg:hidden -translate-x-full"
      >
        <Link href="/">
          <Image
            src="/Images/logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="w-36 h-16 object-contain"
          />
        </Link>
        <ul className="space-y-6 ">
          <li>
            <Link href="/programs" onClick={toggleMenu}>
              Programs
            </Link>
          </li>
          <li>
            <Link href="/story" onClick={toggleMenu}>
              Our Story
            </Link>
          </li>
          <li>
            <Link href="/mentors" onClick={toggleMenu}>
              Mentors
            </Link>
          </li>
          <li>
            <Link href="/tales" onClick={toggleMenu}>
              Honhar Tales
            </Link>
          </li>
        </ul>
        <Link
          href="/enroll"
          onClick={toggleMenu}
          className="bg-white w-fit text-center px-4 py-4 rounded-xl border-2 border-r-4 border-b-4 border-black"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
