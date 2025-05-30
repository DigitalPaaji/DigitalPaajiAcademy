"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    title: "Digital Marketing Fundamentals",
    status: "Batch Full, Admissions Closed",
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
    title: "Graphic Designing Course",
    status: "Launching Soon",
    launch: "Upcoming Batch",
    duration: "8 Weeks",
    modules: "5 Modules",
    type: "Offline Training",
    mentors: "2+ Performance Experts",
    classes: "18+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Canva",
      "Logo Design",
      "Banner Design",
      "Social Media Creatives",
      "Brand Design",
      "Brochure Design",
    ],
  },
  {
    title: "Video Editing Course",
    status: "Batch Full, Admissions Closed",
    launch: "Current Batch",
    duration: "12 Weeks",
    modules: "6 Modules",
    type: "Offline Training",
    mentors: "3+ Senior Copywriters",
    classes: "18+ Classes",
    craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
    extras: [
      "Basics of Video Editing & Storytelling",
      "Transitions, Effects & Motion Graphics",
      "Color Correction & Color Grading",
      "Sound Editing & Background Scoring",
      "Green Screen Techniques",
      "Social Media Reels & Shorts Editing",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    status: "Launching Soon",
    launch: "Upcoming Batch",
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
    title: "Digital Marketing Master",
    status: "Launching Soon",
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
    status: "Batch Full, Admissions Closed",
    launch: "Current Batch",
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
    status: "Launching Soon",
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
    status: "Batch Full, Admissions Closed",
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
    status: "Launching Soon",
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
    status: "Launching Soon",
    launch: "Upcoming Batch",
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
        end: () => `+=${totalWidth - containerWidth}`,
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
      className="scroll-mt-24 mx-0 xl:mx-0 py-24 w-full "
    >
      <div className="flex items-center flex-wrap-reverse xl:flex-nowrap w-full h-full ">
        {/* Left Side */}
        <div className="w-full  xl:w-[30%] mx-6 lg:mx-12 xl:ml-24 ">
          <h1 className="bungee-shade-regular text-3xl md:text-5xl xl:text-7xl font-bold text-center xl:text-left ">
            CAREER HUSTLE? WE'VE GOT THE COURSES
          </h1>
          <div className=" text-base md:text-md my-4 mx-8 xl:mx-0">
            <p>
              At Digital Paaji Academy, our specialized programs in digital
              marketing, graphic design, video editing, SEO and web development
              are designed to make you industry-ready. Our hands-on, mentor-led
              courses give you the tools to succeed.
            </p>
          </div>
          <div className="relative z-20 w-[280px] md:w-[350px] h-16 mx-auto xl:mx-0">
            <div className="absolute top-[6px] left-[4px] bg-white border-2 border-white w-full h-full rounded-md transition-all duration-100 pointer-events-none" />

            <Link
              href="/enroll"
              ref={btnRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="poppins text-lg absolute top-0 left-0 w-full h-full bg-black text-white rounded-md flex items-center gap-3 justify-center 
               active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100"
            >
              {/* <BsArrowRight/>{" "} */}
              Crafted by Digital Paaji Academy
            </Link>
          </div>
        </div>

        <div className="w-full  xl:w-[70%] h-[900px] relative overflow-hidden ">
          <div
            ref={cardsWrapperRef}
            className="absolute top-1/2 -translate-y-1/2 flex gap-x-6 w-max"
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
                <span
                  className="p-3 bg-[#f5911e] text-white rounded-sm "
                  style={{ fontWeight: "600" }}
                >
                  {course.launch}
                </span>
                <h3 className=" text-2xl font-bold mt-6">{course.title}</h3>
                <p className="poppins mt-1 font-semibold text-red-500 text-lg">
                  {course.status}
                </p>
                <p className="text-sm mt-1 text-gray-400">{course.craftedBy}</p>

                <div className="flex items-center justify-between ">
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
                    <p>📚</p>
                    <strong>{course.modules}</strong>
                  </div>
                </div>
                <div
                  className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2"
                  style={{ fontWeight: "500" }}
                >
                  <p>🏫 </p>
                  <strong>{course.type}</strong>
                </div>

                <ul className="poppins mt-3 list-disc list-inside text-md space-y-1">
                  {course.extras.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

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
