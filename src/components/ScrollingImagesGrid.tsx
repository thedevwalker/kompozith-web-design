import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { column1Items, column2Items, PortfolioItem } from "../types";
import { ArrowUpRight } from "lucide-react";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function ScrollingImagesGrid() {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Clone lists to ensure infinite continuous looping
  const duplicatedCol1 = [...column1Items, ...column1Items, ...column1Items];
  const duplicatedCol2 = [...column2Items, ...column2Items, ...column2Items];

  useEffect(() => {
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;
    const container = containerRef.current;

    if (!col1 || !col2 || !container) return;

    // Use GSAP Context for isolated memory cleanup
    const ctx = gsap.context(() => {
      // Clean up standard translation values to eliminate jumping
      gsap.set(col1, { yPercent: 0 });
      gsap.set(col2, { yPercent: -33.33 }); // Start second column slightly offset for organic asymmetry

      // 1. Column 1 scrolling UP timeline
      const speed1 = 20; // Seconds to complete a full loop cycle
      const tl1 = gsap.to(col1, {
        yPercent: -33.33, // Travel exactly 1/3 of the height (one full duplication block)
        ease: "none",
        repeat: -1,
        duration: speed1,
      });

      // 2. Column 2 scrolling DOWN timeline
      const speed2 = 22;
      const tl2 = gsap.to(col2, {
        yPercent: 0, // Starts at -33.33% and moves to 0% to scroll DOWN
        ease: "none",
        repeat: -1,
        duration: speed2,
      });

      // 3. ScrollTrigger velocity integration
      // As the user scrolls, the speed of rotation adapts dynamically based on velocity
      let velocityTimeout: ReturnType<typeof setTimeout>;

      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity());

          if (velocity > 15) {
            // Translate scroll velocity into speed scale boost
            // Clamp value to secure reasonable layout speed rates
            const targetTimeScale = Math.min(1 + velocity * 0.003, 5);

            gsap.to([tl1, tl2], {
              timeScale: targetTimeScale,
              duration: 0.15,
              overwrite: "auto",
            });

            // Smoothly decelerate back to normal scale (1x) when scrolling halts
            clearTimeout(velocityTimeout);
            velocityTimeout = setTimeout(() => {
              gsap.to([tl1, tl2], {
                timeScale: 1,
                duration: 1.1,
                ease: "power2.out",
                overwrite: "auto",
              });
            }, 80);
          }
        },
      });

      // 4. Parallax scroll effect for depth (subtle vertical shift of the whole container itself)
      gsap.to(container, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const renderCard = (item: PortfolioItem) => {
    return (
      <div
        key={item.id + Math.random().toString(36).substr(2, 4)} // Ensure unique keys for list rendering
        className={`group relative overflow-hidden rounded-3xl p-5 ${item.bgColor} transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] will-change-transform border border-slate-100`}
        style={{ contentVisibility: "auto" }} // Leverage hardware acceleration & render performance
      >
        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/2.5 transition-colors duration-500 pointer-events-none z-10" />

        {/* Top Header Row of Portfolio Mockup Card */}
        <div className="flex justify-between items-start z-20">
          <div>
            <span className="text-slate-500 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100/80 backdrop-blur-sm border border-slate-200/40">
              {item.category}
            </span>
          </div>
          {item.userHandle && (
            <span className="text-slate-400 font-mono text-xs font-semibold select-none">
              {item.userHandle}
            </span>
          )}
        </div>

        {/* Core Image Display Area */}
        <div className="my-4 flex-grow flex items-center justify-center relative overflow-hidden rounded-2xl">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform"
          />

          {/* Custom tag highlight */}
          {item.accentTag && (
            <div className="absolute top-3 left-3 bg-[#FF6230] text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm">
              {item.accentTag}
            </div>
          )}
        </div>

        {/* Card Title Content Row */}
        <div className="flex items-end justify-between z-20 mt-2">
          <div className="max-w-[85%] text-left">
            <h4 className="text-[#1A2540] font-sans font-bold text-sm sm:text-base leading-snug tracking-tight group-hover:text-[#FF6230] transition-colors duration-300">
              {item.title}
            </h4>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-slate-700" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[750px] overflow-hidden grid grid-cols-2 gap-4 lg:gap-6 px-2 md:px-4"
      id="rotating-portfolio-grid"
    >
      {/* Viewport atmospheric blur overlays (Top and Bottom) */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#FAFBFD] via-[#FAFBFD]/80 to-transparent pointer-events-none z-30 backdrop-blur-[2px]" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FAFBFD] via-[#FAFBFD]/80 to-transparent pointer-events-none z-30 backdrop-blur-[2px]" />

      {/* Column 1: Infinite Scrolling UP */}
      <div className="relative h-full overflow-hidden">
        <div
          ref={col1Ref}
          className="flex flex-col gap-4 lg:gap-6 py-2 will-change-transform"
        >
          {duplicatedCol1.map((item) => renderCard(item))}
        </div>
      </div>

      {/* Column 2: Infinite Scrolling DOWN */}
      <div className="relative h-full overflow-hidden">
        <div
          ref={col2Ref}
          className="flex flex-col gap-4 lg:gap-6 py-2 will-change-transform"
        >
          {duplicatedCol2.map((item) => renderCard(item))}
        </div>
      </div>
    </div>
  );
}
