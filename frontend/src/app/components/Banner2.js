"use client";
import { useRef } from "react";
import gsap from "gsap";

export default function HoverCard() {
  const cardRef = useRef();

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      rotate: 5,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-64 h-40 bg-white text-black flex items-center justify-center rounded-xl cursor-pointer"
    >
      Hover Me, Paaji!
    </div>
  );
}
