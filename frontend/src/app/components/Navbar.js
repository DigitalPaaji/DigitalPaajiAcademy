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
  //  const pathname = usePathname();

//  const [isOpen, setIsOpen] = useState(false);
  // const openMenu = () => {
  //   setIsOpen(true);
  // };
  // const closeMenu = () => {
  //   setIsOpen(false);
  // };


  // useEffect(() => {
  //   if (pathname === '/enroll-now') {
  //     openPopup();
  //   }
  // }, [pathname, openPopup]);

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


  const [isHovering, setIsHovering] = useState(false);

   const handleMouseHover = () => {
    setIsHovering(true);
  };

  const handleMouseHoverLeave = () => {
    setIsHovering(false);
  }
  return (
    <div className="fixed  top-0 w-full h-[100px] z-[99999] backdrop-blur-md bg-gradient-to-b from-black/80 via-black/60 to-black/0"
  >
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
          <li>
            <Link href="/#course-corner" 
            className="relative inline-block group"
            >
              <span> Course Corner
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff850d] transition-[width] duration-300 group-hover:w-full">
                  </span></Link>
          </li>
          <li>
            <Link href="/about" className="relative inline-block group">
             <span> Paaji Diaries
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff850d] transition-[width] duration-300 group-hover:w-full">
                  </span>
                  </Link>
          </li>
          <li>
            <Link href="/vibe" className="relative inline-block group">
            <span>    Vibe Check
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff850d] transition-[width] duration-300 group-hover:w-full">
                  </span>
         </Link>
          </li>
                 <li>
            <Link href="/result" className="relative inline-block group">
            <span>   Student Certificates
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff850d] transition-[width] duration-300 group-hover:w-full">
                  </span>
         </Link>
          </li>
             <li>
            <Link href="/contact" className="relative inline-block group"> <span>Talk to Paaji
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff850d] transition-[width] duration-300 group-hover:w-full">
                  </span></Link>
          </li>
        
        </ul>

        {/* Enroll Now - Right */}
     {/* Enroll Now - Right */}
<div className="">
  <div className="relative z-20 w-24 sm:w-28 lg:w-36 h-10 sm:h-12 group">
    {/* Shadow/Base */}
    <div
      className="absolute top-[6px] left-[4px] 
      bg-black border-2 border-[#000000b4] 
      w-full h-full rounded-md 
      transition-all duration-150 
   group-hover:top-[4px] group-hover:left-[3px]"
    />

    {/* Actual Button */}
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
        group-hover:top-[2px] group-hover:left-[2px]"
    >
      Enroll Now
    </Link>
  </div>
</div>


        {/* Hamburger Icon - Mobile */}
        <div className="xl:hidden ">
          <button onClick={toggleMenu} className="text-2xl cursor-pointer text-white">
            {menuOpen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

     


   
    <ul
        ref={dropdownRef}
        className="poppins xl:hidden flex-col items-center gap-6 bg-black text-white shadow-md px-6 py-4 text-center text-md font-medium hidden"
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
             <li>
            <Link href="/contact"  onClick={() => setMenuOpen(!menuOpen)}>Talk to Paaji</Link>
          </li>
            <li>
            <Link href="/result" onClick={() => setMenuOpen(!menuOpen)} >Student Certificates</Link>
          </li>
         
          

      </ul>
   
   
  
{/* {isOpen && <Popup closeMenu={closeMenu} className=""/>}  */}

      
    </div>
  );
}

export default Navbar;
