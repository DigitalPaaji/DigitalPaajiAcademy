'use client';

export default function HoverCard() {
  return (
    <div className="relative w-full h-[650px] md:h-[850px] xl:min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Images/cbanner.mp4" type="video/mp4" />
      </video>
    </div>
  );
}



// export default function HoverCard() {
//   return (
//     <div className="relative w-full h-[600px] md:h-[850px] px-6 lg:px-12 xl:px-24 pt-12 xl:min-h-screen overflow-hidden">
// <video
//   src="/Images/cbanner.mp4"
//   autoPlay
//   muted
//   loop
//   playsInline
//   preload="metadata"
//   className="w-full h-full object-cover"
// />

//     </div>
//   );
// }