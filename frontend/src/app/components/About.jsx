import React from "react";
import Image from "next/image"; // use 'img' tag if not using Next.js

function About() {
  return (
    <div className="mx-6 lg:mx-12 xl:mx-24 py-24 min-h-screen ">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold ">
          PUNJAB'S MOST PRACTICAL SKILL ACADEMY
        </h1>
        <p className="text-xl md:text-2xl underline font-semibold mt-4 ">
          Useful & Practical Learning Programs Designed by Industry Experts &
          Working Professionals
        </p>
      </div>

      <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-wrap md:flex-nowrap  rounded-lg w-full overflow-hidden gap-12">

        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="/Images/about.webp"
            alt="Sample"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="flex w-full md:w-1/2  ">

{/* First Column: Bottom Aligned */}
<div className="w-1/2 flex flex-col justify-end divide-y divide-gray-300 p-4">
  <div className="p-4 ">Block 1 (Bottom)</div>
  <div className="p-4 ">Block 2 (Bottom)</div>
</div>

{/* Vertical Line Between Columns */}
<div className="hidden md:block w-px bg-gray-300 mx-0"></div>

{/* Second Column: Top Aligned */}
<div className="w-1/2 flex flex-col justify-start divide-y divide-gray-300 p-4">
  <div className="p-4 ">Block 3 (Top)</div>
  <div className="p-4 ">Block 4 (Top)</div>
</div>

</div>

      </div>
    </div>
   
    </div>
  );
}

export default About;
