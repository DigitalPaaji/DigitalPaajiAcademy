export default function HoverCard() {
  return (
    <div className="relative w-full h-auto md:h-[650px] xl:min-h-screen overflow-hidden">
      <video
        src="/Images/banner.mp4"
        loading="lazy"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[100%] object-contain md:object-cover"
      />
    </div>
  );
}




// export default function HoverCard() {


//   return (
//     <div

//       className="h-[500px] md:[650px] lg:h-[800px] flex items-center justify-center"
//     >
//        <h1 className="bungee-shade-regular font-bold text-3xl md:text-5xl xl:text-6xl  text-center xl:text-left">
//           BANNER VIDEO
//         </h1>
//     </div>
//   );
// }
