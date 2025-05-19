"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    old: "Boring lectures",
    icon: "/Images/icon.webp",
    new: "Real Case Studies & Projects",
    desc: "Because experience beats memorization every single time.",
  },
  {
    old: "Copy-paste tutorials",
    icon: "/Images/icon.webp",
    new: "Hands-on Building & Collaboration",
    desc: "Students actually build stuff and get their hands dirty from Day 1.",
  },
  {
    old: "Certificates with no skill",
    icon: "/Images/icon.webp",
    new: "Real Proof of Work",
    desc: "They leave with portfolios that impress, not just PDFs.",
  },
   {
    old: "Boring lectures",
    icon: "/Images/icon.webp",
    new: "Real Case Studies & Projects",
    desc: "Because experience beats memorization every single time.",
  },
  {
    old: "Copy-paste tutorials",
    icon: "/Images/icon.webp",
    new: "Hands-on Building & Collaboration",
    desc: "Students actually build stuff and get their hands dirty from Day 1.",
  },

];

export default function WhyWeStarted() {
  const textRef = useRef(null);
const imageRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    tl.fromTo(
      textRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    ).fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "<" // sync start
    );
  });

  return () => ctx.revert();
}, []);

  return (
    <section className="mx-6 lg:mx-12 xl:mx-40 py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Column with Background and Padding */}
        <div  ref={textRef} className="bg-white p-6 md:p-10 rounded-xl">
          <h2 className="bungee-shade-regular text-5xl lg:text-6xl font-bold mb-14 text-black">
            We Are Different
          </h2>
          <div className="space-y-8">
            {items.map((item, index) => (
              <StrikeItem key={index} index={index} {...item} />
            ))}
          </div>
        </div>

        {/* Right Image Column */}
        <div ref={imageRef} className="w-full h-full">
          <Image
          width={220}
          height={220}
            src="/Images/about2.webp"
            alt="Why we started illustration"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>


        <p className="text-md xl:text-lg  my-12 text-justify md:justify-center ">
        At Digital Paaji Academy, we’re not here to follow the crowd — we’re here to build the next generation of creators, marketers, developers, and leaders. Our journey started with a mission to provide real learning with real results. Over the past year, we’ve trained passionate learners, helped them build strong portfolios, crack client interviews, land freelance gigs, and even launch their own digital ventures. Each student becomes a part of our close-knit community, where personal attention, honest feedback, and practical experience go hand in hand.
         
         We believe in breaking the typical classroom mold. That’s why we focus on hands-on work, live projects, portfolio building, and one-on-one mentoring — not just PDFs and PowerPoint slides. Whether you're from a small town or a big city, if you have the will to grow, we have the tools and team to guide you. Digital Paaji Academy isn’t just an institute — it’s a place where confidence is built, dreams are nurtured, and careers are kickstarted.
          </p>

               <h3 className="bungee-shade-regular font-bold text-4xl md:text-5xl leading-tight tracking-tight">
      
          
           Dream Big. Learn Loud. Build Real. 
          
  
      </h3>
 
    </section>
  );
}

function StrikeItem({ old, icon, new: newTitle, desc, index }) {
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { width: 0 },
        {
          width: "100%",
          duration: 1.2,
          ease: "power2.out",
          delay: index * 0.4,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, textRef);

    return () => ctx.revert(); // Cleans up GSAP animation
  }, [index]);

  return (
    <div>
      {/* Strike-through Line Animation */}
      <p ref={textRef} className="relative text-xl font-medium w-fit">
        <span>{old}</span>
        <span
          ref={lineRef}
          className="absolute left-0 top-1/2 h-0.5 bg-black"
          style={{ transform: "translateY(-50%)" }}
        />
      </p>

      {/* Icon + New Text Description */}
      <div className="mt-2 flex items-center gap-4">
        <img
          src={icon}
          alt="icon"
          className="w-10 h-10 object-contain shrink-0 mt-1"
        />
        <div>
          <p className="poppins text-md xl:text-2xl font-bold">{newTitle}</p>
          {/* <p className="mt-1">{desc}</p> */}
        </div>
      </div>
    </div>
  );
}
