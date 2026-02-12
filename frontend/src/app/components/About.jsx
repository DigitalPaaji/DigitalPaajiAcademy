'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Image from "next/image"; // use 'img' tag if not using Next.js

gsap.registerPlugin(ScrollTrigger);

function About() {
  const boxesRef = useRef([]);
  
useEffect(() => {
  boxesRef.current.forEach((card, i) => {
    const offset = [
      { x: 100, y: -100 },
      { x: 100, y: -100 },
      { x: -100, y: 100 },
      { x: 100, y: 100 },
    ];

   
    gsap.set(card, {
      opacity: 0,
      x: offset[i].x,
      y: offset[i].y,
    });

   
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        once: true,
      },
      duration: 2,
      opacity: 1,
      x: 0,
      y: 0,
      ease: "power3.out",
      delay: i * 0.3,
    });
  });

  
  ScrollTrigger.refresh();
}, []);

  return (
    <div className="poppins mx-6 lg:mx-12 xl:mx-24 py-24 min-h-screen ">
      <div className="text-center mb-20">
      <h1 className="bungee-shade-regular text-4xl md:text-5xl xl:text-6xl font-bold ">
          PUNJAB'S BEST DIGITAL MARKETING ACADEMY
        </h1>
        <p className="poppins-bold text-md xl:text-2xl text-[#000000dc] underline font-semibold mt-6 ">
         Meet the Best Minds Behind the Magic: Our Skilled Instructors at Digital Paaji Academy

        </p>
      </div>

      <div className="flex items-center flex-wrap justify-center ">
        <div className="flex flex-wrap xl:flex-nowrap w-full overflow-hidden gap-12 ">
          {/* Left Image */}
          <div className=" w-full xl:w-1/2 h-auto xl:h-[650px]">
          <video
  src="/Images/about/cstaff.mp4"
  loading="lazy"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
/>

          </div>

          {/* Right Content */}
          <div className="flex w-full xl:w-1/2 flex-col lg:flex-row  ">
             {/* First Column: Bottom Aligned */}
            <div className=" xl:w-1/2 flex flex-col gap-6 justify-end divide-y divide-[#d3771bb4] p-4 ">
              <div 
              ref={(el)=>(boxesRef.current[0] = el)}
              className="py-4 gap-4 flex items-center flex-wrap justify-center text-center xl:text-left lg:pt-24 2xl:pt-0">
                <div className="xl:w-full">
                  <Image
                    alt=""
                    src={"/Images/about/1.webp"}
                    width={80}
                    height={80}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="poppins-bold text-[#000000ec] text-xl font-semibold ">
                  Fuel Your Skills with Pro Mentors
                  </h3>
                  <p className="mt-2 text-sm">
                 At Digital Paaji Academy, your growth begins with those who've already walked the path. Paaji's instructors don't just teach - we mentor. Each lesson is crafted to develop in-demand skills across various digital marketing courses.



                  </p>{" "}
                </div>
              </div>
              <div 
              ref={(el)=>(boxesRef.current[1] = el)}
              
              className="py-4 gap-4 flex items-center flex-wrap  justify-center text-center xl:text-left">
                <div className="xl:w-full">
                  <Image
                    alt=""
                    src={"/Images/about/2.webp"}
                    width={80}
                    height={80}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="poppins-bold text-[#000000ec] text-xl font-semibold ">
                  Mentors So Good, Even Our Certificates Blush
                  </h3>
                  <p className="mt-2 text-sm">
                   Our certifications reflect more than course completion - they represent the knowledge, mentorship, and hands-on experience delivered by leaders. Having a certificate from our Academy means you've been trained and guided by best professionals.



                  </p>{" "}
                </div>
              </div>
            </div>

            {/* Vertical Line Between Columns */}
            <div className="hidden md:block w-px bg-[#d3771bb4] mx-0"></div>

            {/* Second Column: Top Aligned */}
            <div className="xl:w-1/2 flex flex-col  gap-6 justify-start divide-y divide-[#d3771bb4] p-4 ">
            <div 
              ref={(el)=>(boxesRef.current[2] = el)}
            
            className="py-4 gap-4 flex items-center flex-wrap justify-center text-center xl:text-left">
                <div className="xl:w-full">
                  <Image
                    alt=""
                    src={"/Images/about/3.webp"}
                    width={80}
                    height={80}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="poppins-bold text-[#000000ec] text-xl font-semibold">
                  Work on Real Projects, Not Just Homework
                  </h3>
                  <p className="mt-2 text-sm">
                  Forget boring assignments! At Digital Paaji Academy, you'll get to work on actual client projects. This means you learn by doing real marketing campaigns that matter, so you're ready for the real world right away.


                  </p>{" "}
                </div>
              </div>
              <div 
              ref={(el)=>(boxesRef.current[3] = el)}
              
              className="py-4 gap-4 flex items-center flex-wrap justify-center text-center xl:text-left">
                <div className="xl:w-full">
                  <Image
                    alt=""
                    src={"/Images/about/4.webp"}
                    width={80}
                    height={80}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="poppins-bold text-[#000000ec] text-xl font-semibold">
                  Work Like a Pro, Even Before You Graduate
                  </h3>
                  <p className="mt-2 text-sm">
                Why wait to start your career? Our mentors give you hands-on experience with live campaigns and professional tools. You'll build skills and confidence just like a true digital marketer — before you even finish the course!



                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
