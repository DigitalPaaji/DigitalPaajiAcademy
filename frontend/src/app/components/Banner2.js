export default function HoverCard() {
  return (
    <div className="relative w-full h-[600px] md:h-[850px] xl:min-h-screen overflow-hidden">
<video
  src="/Images/banner.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-full object-cover"
/>

    </div>
  );
}