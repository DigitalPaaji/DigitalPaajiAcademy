'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";



gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    title: 'Social Media Marketing Mastery',
    status: 'Batch Full, Admissions Closed',
    launch: 'Current Batch',
    duration: '10 Weeks',
    modules: '6 Modules',
    type: 'Offline Training',
    mentors: '4+ Expert Mentors',
    classes: '25+ Classes',
    craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
    extras: [
      'Instagram & Facebook Growth Strategies',
      'Influencer Marketing Insights',
      'Live Social Campaign Audits',
      'Reel & Shorts Creation Workshops',
      'Analytics & Engagement Tools',
    ],
  },
  {
    title: 'Performance Marketing Bootcamp',
    status: 'Launching Soon',
    launch: 'Upcoming Batch',
    duration: '8 Weeks',
    modules: '5 Modules',
    type: 'Offline Training',
    mentors: '5+ Performance Experts',
    classes: '20+ Classes',
    craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
    extras: [
      'Google & Meta Ads Training',
      'Live Campaign Budgeting',
      'Funnel Strategy Building',
      'Conversion Rate Optimization',
      'Case Studies on Real Clients',
    ],
  },
  {
    title: 'Content Marketing & Copywriting',
    status: 'Batch Full, Admissions Closed',
    launch: 'Current Batch',
    duration: '6 Weeks',
    modules: '4 Modules',
    type: 'Offline Training',
    mentors: '3+ Senior Copywriters',
    classes: '18+ Classes',
    craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
    extras: [
      'Storytelling Techniques',
      'Email & Website Copywriting',
      'SEO-Optimized Writing',
      'Live Editing Sessions',
      'Content Strategy Frameworks',
    ],
  },
  {
    title: 'E-commerce & D2C Marketing',
    status: 'Launching Soon',
    launch: 'Upcoming Batch',
    duration: '12 Weeks',
    modules: '7 Modules',
    type: 'Offline Training',
    mentors: '5+ Industry Experts',
    classes: '30+ Classes',
    craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
    extras: [
      'Shopify & Amazon Strategy',
      'Live Store Setup',
      'Performance Ads for Products',
      'D2C Brand Growth Framework',
      'Product Page Optimization',
    ],
  },
  {
    title: 'AI Tools for Digital Marketers',
    status: 'Launching Soon',
    launch: 'Upcoming Batch',
    duration: '4 Weeks',
    modules: '3 Modules',
    type: 'Offline Training',
    mentors: '3+ AI Marketers',
    classes: '12+ Classes',
    craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
    extras: [
      'Prompt Engineering Basics',
      'ChatGPT & Canva Hacks',
      'Automation with Zapier',
      'AI Content Creation Tools',
      'Real-time Implementation Labs',
    ],
  },
  {
    title: 'Social Media Marketing Mastery',
    status: 'Batch Full, Admissions Closed',
    launch: 'Current Batch',
    duration: '10 Weeks',
    modules: '6 Modules',
    type: 'Offline Training',
    mentors: '4+ Expert Mentors',
    classes: '25+ Classes',
    craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
    extras: [
      'Instagram & Facebook Growth Strategies',
      'Influencer Marketing Insights',
      'Live Social Campaign Audits',
      'Reel & Shorts Creation Workshops',
      'Analytics & Engagement Tools',
    ],
  },
  {
    title: 'Performance Marketing Bootcamp',
    status: 'Launching Soon',
    launch: 'Upcoming Batch',
    duration: '8 Weeks',
    modules: '5 Modules',
    type: 'Offline Training',
    mentors: '5+ Performance Experts',
    classes: '20+ Classes',
    craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
    extras: [
      'Google & Meta Ads Training',
      'Live Campaign Budgeting',
      'Funnel Strategy Building',
      'Conversion Rate Optimization',
      'Case Studies on Real Clients',
    ],
  },
  {
    title: 'Content Marketing & Copywriting',
    status: 'Batch Full, Admissions Closed',
    launch: 'Current Batch',
    duration: '6 Weeks',
    modules: '4 Modules',
    type: 'Offline Training',
    mentors: '3+ Senior Copywriters',
    classes: '18+ Classes',
    craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
    extras: [
      'Storytelling Techniques',
      'Email & Website Copywriting',
      'SEO-Optimized Writing',
      'Live Editing Sessions',
      'Content Strategy Frameworks',
    ],
  },
  {
    title: 'E-commerce & D2C Marketing',
    status: 'Launching Soon',
    launch: 'Upcoming Batch',
    duration: '12 Weeks',
    modules: '7 Modules',
    type: 'Offline Training',
    mentors: '5+ Industry Experts',
    classes: '30+ Classes',
    craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
    extras: [
      'Shopify & Amazon Strategy',
      'Live Store Setup',
      'Performance Ads for Products',
      'D2C Brand Growth Framework',
      'Product Page Optimization',
    ],
  },
  {
    title: 'AI Tools for Digital Marketers',
    status: 'Launching Soon',
    launch: 'Upcoming Batch',
    duration: '4 Weeks',
    modules: '3 Modules',
    type: 'Offline Training',
    mentors: '3+ AI Marketers',
    classes: '12+ Classes',
    craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
    extras: [
      'Prompt Engineering Basics',
      'ChatGPT & Canva Hacks',
      'Automation with Zapier',
      'AI Content Creation Tools',
      'Real-time Implementation Labs',
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
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: () =>'top top', 
        end: () => `+=${totalWidth-containerWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

   const btnRef = useRef(null);
    const borderRef = useRef(null);
  
    useEffect(() => {
      // Entry animation on load
      gsap.from(btnRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      });
    }, []);
  
    const handleMouseEnter = () => {
      // Press-in effect (move down slightly)
      gsap.to(btnRef.current, {
        y: 2,
        scale: 0.98,
        duration: 0.2,
        ease: 'power2.inOut',
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
          ease: 'power2.out',
        }
      );
    };
    
    const handleMouseLeave = () => {
      // Reset position and scale
      gsap.to(btnRef.current, {
        y: 0,
        scale: 1,
        duration: 0.2,
        ease: 'power2.inOut',
      });
    
      // Reset border
      gsap.to(borderRef.current, {
        scale: 1,
        opacity: 0.5,
        duration: 0.4,
        ease: 'power2.inOut',
      });
    };

  return (
    <div ref={containerRef} className="mx-0 xl:mx-0 py-24 w-full ">
      <div className="flex items-center flex-col xl:flex-row w-full h-full ">
        {/* Left Side */}
        <div className="w-full  xl:w-[30%] mx-6 lg:mx-12 xl:mx-24 ">
        <h1 className="bungee-shade-regular text-3xl md:text-5xl xl:text-6xl font-bold text-center xl:text-left ">
          PUNJAB'S MOST PRACTICAL SKILL ACADEMY
        </h1>
              <div className=' text-base md:text-md my-4 mx-8 xl:mx-0'>
          <p>Many learners have launched their own startups after completing our courses. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ab earum, voluptates minus veniam natus alias quibusdam error fugiat assumenda cupiditate?</p>
          {/* <p>Some have chosen freelancing as a career and are delivering successful projects.</p>
          <p>Others have taken their skills abroad or used them to scale their family businesses.</p> */}
        </div>
        <div className="relative z-20 w-[280px] md:w-[350px] h-16 mx-auto xl:mx-0">
            {/* Shadow/Base */}
            <div className="absolute top-[6px] left-[4px] bg-white border-2 border-white w-full h-full rounded-md transition-all duration-100 pointer-events-none" />

            {/* Actual Button */}
            <Link
              href="/enroll"
              ref={btnRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="poppins text-lg absolute top-0 left-0 w-full h-full bg-black text-white rounded-md flex items-center gap-3 justify-center 
               active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100"
            >
              {/* <BsArrowRight/>{" "} */}
              CRAFTED BY DIGITAL PAAJI
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full  xl:w-[70%] h-[700px] relative overflow-hidden">
  <div
    ref={cardsWrapperRef}
    className="absolute top-1/2 -translate-y-1/2 flex gap-x-6 w-max"
  >
    {courses.map((course, index) => (
      <div
        key={index}
        className={`poppins-bold  rounded-2xl p-10 shadow-md transition-all duration-300
        ${index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}
      `}
    // className={`min-w-[80vw] md:min-w-[66%] max-w-[500px] rounded-2xl p-6 shadow-md transition-all duration-300
    //     ${index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}
    //   `}
      >
        <span className="p-3 bg-[#f5911e] text-white rounded-sm " style={{fontWeight:'600'}}>{course.launch}</span>
        <h3 className=" text-2xl font-bold mt-6">{course.title}</h3>
        <p className="poppins mt-1 font-semibold text-red-500 text-lg">{course.status}</p>
        <p className="text-sm mt-1 text-gray-400">{course.craftedBy}</p>

        <div className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2" style={{fontWeight:'500'}}>
          <p>📆</p>
          <strong>{course.duration}</strong>
         
        </div>
        <div className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2" style={{fontWeight:'500'}}>
        <p>📚</p>
        <strong>{course.modules}</strong>
        </div>
        <div className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2" style={{fontWeight:'500'}}>
        <p>🏫 </p>
        <strong>{course.type}</strong>
        </div>
       
        

        <ul className="poppins mt-3 list-disc list-inside text-md space-y-1" >
          {course.extras.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2"  style={{fontWeight:'500'}}>
        <p>👨‍🏫 </p><strong>{course.mentors}</strong>
        </div>
        <div className=" space-y-1 text-lg flex items-center justify-start gap-2"  style={{fontWeight:'500'}}>
        <p>🕒 </p><strong>{course.classes}</strong>
        </div>
       
        
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}
