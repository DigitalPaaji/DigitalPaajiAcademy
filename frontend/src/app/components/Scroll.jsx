// Timeline Scroll Animation for Enrollment Process (Digital Paaji Academy)
// Inspired by Pinterest animation with steps and connecting lines
// npm install framer-motion react-intersection-observer

"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Step 1: Enroll Online",
    description: "Fill out the enrollment form on our website to get started.",
    gif: "/gif/enroll.gif",
  },
  {
    title: "Step 2: Attend Free Demo",
    description: "Join our live session to understand our teaching style.",
    gif: "/gif/demo.gif",
  },
  {
    title: "Step 3: Start Learning",
    description: "Begin your structured learning journey with our mentors.",
    gif: "/gif/learning.gif",
  },
  {
    title: "Step 4: Certification",
    description: "Get certified and celebrate your growth at convocation!",
    gif: "/gif/certificate.gif",
  },
];

export default function EnrollmentTimeline() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    if (inView) setStartAnim(true);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-4xl w-full relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2" />
        <div className="flex flex-col gap-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={startAnim ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <div className="w-1/2 p-4 bg-white border border-gray-200 shadow-lg rounded-xl relative">
                <div className="absolute top-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white transform -translate-y-1/2 ${
                  index % 2 === 0 ? "-left-9" : "-right-9"
                }" />
                <h3 className="font-bold text-lg text-blue-700">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{step.description}</p>
                <img
                  src={step.gif}
                  alt={step.title}
                  className="w-full h-32 object-cover mt-4 rounded-md"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
