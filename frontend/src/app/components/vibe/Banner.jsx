"use client";
// import Popup from "../Popup";
import { useState } from "react";
// import { motion } from "framer-motion";

export default function HoverCard() {
 const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    // console.log("Popup khul rahi hai...");
    setIsOpen(true);
  };
  const closeMenu = () => {
    // console.log("Popup bnd ho gyi h...");
    setIsOpen(false);
  };
//   const registerLetters = "REGISTER";
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % registerLetters.length);
//     }, 300); // Adjust timing for smooth transition

//     return () => clearInterval(interval);
//   }, []);
  return (
    <div className="py-24 lg:py-0 lg:h-[800px] flex flex-col gap-6 items-center justify-center px-6 md:px-12 lg:px-24 xl:px-40 "
    >
       <h1 className="bungee-shade-regular text-center font-bold text-4xl md:text-7xl xl:text-8xl ">
          We Make Boring  Things Interesting
        </h1>
                  <p className="poppins text-md mt-2 text-center lg:w-[800px]">
                Not just learning — you're unlocking a launchpad to your future.
                Let's turn skills into success.
                Want to be part of the fun?
 Join us and make every Friday unforgettable.
Because at Paaji Academy, you don’t just learn – you live the vibe.
              </p>

             {/* <div>
                  <div onClick={()=>{openMenu()}}   className="cursor-pointer ">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-center"
      >
        
        <div className="flex justify-center space-x-1">
          {registerLetters.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ color: "#163393" }} // Default color (blue)
              animate={{ color: index === activeIndex ? "#FFFFFF" : "#163393" }} // Active letter white, others blue
              transition={{
                duration: 0.3,
              }}
              className="poppins-bold text-2xl lg:text-4xl xl:text-5xl "
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.h1 
          animate={{ color: ["#FFFFFF", "#163393"] }} // Blue <-> White blinking
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="poppins-bold text-3xl lg:text-5xl xl:text-6xl font-extrabold lg:mt-2"
        >
          NOW
        </motion.h1>
      </motion.div>
    </div>
             </div> */}

               {/* {isOpen && <Popup closeMenu={closeMenu} />}  */}
    </div>
  );
}
