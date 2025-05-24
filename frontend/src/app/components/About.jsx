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
          PUNJAB'S MOST PRACTICAL SKILL ACADEMY
        </h1>
        <p className="poppins-bold text-md xl:text-2xl text-[#000000dc] underline font-semibold mt-6 ">
          Useful & Practical Learning Programs Designed by Industry Experts &
          Working Professionals
        </p>
      </div>

      <div className="flex items-center flex-wrap justify-center ">
        <div className="flex flex-wrap xl:flex-nowrap  rounded-lg w-full overflow-hidden gap-12 xl:gap-6 2xl:gap-0">
          {/* Left Image */}
          <div className=" w-full xl:w-1/2 md:h-[550px] xl:h-[650px]">
            <img
              src="/Images/about2.webp"
              alt="Sample"
              className=" w-full h-[100%] object-contain "
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
                    src={"/Images/icon.webp"}
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <div>
                  <h3 className="poppins-bold text-[#000000ec] text-xl font-semibold ">
                  Skill Development
                  </h3>
                  <p className="mt-2 text-sm">
                  Our courses are designed to equip you with essential, industry-standard skills that prepare you for real-world challenges. Focused on practical applications, we ensure you gain the proficiency needed to succeed in the workplace.


                  </p>{" "}
                </div>
              </div>
              <div 
              ref={(el)=>(boxesRef.current[1] = el)}
              
              className="py-4 gap-4 flex items-center flex-wrap  justify-center text-center xl:text-left">
                <div className="xl:w-full">
                  <Image
                    alt=""
                    src={"/Images/icon.webp"}
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <div>
                  <h3 className="poppins-bold text-[#000000ec] text-xl font-semibold ">
                  Skill Development
                  </h3>
                  <p className="mt-2 text-sm">
                  Our courses are designed to equip you with essential, industry-standard skills that prepare you for real-world challenges. Focused on practical applications, we ensure you gain the proficiency needed to succeed in the workplace.


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
                    src={"/Images/icon.webp"}
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <div>
                  <h3 className="poppins-bold text-[#000000ec] text-xl font-semibold">
                  Expert Trainers
                  </h3>
                  <p className="mt-2 text-sm">
                  Our instructors are seasoned professionals with extensive experience in their respective fields. They bring real-world expertise to the classroom, providing you with valuable insights that go beyond textbook learning.
                  </p>{" "}
                </div>
              </div>
              <div 
              ref={(el)=>(boxesRef.current[3] = el)}
              
              className="py-4 gap-4 flex items-center flex-wrap justify-center text-center xl:text-left">
                <div className="xl:w-full">
                  <Image
                    alt=""
                    src={"/Images/icon.webp"}
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <div>
                  <h3 className="poppins-bold text-[#000000ec] text-xl font-semibold">
                  Career Preparation
                  </h3>
                  <p className="mt-2 text-sm">
                  Our focus is not only on skill development but also on preparing you for a successful career. With our practical approach and industry connections, we ensure that you are well-prepared for job opportunities, whether freelance or full-time.


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
