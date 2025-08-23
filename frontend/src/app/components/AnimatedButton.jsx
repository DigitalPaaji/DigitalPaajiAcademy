"use client";

import { motion } from "framer-motion";

const AnimatedButton = ({ downloadPDF }) => {
  return (
    <motion.button
      onClick={downloadPDF}
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 10px #163393",
          "0 0 20px #3357FF",
          "0 0 10px #163393",
        ],
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="mt-4 px-6 py-3 text-white text-lg font-semibold lg:font-bold rounded-2xl 
                 bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 
                 bg-[length:200%_200%] cursor-pointer"
    >
      Download PDF
    </motion.button>
  );
};

export default AnimatedButton;
