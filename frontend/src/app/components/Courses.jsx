// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const courses = [
//   "Web Development",
//   "Data Science",
//   "Digital Marketing",
//   "React Mastery",
//   "Node.js Pro",
//   "Machine Learning",
//   "UI/UX Design",
//   "SEO Basics",
//   "Python Bootcamp",
//   "Advanced JavaScript",
//   "WordPress Design",
//   "App Development",
//   "Freelancing Skills",
//   "AI Tools",
//   "Cloud Basics",
// ];

// export default function FallingCourses() {
//     const sectionRef = useRef(null);
//     const pillsRef = useRef([]);
    
//     // To store the Y-axis positions for avoiding overlap
//     const previousYPositions = useRef([]);
  
//     useEffect(() => {
//         const ctx = gsap.context(() => {
//           const sectionHeight = 700; // match your section height
//           const numPerRow = 5;
//           const gapX = 250;
//           const startX = -((numPerRow - 1) * gapX) / 2;
      
//           pillsRef.current.forEach((el, i) => {
//             const col = i % numPerRow;
//             const xPos = startX + col * gapX;
//             const yEnd = sectionHeight - 100; // Adjust bottom landing point
      
//             gsap.fromTo(
//               el,
//               {
//                 y: -300,
//                 x: xPos,
//                 rotation: 0,
//                 opacity: 0,
//                 scale: 1,
//               },
//               {
//                 y: yEnd,
//                 x: xPos,
//                 rotation: 0,
//                 opacity: 1,
//                 duration: 2.2,
//                 ease: "bounce.out",
//                 delay: i * 0.12,
//                 scrollTrigger: {
//                   trigger: sectionRef.current,
//                   start: "top center",
//                   toggleActions: "play none none none",
//                 },
//               }
//             );
//           });
//         }, sectionRef);
      
//         return () => ctx.revert();
//       }, []);
      

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full h-[700px] flex items-center justify-center overflow-hidden px-4"
//       style={{ background: "linear-gradient(#e78311da, #f5911e)" }}
//     >
//       {/* Pills Background Layer */}
//       <div className="absolute inset-0 z-0">
//         {courses.map((course, i) => (
//           <div
//             key={i}
//             ref={(el) => (pillsRef.current[i] = el)}
//             className="absolute px-8 py-4 rounded-full text-lg font-semibold shadow-xl text-[#111] whitespace-nowrap"
//             style={{
//               backgroundColor: getSoftColor(),
//               left: `${Math.random() * 100}%`,  // Allowing pills to be placed anywhere along the x-axis
//               top: '-100px',
//               minWidth: '240px',
//               transform: `rotate(${Math.floor(Math.random() * 60 - 30)}deg)`,
//               pointerEvents: 'none',  // Prevent interaction with pills
//             }}
//           >
//             {course}
//           </div>
//         ))}
//       </div>

//       {/* Main Text */}
//       <h2 className="relative z-20 text-white text-6xl font-extrabold text-center leading-snug max-w-4xl">
//         <h1 className="bungee-shade-regular text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
//           PUNJAB'S MOST PRACTICAL SKILL ACADEMY
//         </h1>
//       </h2>
//     </section>
//   );
// }

// function getSoftColor() {
//   const colors = [
//     "#fff3d8", "#ffebcc", "#ffe6b3", "#ffd699",
//     "#ffe0cc", "#fff0e0", "#fff6e6", "#ffe4b5",
//     "#d9f8ff", "#f0eaff", "#dcffd9"
//   ];
//   return colors[Math.floor(Math.random() * colors.length)];
// }




'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const courses = [
  "Full Stack Web Development",
  "MERN Stack Mastery",
  "Frontend with React.js",
  "Backend with Node.js",
  "Data Science & ML",
  "Digital Marketing",
  "UI/UX Design",
  "Mobile App Development",
  "Python for Beginners",
  "Advanced JavaScript",
  "WordPress Mastery",
  "SEO Fundamentals",
  "AI Integration Basics",
  "Freelancing Skills",
];

export default function CoursesDropSection() {
  const sectionRef = useRef(null);
  const tagsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(tagsRef.current, {
        y: -200,
        opacity: 0,
        rotation: () => gsap.utils.random(-20, 20),
        x: () => gsap.utils.random(-60, 60),
        duration: 1.5,
        ease: "bounce.out",
        stagger: {
          each: 0.12,
          from: "random"
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          toggleActions: "play none none none"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden text-white"
  
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
        Start Your Learning Journey
      </h2>

      {/* Center Line */}

      {/* Course Pills */}
      <div className="flex flex-wrap justify-center gap-6  mx-auto px-4">
        {courses.map((course, i) => (
          <div
            key={i}
            ref={(el) => (tagsRef.current[i] = el)}
            className="px-6 py-3 rounded-full text-lg font-semibold shadow-xl whitespace-nowrap border-2 border-white"
            style={{
              backgroundColor: softColor(),
              color: "#111",
              minWidth: "240px",
              textAlign: "center"
            }}
          >
            {course}
          </div>
        ))}
      </div>
    </section>
  );
}

function softColor() {
  const colors = [
    "#fff3d8", "#ffebcc", "#ffe6b3", "#ffd699",
    "#ffe0cc", "#fff0e0", "#fff6e6", "#ffe4b5"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
