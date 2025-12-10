"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { MdViewModule } from "react-icons/md";
import { FcOnlineSupport } from "react-icons/fc"; 


gsap.registerPlugin(ScrollTrigger);

const courses = [
    {
    title: "Video Editing Course",
    status: "Enhanced Curriculum - Fresh Content Added ",
    launch: "Newly Launched",
    duration: "12 Weeks",
    modules: "18 Modules",
    type: "Offline Training",
    mentors: "3+ Senior Copywriters",
    classes: "35+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Introduction to Video Editing",
      "Adobe Premiere Pro Workspace & Basics",
      " Basic Editing Tools",
      " Audio Editing + Sound Design",
      "Color Correction & Color Grading",
      "Text, Titles & Graphics",
      " Transitions (Basic to Advanced) ",
      "Effects & Motion",
      "Exporting for All Platforms",
      "After Effects - Introduction",
      "Text Animation Masterclass",
      "Motion Graphics",
      "Visual Effects (VFX Essentials)",
      "Advanced AE Techniques",
      "Premiere Pro + AE Integration",
      "Content Creation Special Module",
      "Real Projects (Portfolio Building)",
      "Final Exam + Certification",
       
    ],
  },
    {
    title: "Digital Marketing Specialist",
    status: "New Batch Live",
    launch: "All-New Edition",
    duration: "16 Weeks",
    modules: "12 Modules",
    type: "Offline And Online Training",
    mentors: "3+ Industry Experts",
    classes: "25+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Digital Marketing Foundation",
      "Online Lead Generation",
      "Graphic Design",
      "Video Marketing",
      "Website Creation & SEO",
      "Social Media Optimization",
      "Mock Interviews",
    ],
  },
    {
    title: "Graphic Designing Course",
    status: "Refreshed Recently",
    launch: "Upcoming Batch",
    duration: "8 Weeks",
    modules: "16 Modules",
    type: "Offline Training",
    mentors: "2+ Performance Experts",
    classes: "28+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Introduction to Photoshop",
      "Tools Mastery (Basics)",
      "Layers & Layer Management",
      "Selection & Masking (Advanced)",
      "Retouching & Manipulation",
      "Working With Text",
      "Filters & Smart Objects",
      "Image Adjustments",
      "Compositing & Photo Manipulation",
      "Social Media Design",
      "Print Design",
      "Advanced Tools & Automation",
      "Branding & Mockups",
      "Final Exam & Certification",
      "Real Projects (Portfolio Building)",
      "Final Exam & Certification"
    ],
  },

      {
    title: "Web Design & Development Course",
    status: "Newly Launched",
    launch: "New Batch Live",
    duration: "12 Weeks",
    modules: "16 Modules",
    type: "Offline Training",
    mentors: "2+ Performance Experts",
    classes: "35+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
extras: [
  "Introduction to Web Design",
  "WordPress Basics",
  "Themes & Customization",
  "Elementor Page Builder (Master Module)",
  "Essential WordPress Plugins",
  "HTML & CSS for WordPress",
  "Advanced Elementor Workflow",
  "Canva for Website Graphics",
  "ACF + Custom Post Types",
  "Theme File Modifications",
  "WooCommerce",
  "Speed Optimization",
  "Security & Maintenance",
  "Real Client Workflow",
  "Hosting, Migration & Deployment",
  "Portfolio Projects",
  "Final Exam + Certification"
],
  },
  {
    title: "Digital Marketing Fundamentals",
    status: "Now Live",
    launch: "Current Batch",
    duration: "10 Weeks",
    modules: "12 Modules",
    type: "Offline And Online Training",
    mentors: "3+ Expert Mentors",
    classes: "25+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Computer Basics",
      "Search Engine Optimization",
      "Social Media Optimization",
      "Digital Graphics Creation",
      "Video Creation & Editing",
      "Communicative English",
      "Interview Prep & Corporate Grooming",
    ],
  },
  {
    title: "Digital Marketing Master",
    status: "Enhanced Curriculum",
    launch: "Upcoming Batch",
    duration: "24 Weeks",
    modules: "15 Modules",
    type: "Offline And Online Training",
    mentors: "3+ Expert Mentors",
    classes: "12+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Digital Marketing Foundation",
      "Online Lead Generation",
      "Graphic Design & Video Marketing",
      "Website Creation, Content Writing & SEO",
      "Social Media Optimization",
      "Remarketing & Rebranding",
      "AI Powered Digital Marketing",
    ],
  },
  {
    title: "Digital Marketing Professional",
    status: "Upgraded Learning Path",
    launch: "Updated for 2025",
    duration: "32 Weeks",
    modules: "18 Modules",
    type: "Offline And Online Training",
    mentors: "3+ Expert Mentors",
    classes: "32+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Digital Marketing Foundation",
      "Online Lead Generation",
      "Graphic Design & Content Writing",
      "Website Creation, Content Writing & SEO",
      "Social Media Optimization",
      "Remarketing & Rebranding",
      "AI Powered Digital Marketing",
      "E-commerce & D2C Marketing",
    ],
  },
  {
    title: "Performance Marketing Specialization",
    status: "New & Improved",
    launch: "Upcoming Batch",
    duration: "8 Weeks",
    modules: "10 Modules",
    type: "Offline And Online Training",
    mentors: "3+ Performance Experts",
    classes: "22+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Facebook & Instagram Advertising",
      "Google Ad Campaigns",
      "Ad Keywords Optimization",
      "Video Advertising Campaigns",
      "Remarketing & Branding",
    ],
  },
  {
    title: "Social Media Marketing Mastery",
    status: "Now Live",
    launch: "Current Batch",
    duration: "8 Weeks",
    modules: "7 Modules",
    type: "Offline And Online Training",
    mentors: "3+ Expert Mentors",
    classes: "20+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Instagram Marketing",
      "Facebook Marketing",
      "Linkedin Marketing",
      "Twitter Marketing",
      "Graphic Design & Video Creation Basics",
      "Creating & Running Ad Campaigns",
    ],
  },
  {
    title: "Search Engine Optimization Mastery",
    status: "New Upgrade Added",
    launch: "Upcoming Batch",
    duration: "8 Weeks",
    modules: "6 Modules",
    type: "Offline And Online Training",
    mentors: "2+ Industry Experts",
    classes: "20+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Introduction to SEO",
      "Understanding SEO Tools",
      "Content Writing Basics",
      "On-Page SEO",
      "Off Page SEO",
      "Technical SEO",
      "Local SEO",
    ],
  },
  {
    title: "Advanced Annual Diploma in Digital Marketing",
    status: "Upgraded Learning Path",
    launch: "2025 Edition",
    duration: "48 Weeks",
    modules: "8 Modules",
    type: "Offline Training",
    mentors: "3+ Expert Mentors",
    classes: "120+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Digital Marketing Essentials",
      "AI Bots & Prompt Engineering",
      "Web Content Creation",
      "Website Creation",
      "English & PD Essentials",
      "Advanced Social Media Marketing",
      "Advanced Search Engine Marketing",
      "Corporate Grooming",
    ],
  },
];

