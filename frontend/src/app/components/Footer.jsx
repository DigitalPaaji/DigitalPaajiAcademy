"use client";
import React from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import {
  TbBrandInstagram,
  TbBrandTwitterFilled,
  TbBrandYoutubeFilled,
} from "react-icons/tb";
import Image from "next/image";
import { BsInstagram, BsMailbox, BsYoutube } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div 

    className="relative z-50 overflow-hidden bg-black h-auto py-24 md:h-auto">

<div className="marquee-container absolute bottom-0 lg:-bottom-6 overflow-hidden whitespace-nowrap">
  <div className="marquee-content animate-footerBg flex mt-[1100px] md:mt-[700px] xl:mt-[100px]">
     <Image  width={200} height={200} src="/Images/footerBG.webp" alt="Background" className="w-full h-auto opacity-15" />
     <Image  width={200} height={200} src="/Images/footerBG.webp" alt="Background" className="w-full h-auto opacity-15" />
  </div>
</div>

    <div 
    className="relative z-50 grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 place-content-center gap-10 xl:gap-0 md:p-6 mx-4 md:mx-12 xl:mx-24  py-24 ">
      {/* Column 1 */}
      <div className="ml-2 md:mx-auto px-6 xl:px-0">
        <Link href={'/'}><Image width={200} height={200} src="/Images/logo.webp" alt="Logo" className="w-40 h-auto object-cover"/></Link>
        <ul className="mt-6 gap-2 flex items-center justify-start">
          <li>
            <Link href="https://www.instagram.com/digital.paajii/" target="_blank">
              <BsInstagram
                className="zoom text-white w-5 h-5"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/digital.paajii" target="_blank">
              <FaFacebook
                className="zoom text-white w-5 h-5"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@digital.paajii" target="_blank">
              <BsYoutube
                className="zoom text-white w-5 h-5"
              />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fdigitalpaajii" target="_blank">
              <FaXTwitter 
                className="zoom text-white w-5 h-5"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/digital-paaji2" target="_blank">
              <FaLinkedin  
                className="zoom text-white w-5 h-5"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="ml-2 md:mx-auto px-6 xl:px-0">
        <h3 className="poppins text-2xl text-[#ff850d] mb-6">Paaji's Hub</h3>
        <ul
          className="merriHead text-white text-md space-y-6 "
          style={{ fontWeight: "300" }}
        >



          <li className=" ">
            <Link href="/">Course Corner</Link>
          </li>
          <li className=" ">
            <Link href="/about">Paaji Diaries</Link>
          </li>
          <li className=" ">
            <Link href="/vibe">Vibe Check</Link>
          </li>
          <li className=" ">
            <Link href="/contact">Join the Tribe</Link>
          </li>
          
   
        </ul>
      </div>

  

   

    {/* Column 3 */}
    <div className="ml-2 md:mx-auto px-6 xl:px-0">
        <h3 className="poppins text-2xl text-[#ff850d] mb-6">Let's Talk</h3>
        <ul
          className="merriHead text-white text-md space-y-6"
          style={{ fontWeight: "300" }}
        >
          <li className="  flex items-center gap-2">
            <AiFillPhone className="text-[#ff850d]" />
            <Link href="tel:8699640752">+91 86996 40752</Link>
          </li>
          <li className="  flex items-center gap-2">
            <IoMail  className="text-[#ff850d]" />
            <Link href="mailto:hello@digitalpaaji.com">
              hello@digitalpaaji.com
            </Link>
          </li>
          <li className="  flex items-center gap-2">
            <AiFillEnvironment className="text-[#ff850d]" /> Patiala/Mohali
          </li>
        </ul>
      </div>

      {/* Column 5 (Map) */}
      <div className=" ">
        <div className="md:w-[500px] xl:w-[200px] xl:h-[80%] object-cover">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.726002954475!2d76.4027356!3d30.358736000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910291ec53226d3%3A0xd81cade77ecfa8d3!2sDigital%20Paaji!5e0!3m2!1sen!2sin!4v1735063353416!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;