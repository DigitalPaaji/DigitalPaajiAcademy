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
      className=" text-center overflow-hidden   rounded-4xl  px-6 2xl:px-24 py-24 mx-6 lg:mx-12 2xl:mx-24"
    >
<>
  {/* Mobile image */}
  <img
    src="/Images/headline.webp"
    alt=""
    className="mx-auto w-full h-auto block xl:hidden "
  />

  {/* Desktop image */}
  <img
    src="/Images/headline1.webp"
    alt=""
    className="mx-auto w-full h-auto hidden xl:block"
  />
</>

      {/* <h1 className="  text-3xl md:text-7xl leading-tight tracking-tight">
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
      </h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-12  gap-8 mt-24">
        <div className="cols-span-1 2xl:col-span-4 flex flex-col h-full ">


          <div className="flex flex-col justify-start items-start gap-4 ">
            <h1 className="bungee-shade-regular text-5xl xl:text-5xl font-bold text-left">
             Not Your Typical Academy
            </h1>

            <div className="flex flex-col gap-4 mt-6 ">
              {[
                {
                  icon:'/Images/tag/1.webp',
                  title: "Industry-Backed Projects",
                  desc: "Real projects. Real results.",
                },
                {
                  icon:'/Images/tag/2.webp',

                  title: "One-on-One Mentorship",
                  desc: "Doubts? Ask anytime.",
                },
                {
                  icon:'/Images/tag/3.webp',
                  
                  title: "Certification with Credibility",
                  desc: "Clear roadmap from beginner to pro.",
                },
                {
                  icon:'/Images/tag/4.webp',
                  
                  title: "Live Group Discussions",
                  desc: "Learn, interact, grow together.",
                },
                {
                  icon:'/Images/tag/5.webp',
                  
                  title: "Structured Curriculum",
                  desc: "Not just from theory, but through real-life inspiration.",
                },
                   {
                  icon:'/Images/tag/6.webp',
                  
                    title: "Mock Interviews",
                  desc: "Resume to HR rounds, we've got you.",
                },
              
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4"
                >
                  <Image
                    alt=""
                    src={item.icon}
                    width={48}
                    height={48}
                    className="w-10 lg:w-12 h-10 lg:h-12"
                  />
                  <div>
                    <p className="text-xl  text-start lg:font-semibold">{item.title}</p>
                    <p className="  text-start ">{item.desc}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       
       
       <div className="cols-span-1  2xl:col-span-4 w-full  overflow-hidden ">
          <div className="relative flex  w-full mx-auto lg:my-12 my-24 pt-4 h-fit md:h-[700px] lg:h-[820px] overflow-hidden ">

           
              <video
  src="/Images/academy.webm"
  loading="lazy"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-[100%] object-contain lg:object-cover rounded-xl "
/>
 


          </div>

        </div> 




    <div className="cols-span-1 2xl:col-span-4 flex flex-col justify-end h-full">
  <h1 className="bungee-shade-regular text-3xl xl:text-5xl font-bold text-left">
    From Learning to Earning
  </h1>
  <div className="text-base md:text-md my-4 text-justify">
    <p>
      At <strong>Digital Paaji Academy</strong>, we're not just teaching — we're living the digital life loud and clear. Our vibrant presence on platforms like Instagram proves we practice what we preach. From trending reels to behind-the-scenes glimpses, we show up every day with value, creativity, and consistency.
    </p>
    <p className="mt-4">
      We're <strong>Socially Loud</strong> — active, relevant, and constantly engaging with the real digital world. Our students learn by seeing us in action, building brands, managing campaigns, and going viral — not just from theory, but through real-life inspiration.
    </p>
    <p className="mt-2">
       Swipe through our Instagram screen recordings and stories to see how we create content that connects — and how you’ll learn to do the same.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}

export default Tagline;
