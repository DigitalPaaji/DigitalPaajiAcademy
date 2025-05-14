"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


function Banner() {
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

  const words = ["Paaji’s ", "vision", "Your ", "growth"];
  return (
    <div className="  w-full h-[800px] bg-[#FF850D] mx-4 md:mx-12 xl:mx-24 
    ">
      <div className=" ">
        <div className=" px-4">
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
          <p className="text-xl mx-40 my-6">
          We were running a digital agency — building websites, running ads, managing brands. But one day, a college student asked us if he could learn from us. Then another. Then another.

          We realized — talent is everywhere, but guidance isn’t. That’s when Digital Paaji Academy was born.

    Paaji didn’t want to just build brands — he wanted to build people too.
          </p>
          <p className="text-md sm:text-lg font-medium">
            Paaji didn’t just build brands—he built people too.
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default Banner;
