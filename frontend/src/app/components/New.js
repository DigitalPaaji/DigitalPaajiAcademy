"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = () => {
  const registerLetters = "REGISTER";
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % registerLetters.length);
    }, 300); // Adjust timing for smooth transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cursor-pointer absolute top-[43%] md:top-[41%] lg:top-[63%] xl:top-[66%] left-[29%] sm:left-[32%] md:left-[40%] lg:left-[19%] xl:left-[24%]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-center"
      >
        {/* REGISTER - Letter by Letter Animation */}
        <div className="flex justify-center space-x-1">
          {registerLetters.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ color: "#163393" }} // Default color (blue)
              animate={{ color: index === activeIndex ? "#FFFFFF" : "#163393" }} // Active letter white, others blue
              transition={{
                duration: 0.3,
              }}
              className="text-2xl lg:text-4xl xl:text-5xl font-bold"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* NOW - Blinking Effect */}
        <motion.h1 
          animate={{ color: ["#FFFFFF", "#163393"] }} // Blue <-> White blinking
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-3xl lg:text-5xl xl:text-6xl font-extrabold lg:mt-2"
        >
          NOW
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default AnimatedText;
