"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { MdViewModule } from "react-icons/md";
import { FcOnlineSupport } from "react-icons/fc"; 

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const courses = [
  {
    link: '/courses/video-editing-course-patiala',
    title: "Video Editing Course",
    status: "Fresh Content Added",
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
      "Basic Editing Tools",
      "Audio Editing + Sound Design",
      "Color Correction & Color Grading",
      "Text, Titles & Graphics",
      "Transitions (Basic to Advanced)",
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
    link: '/courses/digital-marketing-specialist-course-patiala',
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
    link: '/courses/graphic-designing-course-patiala',
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
    link: '/courses/web-design-and-development-course-patiala',
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
    link: '/courses/digital-marketing-foundation-course-patiala',
    title: "Digital Marketing Foundation",
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
    link: '/courses/digital-marketing-master-course-patiala',
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
    link: '/courses/performance-marketing-specialization-course-patiala',
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
    link: '/courses/social-media-marketing-mastery-course-patiala',
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
    link: '/courses/search-engine-optimization-mastery-course-patiala',
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
    link: '/courses/ai-based-digital-marketing-course-patiala',
    title: "AI Based Digital Marketing Course",
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
  const swiperRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      
      if (isHovering) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
    }
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div id="course-corner" className="pt-16 lg:pt-24 pb-16 px-4 lg:px-12 2xl:px-24  py-24  w-full overflow-hidden">
      {/* Top Section */}
      <div className=" mb-12 lg:mb-16">
        <div className="w-full">
          <h1 className="bungee-shade-regular text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6">
            CAREER HUSTLE? WE'VE GOT THE COURSES
          </h1>
          <div className="text-base md:text-lg mb-8 text-center max-w-3xl mx-auto">
            <p>
              At Digital Paaji Academy, our specialized programs in digital
              marketing, graphic design, video editing, SEO and web development
              are designed to make you industry-ready. Our hands-on, mentor-led
              courses give you the tools to succeed.
            </p>
          </div>
          
          <div className="relative z-20 w-full lg:w-48 h-16 mx-auto group">
            <div
              className={`
                absolute top-[6px] left-[4px]
                bg-white border-2 border-white
                w-full h-full rounded-md
              `}
            />
            
            <Link
              href="/contact"
              className="
                poppins-bold cursor-pointer absolute top-0 left-0 
                w-full h-full bg-black text-white rounded-md 
                flex items-center justify-center 
                transition-all duration-150 
                group-hover:top-[2px] group-hover:left-[2px]
                text-lg lg:text-xl"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>

      {/* Swiper Section - Desktop Only */}
      <div className="hidden lg:block w-full">
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-[#e98724c2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-[#e98724c2] to-transparent z-10 pointer-events-none" />
          
          <div 
            className="w-full overflow-hidden px-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={6000}
              grabCursor={true}
              freeMode={{
                enabled: true,
                momentum: true,
                momentumBounce: false,
                momentumRatio: 1,
                momentumVelocityRatio: 1,
                sticky: true,
                minimumVelocity: 0.01,
              }}
              className="!pb-4"
            >
              {courses.map((course, index) => (
                <SwiperSlide 
                  key={index} 
                  className="!w-[85vw] sm:!w-[400px] lg:!w-[420px]  xl:!w-[480px]"
                >
                  <div
                    className={`
                      poppins-bold rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300 
                      hover:scale-[1.02] hover:shadow-xl active:scale-[0.99] h-full
                      ${index % 2 === 0 ? "bg-black text-white" : "bg-white text-black border border-gray-200"}
                    `}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="px-3 py-1.5 bg-[#f5911e] text-white rounded-md flex items-center gap-2 w-fit"
                        style={{ fontWeight: "600" }}
                      >
                        <p className="w-3 h-3 bg-[#19e906] rounded-full animate-pulse border-2 border-[#d0f7c4c5]"></p>
                        <span className="text-sm md:text-base">{course.launch}</span>
                      </div>
                      <span className="poppins text-sm md:text-base font-semibold text-red-500">
                        {course.status}
                      </span>
                    </div>
                    
                    <Link href={course.link} className="text-xl md:text-2xl xl:text-3xl font-bold mb-2 block">
                      <h3>{course.title}</h3>
                    </Link>
                    
                    <p className="text-xs md:text-sm text-gray-400 mb-4">{course.craftedBy}</p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <SlCalender className="text-lg" />
                        <span className="font-semibold text-sm md:text-base">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdViewModule className="text-lg" />
                        <span className="font-semibold text-sm md:text-base">{course.modules}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FcOnlineSupport className="text-lg" />
                        <span className="font-semibold text-sm md:text-base">{course.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CiClock2 className="text-lg" />
                        <span className="font-semibold text-sm md:text-base">{course.classes}</span>
                      </div>
                    </div>

                    <div className="max-h-32 lg:max-h-36 overflow-y-auto pr-2 styled-scrollbar mb-4">
                      <ul className="poppins text-sm md:text-base list-disc list-inside space-y-1">
                        {course.extras.map((item, i) => (
                          <li key={i} className="truncate">{item}</li>
                        ))}
                        {/* {course.extras.length > 4 && (
                          <li className="font-semibold">+ {course.extras.length - 4} more modules</li>
                        )} */}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-sm md:text-base">
                      <span className="text-xl">👨‍🏫</span>
                      <span className="font-semibold">{course.mentors}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Mobile Column Layout */}
      <div className="block lg:hidden max-w-2xl mx-auto space-y-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`
              poppins-bold rounded-2xl p-6 shadow-md transition-all
              ${index % 2 === 0 ? "bg-black text-white" : "bg-white text-black border"}
            `}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-[#f5911e] text-white rounded-md text-sm">
                {course.launch}
              </span>
              <span className="text-sm font-semibold text-red-500">
                {course.status}
              </span>
            </div>

            <Link href={course.link} className="text-xl font-bold mb-2 block">
              <h3>{course.title}</h3>
            </Link>
            
            <p className="text-xs text-gray-400 mb-3">{course.craftedBy}</p>

            <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <SlCalender /> {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <MdViewModule /> {course.modules}
              </div>
              <div className="flex items-center gap-2">
                <FcOnlineSupport /> {course.type}
              </div>
              <div className="flex items-center gap-2">
                <CiClock2 /> {course.classes}
              </div>
            </div>

            <ul className="list-disc list-inside text-sm space-y-1">
              {course.extras.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style jsx>{`
        .styled-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #888 transparent;
        }
        
        .styled-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .styled-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 20px;
        }
        
        .styled-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
      `}</style>
    </div>
  );
}

// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Link from "next/link";
// import { CiClock2 } from "react-icons/ci";
// import { SlCalender } from "react-icons/sl";
// import { MdViewModule } from "react-icons/md";
// import { FcOnlineSupport } from "react-icons/fc"; 


// gsap.registerPlugin(ScrollTrigger);

// const courses = [
//     {

    
//       link:'/courses/video-editing-course-patiala',
//       title: "Video Editing Course",
//     status: "Enhanced Curriculum - Fresh Content Added ",
//     launch: "Newly Launched",
//     duration: "12 Weeks",
//     modules: "18 Modules",
//     type: "Offline Training",
//     mentors: "3+ Senior Copywriters",
//     classes: "35+ Classes",
//     craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
//     extras: [
//       "Introduction to Video Editing",
//       "Adobe Premiere Pro Workspace & Basics",
//       " Basic Editing Tools",
//       " Audio Editing + Sound Design",
//       "Color Correction & Color Grading",
//       "Text, Titles & Graphics",
//       " Transitions (Basic to Advanced) ",
//       "Effects & Motion",
//       "Exporting for All Platforms",
//       "After Effects - Introduction",
//       "Text Animation Masterclass",
//       "Motion Graphics",
//       "Visual Effects (VFX Essentials)",
//       "Advanced AE Techniques",
//       "Premiere Pro + AE Integration",
//       "Content Creation Special Module",
//       "Real Projects (Portfolio Building)",
//       "Final Exam + Certification",
       
//     ],
//   },
//     {
    
//       link:'/courses/digital-marketing-specialist-course-patiala',
//       title: "Digital Marketing Specialist",
//     status: "New Batch Live",
//     launch: "All-New Edition",
//     duration: "16 Weeks",
//     modules: "12 Modules",
//     type: "Offline And Online Training",
//     mentors: "3+ Industry Experts",
//     classes: "25+ Classes",
//     craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
//     extras: [
//       "Digital Marketing Foundation",
//       "Online Lead Generation",
//       "Graphic Design",
//       "Video Marketing",
//       "Website Creation & SEO",
//       "Social Media Optimization",
//       "Mock Interviews",
//     ],
//   },
//     {
    
//       link:'/courses/graphic-designing-course-patiala',
//       title: "Graphic Designing Course",
//     status: "Refreshed Recently",
//     launch: "Upcoming Batch",
//     duration: "8 Weeks",
//     modules: "16 Modules",
//     type: "Offline Training",
//     mentors: "2+ Performance Experts",
//     classes: "28+ Classes",
//     craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
//     extras: [
//       "Introduction to Photoshop",
//       "Tools Mastery (Basics)",
//       "Layers & Layer Management",
//       "Selection & Masking (Advanced)",
//       "Retouching & Manipulation",
//       "Working With Text",
//       "Filters & Smart Objects",
//       "Image Adjustments",
//       "Compositing & Photo Manipulation",
//       "Social Media Design",
//       "Print Design",
//       "Advanced Tools & Automation",
//       "Branding & Mockups",
//       "Final Exam & Certification",
//       "Real Projects (Portfolio Building)",
//       "Final Exam & Certification"
//     ],
//   },

//       {
    
//         link:'/courses/web-design-and-development-course-patiala',
//         title: "Web Design & Development Course",
//     status: "Newly Launched",
//     launch: "New Batch Live",
//     duration: "12 Weeks",
//     modules: "16 Modules",
//     type: "Offline Training",
//     mentors: "2+ Performance Experts",
//     classes: "35+ Classes",
//     craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
// extras: [
//   "Introduction to Web Design",
//   "WordPress Basics",
//   "Themes & Customization",
//   "Elementor Page Builder (Master Module)",
//   "Essential WordPress Plugins",
//   "HTML & CSS for WordPress",
//   "Advanced Elementor Workflow",
//   "Canva for Website Graphics",
//   "ACF + Custom Post Types",
//   "Theme File Modifications",
//   "WooCommerce",
//   "Speed Optimization",
//   "Security & Maintenance",
//   "Real Client Workflow",
//   "Hosting, Migration & Deployment",
//   "Portfolio Projects",
//   "Final Exam + Certification"
// ],
//   },
//   {
    
//     link:'/courses/digital-marketing-foundation-course-patiala',
//     title: "Digital Marketing Foundation",
//     status: "Now Live",
//     launch: "Current Batch",
//     duration: "10 Weeks",
//     modules: "12 Modules",
//     type: "Offline And Online Training",
//     mentors: "3+ Expert Mentors",
//     classes: "25+ Classes",
//     craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
//     extras: [
//       "Computer Basics",
//       "Search Engine Optimization",
//       "Social Media Optimization",
//       "Digital Graphics Creation",
//       "Video Creation & Editing",
//       "Communicative English",
//       "Interview Prep & Corporate Grooming",
//     ],
//   },
//   {
    
//     link:'/courses/digital-marketing-master-course-patiala',
//     title: "Digital Marketing Master",
//     status: "Enhanced Curriculum",
//     launch: "Upcoming Batch",
//     duration: "24 Weeks",
//     modules: "15 Modules",
//     type: "Offline And Online Training",
//     mentors: "3+ Expert Mentors",
//     classes: "12+ Classes",
//     craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
//     extras: [
//       "Digital Marketing Foundation",
//       "Online Lead Generation",
//       "Graphic Design & Video Marketing",
//       "Website Creation, Content Writing & SEO",
//       "Social Media Optimization",
//       "Remarketing & Rebranding",
//       "AI Powered Digital Marketing",
//     ],
//   },
//   {
    
//     link:'/courses/performance-marketing-specialization-course-patiala',
//     title: "Performance Marketing Specialization",
//     status: "New & Improved",
//     launch: "Upcoming Batch",
//     duration: "8 Weeks",
//     modules: "10 Modules",
//     type: "Offline And Online Training",
//     mentors: "3+ Performance Experts",
//     classes: "22+ Classes",
//     craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
//     extras: [
//       "Facebook & Instagram Advertising",
//       "Google Ad Campaigns",
//       "Ad Keywords Optimization",
//       "Video Advertising Campaigns",
//       "Remarketing & Branding",
//     ],
//   },
//   {
    
//     link:'/courses/social-media-marketing-mastery-course-patiala',
//     title: "Social Media Marketing Mastery",
//     status: "Now Live",
//     launch: "Current Batch",
//     duration: "8 Weeks",
//     modules: "7 Modules",
//     type: "Offline And Online Training",
//     mentors: "3+ Expert Mentors",
//     classes: "20+ Classes",
//     craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
//     extras: [
//       "Instagram Marketing",
//       "Facebook Marketing",
//       "Linkedin Marketing",
//       "Twitter Marketing",
//       "Graphic Design & Video Creation Basics",
//       "Creating & Running Ad Campaigns",
//     ],
//   },
//   {
    
//     link:'/courses/search-engine-optimization-mastery-course-patiala',
//     title: "Search Engine Optimization Mastery",
//     status: "New Upgrade Added",
//     launch: "Upcoming Batch",
//     duration: "8 Weeks",
//     modules: "6 Modules",
//     type: "Offline And Online Training",
//     mentors: "2+ Industry Experts",
//     classes: "20+ Classes",
//     craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
//     extras: [
//       "Introduction to SEO",
//       "Understanding SEO Tools",
//       "Content Writing Basics",
//       "On-Page SEO",
//       "Off Page SEO",
//       "Technical SEO",
//       "Local SEO",
//     ],
//   },
//   {
    
//     link:'/courses/ai-based-digital-marketing-course-patiala',
//     title: "AI Based Digital Marketing Course",
//     status: "Upgraded Learning Path",
//     launch: "2025 Edition",
//     duration: "48 Weeks",
//     modules: "8 Modules",
//     type: "Offline Training",
//     mentors: "3+ Expert Mentors",
//     classes: "120+ Classes",
//     craftedBy: "Crafted by Digital Paaji - We Mind Your Business",
//     extras: [
//       "Digital Marketing Essentials",
//       "AI Bots & Prompt Engineering",
//       "Web Content Creation",
//       "Website Creation",
//       "English & PD Essentials",
//       "Advanced Social Media Marketing",
//       "Advanced Search Engine Marketing",
//       "Corporate Grooming",
//     ],
//   },
// ];

// export default function CoursesHorizontal() {
//   const containerRef = useRef(null);
//   const cardsWrapperRef = useRef(null);


//   useEffect(() => {
//     const cardsWrapper = cardsWrapperRef.current;
//     const container = containerRef.current;

//     const totalWidth = cardsWrapper.scrollWidth;
//     const containerWidth = container.offsetWidth;

//     gsap.to(cardsWrapper, {
//       x: () => `-${totalWidth - containerWidth / 2}px`,
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         start: () => "top top",
//         end: () => `+=${totalWidth - containerWidth }`,
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   const btnRef = useRef(null);
//   const borderRef = useRef(null);

//   const handleMouseEnter = () => {
//     // Press-in effect (move down slightly)
//     gsap.to(btnRef.current, {
//       y: 2,
//       scale: 0.98,
//       duration: 0.2,
//       ease: "power2.inOut",
//     });

//     // Border ripple
//     gsap.fromTo(
//       borderRef.current,
//       {
//         scale: 1,
//         opacity: 0.5,
//       },
//       {
//         scale: 1.1,
//         opacity: 1,
//         duration: 0.4,
//         ease: "power2.out",
//       }
//     );
//   };

//   const handleMouseLeave = () => {
//     // Reset position and scale
//     gsap.to(btnRef.current, {
//       y: 0,
//       scale: 1,
//       duration: 0.2,
//       ease: "power2.inOut",
//     });

//     // Reset border
//     gsap.to(borderRef.current, {
//       scale: 1,
//       opacity: 0.5,
//       duration: 0.4,
//       ease: "power2.inOut",
//     });
//   };

//   const lastCourseRef = useRef(null);

//   const scrollToLastCourse = () => {
//     if (lastCourseRef.current && cardsWrapperRef.current) {
//       const wrapper = cardsWrapperRef.current;
//       const card = lastCourseRef.current;
//       const wrapperRect = wrapper.getBoundingClientRect();
//       const cardRect = card.getBoundingClientRect();
//       const offset = cardRect.left - wrapperRect.left;

//       gsap.to(wrapper, {
//         x: -offset,
//         duration: 1,
//         ease: "power2.inOut",
//       });
//     }
//   };

//   return (
//     <div
//       id="course-corner"
//       ref={containerRef}
//       className="   pt-[100px]  w-full overflow-hidden"
//     >
//       <div className=" flex items-center flex-wrap-reverse xl:flex-nowrap w-full h-full ">
//         {/* Left Side */}
//         <div className="w-full  xl:w-[30%] mx-6 mt-12 xl:mt-0 lg:mx-12 xl:ml-24 py-12">
//           <h1 className="bungee-shade-regular text-4xl md:text-5xl xl:text-7xl font-bold text-center xl:text-left ">
//             CAREER HUSTLE? WE'VE GOT THE COURSES
//           </h1>
//           <div className=" text-base md:text-md my-4 mx-8 xl:mx-0 text-center xl:text-left">
//             <p>
//               At Digital Paaji Academy, our specialized programs in digital
//               marketing, graphic design, video editing, SEO and web development
//               are designed to make you industry-ready. Our hands-on, mentor-led
//               courses give you the tools to succeed.
//             </p>
//           </div>
         


//       <div className="relative z-20 w-full md:w-32 h-16 mx-auto xl:mx-0  group">
//     {/* Shadow/Base */}
//     <div
//       className="absolute top-[6px] left-[4px] 
//       bg-white border-2 border-white 
//       w-full h-full rounded-md 
//       transition-all duration-150 
//    group-hover:top-[4px] group-hover:left-[3px]"
//     />

//     {/* Actual Button */}
//     <Link
//     href="/contact"
//     ref={btnRef}
//     onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
//       className="
//         poppins-bold cursor-pointer absolute top-0 left-0 
//         w-full h-full bg-black text-white rounded-md 
//         flex items-center justify-center 
//         transition-all duration-150 
//         group-hover:top-[2px] group-hover:left-[2px]"
//     >
//       Enroll Now
//     </Link>
//   </div>




//         </div>

//         <div className="w-full xl:w-[70%] h-[70vh]  relative overflow-hidden ">
//           <div
//             ref={cardsWrapperRef}
//             className="absolute top-1/2 -translate-y-1/2 flex gap-x-6 w-max left-6"
//           >
//             {courses.map((course, index) => (
//               <Link
//               href={`${course.link}`}
//                 key={index}
//                 ref={index === courses.length - 1 ? lastCourseRef : null}
//                 className={`poppins-bold  rounded-2xl p-10 shadow-md transition-all duration-300 
//         ${index % 2 === 0 ? "bg-black text-white" : "bg-white text-black"}
//       `}
//                 // className={`min-w-[80vw] md:min-w-[66%] max-w-[500px] rounded-2xl p-6 shadow-md transition-all duration-300
//                 //     ${index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}
//                 //   `}
//               >
//                 <div
//                   className="p-3 bg-[#f5911e] text-white rounded-sm flex items-center gap-2 w-fit"
//                   style={{ fontWeight: "600" }}
//                 >
//                 <p className="w-4 h-4 bg-[#19e906] rounded-full animate-pulse border-4 border-[#d0f7c4c5]"></p>  {course.launch}
//                 </div>
//                 <h3 className=" text-2xl font-bold mt-6">{course.title}</h3>
//                 <p className="poppins mt-1 font-semibold text-red-500 text-lg">
//                   {course.status}
//                 </p>
//                 <p className="text-sm mt-1 text-gray-400">{course.craftedBy}</p>

//                 <div className="flex items-center justify-start gap-4 md:justify-between ">
//                   <div
//                     className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2"
//                     style={{ fontWeight: "500" }}
//                   >
//                     <p><SlCalender /></p>
//                     <strong>{course.duration}</strong>
//                   </div>
//                   <div
//                     className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2"
//                     style={{ fontWeight: "500" }}
//                   >
//                     <p><MdViewModule /> </p>
//                     <strong>{course.modules}</strong>
//                   </div>
//                 </div>
//                 <div
//                   className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2"
//                   style={{ fontWeight: "500" }}
//                 >
//                   <p><FcOnlineSupport /> </p>
//                   <strong>{course.type}</strong>
//                 </div>

//          <div className="max-h-40 overflow-y-auto pr-2 styled-scrollbar">
//   <ul className="poppins mt-3 list-disc list-inside text-md space-y-1">
//     {course.extras.map((item, i) => (
//       <li key={i}>{item}</li>
//     ))}
//   </ul>
// </div>

//                 <div
//                   className="mt-3 space-y-1 text-lg flex items-center justify-start gap-2"
//                   style={{ fontWeight: "500" }}
//                 >
//                   <p>👨‍🏫 </p>
//                   <strong>{course.mentors}</strong>
//                 </div>
//                 <div
//                   className=" space-y-1 text-lg flex items-center justify-start gap-2"
//                   style={{ fontWeight: "500" }}
//                 >
//                   <p><CiClock2 /> </p>
//                   <strong>{course.classes}</strong>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           {/* <button onClick={scrollToLastCourse} className="w-full flex items-end justify-end">
//             <div
              
//               className="relative z-20 w-[250px] h-16 mx-auto xl:mx-0 "
//             >
//               <div className=" bg-white border-2 border-white w-full h-full rounded-md transition-all duration-100 pointer-events-none" />

//               <div
//                 className="poppins-bold text-lg text-black absolute top-0 left-0 w-full h-full border-2 border-black rounded-md flex items-center gap-3 justify-center 
//                translate-x-[4px] translate-y-[4px] hover:translate-x-[0px] hover:translate-y-[0px] transition-all duration-100"
//               >
//                 Scroll to End
//                 <BsArrowRight />{" "}
//               </div>
//             </div>
//           </button> */}
//         </div>
//       </div>

//     </div>
//   );
// }
