"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Tagline() {
  const wordsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(wordsRef.current, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // when the top of section hits 80% of viewport
        toggleActions: "play none none none",
      },
    });
  }, []);

  const words = ["Gyaan", "कम,", "Skills", "ज़्यादा"];

  return (
    <section
      ref={sectionRef}
      className="py-24 text-center overflow-hidden   rounded-4xl"
    >
      <h1 className="laila-bold font-bold text-5xl md:text-7xl leading-tight tracking-tight">
        {words.map((word, index) => (
          <span
            key={index}
            ref={(el) => (wordsRef.current[index] = el)}
            className="inline-block mx-2"
          >
            {word}
          </span>
        ))}
      </h1>

      <div className="grid grid-cols-1  xl:grid-cols-12  gap-12 p-6 xl:p-24 mx-6 lg:mx-12 xl:mx-24 mt-12">
           
                
            <div className="xl:col-span-4 flex flex-col h-full ">
   

                <h1 className="poppins text-3xl md:text-xl xl:text-4xl font-bold md:text-left ">
         100% Practical Learning
        </h1>
              <div className=' text-base md:text-md my-4 text-justify'>
          <p><strong>Learn by Doing </strong> - Our programs are designed to focus on hands-on experience with real-world projects, so you gain practical skills that matter.

</p>
          <p>Some have chosen freelancing as a career and are delivering successful projects.</p>
          <p>Others have taken their skills abroad or used them to scale their family businesses.</p>
        </div>


        </div>


           <div className="xl:col-span-4 w-full h-[500px]  rounded-xl">
            <Image src={'/Images/phone.webp'} alt="" width={440} height={440} className="w-full h-[100%] object-contain"/>
        </div>
        
            <div className="xl:col-span-4 flex flex-col justify-end h-full ">
        <h1 className="poppins text-3xl xl:text-5xl font-bold text-center md:text-left ">
          Our Learning Philosophy 
        </h1>
            <div className=' text-base md:text-md my-4 text-justify'>
          <p>
            Our programs are designed to focus on hands-on experience with real-world projects, so you gain practical skills that matter.
            Our programs are designed to focus on hands-on experience with real-world projects, so you gain practical skills that matter.

</p>


          
        </div>

        </div>
     
      </div>
    </section>
  );
}

export default Tagline;
