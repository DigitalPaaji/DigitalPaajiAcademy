"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Script from "next/script";

gsap.registerPlugin(ScrollTrigger);

function Tagline() {
  const wordsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(wordsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => {
      ctx.revert();
    };
  }, []);

  const words = ["Gyaan", "कम,", "Skills", "ज़्यादा"];

  return (
    <section
      ref={sectionRef}
      className="py-24 text-center overflow-hidden   rounded-4xl"
    >
      <h1 className="  text-5xl md:text-7xl leading-tight tracking-tight">
        {words.map((word, index) => (
          <span
            key={index}
            ref={(el) => (wordsRef.current[index] = el)}
             className={`inline-block mx-2 ${
      index % 2 === 1 ? "laila-bold" : "protest"
    }`}
          >
            {word}
          </span>
        ))}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-12  gap-12 p-6 2xl:p-24 mx-6 lg:mx-12 2xl:mx-24 mt-12">
        <div className="cols-span-1 2xl:col-span-4 flex flex-col h-full ">


          <div className="flex flex-col justify-start items-start gap-4 ">
            <h1 className="poppins text-3xl xl:text-5xl font-bold text-left">
              Our Learning Philosophy
            </h1>

            <div className="flex flex-col gap-4 mt-6 ">
              {[
                {
                  title: "100% Practical Learning",
                  desc: "Real projects. Real results.",
                },
                {
                  title: "One-on-One Mentorship",
                  desc: "Doubts? Ask anytime.",
                },
                {
                  title: "Structured Curriculum",
                  desc: "Clear roadmap from beginner to pro.",
                },
                {
                  title: "Live Group Discussions",
                  desc: "Learn, interact, grow together.",
                },
                {
                  title: "Interview Preparation",
                  desc: "Resume to HR rounds, we’ve got you.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4"
                >
                  <Image
                    alt=""
                    src="/Images/icon.webp"
                    width={48}
                    height={48}
                    className="w-10 lg:w-12 h-10 lg:h-12"
                  />
                  <div>
                    <p className="text-xl  text-start font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cols-span-1 2xl:col-span-4 w-full  overflow-hidden ">
          <div className="relative flex  w-full mx-auto lg:my-12 my-24 pt-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="absolute top-10 right-0 ">
              <Image
                src={"/Images/arrow.gif"}
                width={40}
                height={40}
                alt=""
                className="w-9 h-9  bg-[rgb(0,0,0)] text-white rounded-full"
              />
            </div>

            <Script
              src="https://cdn.lightwidget.com/widgets/lightwidget.js"
              strategy="lazyOnload"
            />
            <iframe
              src="//lightwidget.com/widgets/274cd1d5e85b5d64ab83d8a915b867d5.html"
              scrolling="no"
              // allowTransparency="true"
              className="w-full h-full border-0"
              style={{ overflow: "hidden" }}
            ></iframe>
          </div>
        </div>

        <div className="cols-span-1 2xl:col-span-4 flex flex-col justify-end h-full ">
          <h1 className="poppins text-3xl xl:text-5xl font-bold text-left ">
            Our Learning Philosophy
          </h1>
          <div className=" text-base md:text-md my-4 text-justify">
            <p>
              Our programs are designed to focus on hands-on experience with
              real-world projects, so you gain practical skills that matter. Our
              programs are designed to focus on hands-on experience with
              real-world projects, so you gain practical skills that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tagline;
