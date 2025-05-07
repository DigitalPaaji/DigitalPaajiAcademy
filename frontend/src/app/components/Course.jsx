'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const courses = Array.from({ length: 10 }, (_, i) => ({
  title: `Advanced Digital Marketing : Batch-${i + 1}`,
  status: i % 2 === 0 ? 'Batch Full, Admissions Closed' : 'Launching Soon',
  launch: i % 2 === 0 ? 'Current Batch' : 'Upcoming Batch',
  duration: '12 Weeks',
  modules: '5 Modules',
  type: 'Offline Training',
  mentors: '5+ Dedicated Mentors',
  classes: '30+ Classes',
  craftedBy: 'Crafted by Digital Paaji - We Mind Your Business',
  extras: [
    'Guest Lectures by Entrepreneurs',
    'Live Case Studies',
    'AI in Marketing',
    'Doubt Sessions',
    'Run Real Ad Campaigns',
  ],
}));

export default function CoursesHorizontal() {
  const containerRef = useRef(null);
  const cardsWrapperRef = useRef(null);

//   useEffect(() => {
//     const cardsWrapper = cardsWrapperRef.current;
//     const container = containerRef.current;

//     const totalWidth = cardsWrapper.scrollWidth;
//     const containerWidth = container.offsetWidth;

//     gsap.to(cardsWrapper, {
//       x: () => `-${totalWidth - containerWidth / 2}px`,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: container,
//         start: 'top top',
//         end: () => `+=${totalWidth}`,
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach(t => t.kill());
//   }, []);


useEffect(() => {
  const cardsWrapper = cardsWrapperRef.current;
  const container = containerRef.current;

  ScrollTrigger.matchMedia({
    // Only apply GSAP horizontal scroll on md and above
    "(min-width: 768px)": () => {
      const totalWidth = cardsWrapper.scrollWidth;
      const containerWidth = container.offsetWidth;

      gsap.to(cardsWrapper, {
        x: () => `-${totalWidth - containerWidth / 2}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    },
  });

  return () => ScrollTrigger.getAll().forEach(t => t.kill());
}, []);

  return (
    <div ref={containerRef} className="mx-6 lg:mx-12 xl:mx-24 py-24 w-full">
      <div className="flex items-center w-full h-full flex-wrap xl:flex-nowrap">
        {/* Left Side */}
        <div className="w-full  xl:w-[30%] flex items-center justify-center  px-8">
        <h1 className="bungee-shade-regular text-4xl md:text-5xl xl:text-6xl font-bold text-center xl:text-left ">
          PUNJAB'S MOST PRACTICAL SKILL ACADEMY
        </h1>
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
        className={` poppins-bold  rounded-2xl p-10 shadow-md transition-all duration-300
        ${index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}
      `}
    // className={`min-w-[80vw] md:min-w-[66%] max-w-[500px] rounded-2xl p-6 shadow-md transition-all duration-300
    //     ${index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}
    //   `}
      >
        <span className="p-3 bg-[#f5911e] text-white rounded-sm " style={{fontWeight:'600'}}>{course.launch}</span>
        <h3 className=" text-2xl font-bold mt-6">{course.title}</h3>
        <p className="mt-1 font-semibold text-red-500 text-lg">{course.status}</p>
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
       
        

        <ul className="mt-3 list-disc list-inside text-md space-y-1" style={{fontWeight:'600'}}>
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
