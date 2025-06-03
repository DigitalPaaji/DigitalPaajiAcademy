export default function HoverCard() {
  return (
    <div className="relative w-full h-[600px] md:h-[850px] xl:min-h-screen overflow-hidden">
      <video
        src="/Images/banner.mp4"
        loading="lazy"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[100%] object-cover"
      />
    </div>
  );
}