export default function CoursesHorizontal() {
  const containerRef = useRef(null);
  const cardsWrapperRef = useRef(null);


  useEffect(() => {
    const cardsWrapper = cardsWrapperRef.current;
    const container = containerRef.current;

    const totalWidth = cardsWrapper.scrollWidth;
    const containerWidth = container.offsetWidth;

    gsap.to(cardsWrapper, {
      x: () => `-${totalWidth - containerWidth / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: () => "top top",
        end: () => `+=${totalWidth - containerWidth }`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

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

  const lastCourseRef = useRef(null);

  const scrollToLastCourse = () => {
    if (lastCourseRef.current && cardsWrapperRef.current) {
      const wrapper = cardsWrapperRef.current;
      const card = lastCourseRef.current;
      const wrapperRect = wrapper.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const offset = cardRect.left - wrapperRect.left;

      gsap.to(wrapper, {
        x: -offset,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div
      id="course-corner"
      ref={containerRef}
      className="   pt-[100px]  w-full overflow-hidden"
    >
      <div className=" flex items-center flex-wrap-reverse xl:flex-nowrap w-full h-full ">
        {/* Left Side */}
        <div className="w-full  xl:w-[30%] mx-6 mt-12 xl:mt-0 lg:mx-12 xl:ml-24 py-12">
          <h1 className="bungee-shade-regular text-4xl md:text-5xl xl:text-7xl font-bold text-center xl:text-left ">
            CAREER HUSTLE? WE'VE GOT THE COURSES
          </h1>
          <div className=" text-base md:text-md my-4 mx-8 xl:mx-0 text-center xl:text-left">
            <p>
              At Digital Paaji Academy, our specialized programs in digital
              marketing, graphic design, video editing, SEO and web development
              are designed to make you industry-ready. Our hands-on, mentor-led
              courses give you the tools to succeed.
            </p>
          </div>
         


      <div className="relative z-20 w-full md:w-32 h-16 mx-auto xl:mx-0  group">
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
    href="/contact"
    ref={btnRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
      className="
        poppins-bold cursor-pointer absolute top-0 left-0 
        w-full h-full bg-black text-white rounded-md 
        flex items-center justify-center 
        transition-all duration-150 
        group-hover:top-[2px] group-hover:left-[2px]"
    >
      Enroll Now
    </Link>
  </div>



         {/* <div className="relative z-20 w-full md:w-[350px] h-16 mx-auto xl:mx-0 group">
  <div
    className="absolute top-[6px] left-[4px] 
    bg-white border-2 border-white 
    w-full h-full rounded-md 
    transition-all duration-300 
    group-hover:top-[4px] group-hover:left-[3px]"
  />

  <Link
    href="/contact"
    ref={btnRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className="poppins text-lg absolute top-0 left-0 pl-4 md:pl-0
      w-full h-full bg-black text-white rounded-md 
      flex items-center gap-3 justify-center 
      transition-all duration-150 
      group-hover:top-[0px] group-hover:left-[0px]
      active:translate-x-[2px] active:translate-y-[2px]"
  >
    Enroll Now
  </Link>
</div> */}

        </div>

        <div className="w-full  xl:w-[70%] h-[60vh] xl:h-[70vh]  relative overflow-hidden ">
          <div
            ref={cardsWrapperRef}
            className="absolute top-1/2 -translate-y-1/2 flex gap-x-6 w-max left-6"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                ref={index === courses.length - 1 ? lastCourseRef : null}
                className={`poppins-bold  rounded-2xl p-10 shadow-md transition-all duration-300 
        ${index % 2 === 0 ? "bg-black text-white" : "bg-white text-black"}
      `}
                // className={`min-w-[80vw] md:min-w-[66%] max-w-[500px] rounded-2xl p-6 shadow-md transition-all duration-300
                //     ${index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}
                //   `}
              >
                <div
                  className="p-3 bg-[#f5911e] text-white rounded-sm flex items-center gap-2 w-fit"
                  style={{ fontWeight: "600" }}
                >
                <p className="w-4 h-4 bg-[#19e906] rounded-full animate-pulse border-4 border-[#d0f7c4c5]"></p>  {course.launch}
                </div>
                <h3 className=" text-2xl font-bold mt-6">{course.title}</h3>
                <p className="poppins mt-1 font-semibold text-red-500 text-lg">
                  {course.status}
                </p>
                <p className="text-sm mt-1 text-gray-400">{course.craftedBy}</p>

                <div className="flex items-center justify-start gap-4 md:justify-between ">
                  <div
                    className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2"
                    style={{ fontWeight: "500" }}
                  >
                    <p><SlCalender /></p>
                    <strong>{course.duration}</strong>
                  </div>
                  <div
                    className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2"
                    style={{ fontWeight: "500" }}
                  >
                    <p><MdViewModule /> </p>
                    <strong>{course.modules}</strong>
                  </div>
                </div>
                <div
                  className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2"
                  style={{ fontWeight: "500" }}
                >
                  <p><FcOnlineSupport /> </p>
                  <strong>{course.type}</strong>
                </div>

         <div className="max-h-40 overflow-y-auto pr-2 styled-scrollbar">
  <ul className="poppins mt-3 list-disc list-inside text-md space-y-1">
    {course.extras.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
</div>

                <div
                  className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2"
                  style={{ fontWeight: "500" }}
                >
                  <p>👨‍🏫 </p>
                  <strong>{course.mentors}</strong>
                </div>
                <div
                  className=" space-y-1 text-lg flex items-center justify-start gap-2"
                  style={{ fontWeight: "500" }}
                >
                  <p><CiClock2 /> </p>
                  <strong>{course.classes}</strong>
                </div>
              </div>
            ))}
          </div>
          {/* <button onClick={scrollToLastCourse} className="w-full flex items-end justify-end">
            <div
              
              className="relative z-20 w-[250px] h-16 mx-auto xl:mx-0 "
            >
              <div className=" bg-white border-2 border-white w-full h-full rounded-md transition-all duration-100 pointer-events-none" />

              <div
                className="poppins-bold text-lg text-black absolute top-0 left-0 w-full h-full border-2 border-black rounded-md flex items-center gap-3 justify-center 
               translate-x-[4px] translate-y-[4px] hover:translate-x-[0px] hover:translate-y-[0px] transition-all duration-100"
              >
                Scroll to End
                <BsArrowRight />{" "}
              </div>
            </div>
          </button> */}
        </div>
      </div>

    </div>
  );
}
