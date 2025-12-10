import React from "react";

function InnerBanner({ heading}) {
  return (
    <div className="relative h-[500px] md:h-[650px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-150 rotate-90 md:scale-100 md:rotate-90"
        style={{
          backgroundImage: "url('/Images/courses/2.png')",
        }}
      />

      {/* Overlay (optional for better text visibility) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Heading */}
      <h1 className="relative z-10 bungee-shade-regular text-4xl md:text-5xl xl:text-7xl font-bold text-center text-white px-4">
        {heading}
      </h1>
    </div>
  );
}

export default InnerBanner;
