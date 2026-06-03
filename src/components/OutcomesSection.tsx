import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, CheckCircle2, Sparkles, X, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  bgColor: string;
  accentColor: string;
  tagline: string;
  stats: { label: string; value: string }[];
  details: string[];
}

export default function OutcomesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // High performance smooth custom cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 280, mass: 0.15 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMousePos);
    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, [cursorX, cursorY]);

  // GSAP horizontal scroll pinning & parallax
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Calculate how far to scroll horizontally
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth);
      };

      const scrollTween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Parallax effect on background images relative to scroll horizontal velocity
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      cards.forEach((card) => {
        const wrap = card.querySelector(".parallax-wrap");
        if (!wrap) return;

        gsap.fromTo(
          wrap,
          { xPercent: -7 },
          {
            xPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const cases: CaseStudy[] = [
    {
      id: "stackwise",
      title: "Stackwise",
      category: "AI & SaaS",
      description: "Tactile electronics and smart dial engineering paired with state-of-the-art SaaS automation dashboards.",
      imageUrl: "/src/assets/images/case_study_automentor_1779962169075.png",
      bgColor: "bg-[#EAEAEA]",
      accentColor: "#FF6230",
      tagline: "Revolutionizing modern automated workflows with responsive tactile dials and neon halos.",
      stats: [
        { label: "Active Connections", value: "85,000+" },
        { label: "Execution Latency", value: "<12ms" },
        { label: "Workflows Animated", value: "2.4M/day" },
      ],
      details: [
        "Tactile volume knob and slider physical interface feedback",
        "Reactive neon glowing underlying halos state indicator system",
        "Asynchronous cloud function pipeline orchestrators",
        "Premium performance analytics dashboard scaled for multi-device view"
      ]
    },
    {
      id: "genesy",
      title: "Genesy",
      category: "Technology & SaaS",
      description: "Ultra-high-definition device telemetry showing hardware rotation accuracy with custom environment resistance features.",
      imageUrl: "/src/assets/images/case_study_kigoo_1779962190864.png",
      bgColor: "bg-[#0B101D]",
      accentColor: "#3B82F6",
      tagline: "Engineering ultra-high-definition industrial operations via dynamic wet adjustment knobs.",
      stats: [
        { label: "Precision Metric", value: "0.001mm" },
        { label: "Ingress Protection", value: "IP68 Rated" },
        { label: "API Query Speed", value: "99.99%" },
      ],
      details: [
        "Photorealistic water-resistant component micro-structure modeling",
        "Dual-action rotary dial with integrated laser indicator lights",
        "Sub-millisecond hardware-to-cloud sync adapters",
        "Streamlined real-time IoT status monitoring dashboards"
      ]
    },
    {
      id: "althor",
      title: "Althor",
      category: "Finance & Fintech",
      description: "An elegant, matte silver payment gateway and interactive smart console facilitating high stakes multi-currency operations.",
      imageUrl: "/src/assets/images/case_study_monlook_1779962211255.png",
      bgColor: "bg-[#ECECEC]",
      accentColor: "#FF6230",
      tagline: "Delivering minimalist silver terminal interactions and laser-guided micro-accounting models.",
      stats: [
        { label: "Transaction Value", value: "$1.4 Billion" },
        { label: "Onboarding Path", value: "Only 45s" },
        { label: "Compliance Score", value: "100/100" },
      ],
      details: [
        "Futuristic structural shell with dynamic linear LED neon alignment",
        "Ultra-secured public key cryptographic layer standard",
        "Microsecond transaction broadcast queue handlers",
        "Seamless international banking ledger interfaces"
      ]
    },
    {
      id: "etery",
      title: "Etery",
      category: "E-commerce",
      description: "Tactile material-black composite equipment styling combined with fluid shopping portals to unlock premium customer actions.",
      imageUrl: "/src/assets/images/brand_identity_mockup_1779960773588.png",
      bgColor: "bg-[#1C202E]",
      accentColor: "#FF6230",
      tagline: "Simplifying premium audio design systems through tactile custom state managers and buttons.",
      stats: [
        { label: "Conversion Rate Boost", value: "+44%" },
        { label: "Audio Playback Uptime", value: "99.999%" },
        { label: "Mobile Bounce Rate", value: "-28%" },
      ],
      details: [
        "Rich sensory composite materials visual alignment guidelines",
        "Synchronized physical state animations via React and Tailwind",
        "Instant checkout mechanics with fully reactive tactile buttons",
        "Elastic-search product catalog with customized metadata arrays"
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Horizontally scrolling track */}
      <div
        ref={trackRef}
        className="flex items-stretch will-change-transform"
        style={{ width: "fit-content" }}
      >
        {/* First panel: Section header (viewport-width) */}
        <div className="w-screen h-screen flex items-center shrink-0 px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-6 md:gap-8 items-start text-left">
            <div className="flex flex-col items-start">
              {/* Accent Badge */}
              <div className="bg-[#1A2540] text-white px-4 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest mb-5 flex items-center gap-1.5 shadow-xs">
                Work
              </div>

              <h2 className="text-[#1A2540] font-sans font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
                The outcomes we've got.
              </h2>
            </div>

            {/* Strategic description */}
            <div className="flex items-center">
              <p className="text-slate-500 font-sans text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
                A look at some of the brands we've helped — and the outcomes we've delivered with precision engineering and high fidelity design.
              </p>
            </div>
          </div>
        </div>

        {/* Project cards row */}
        {cases.map((study) => (
          <div
            key={study.id}
            onClick={() => setSelectedCase(study)}
            onMouseEnter={() => setHoveredCardId(study.id)}
            onMouseLeave={() => setHoveredCardId(null)}
            className="project-card group relative overflow-hidden cursor-none bg-slate-50 flex flex-col justify-end transition-all duration-500 shrink-0 w-screen h-screen"
          >
            {/* Main high fidelity device mockup image with parallax wrapper */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <div 
                className="parallax-wrap absolute inset-y-0 w-[120%] h-full"
                style={{ left: "-10%" }}
              >
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                />
              </div>
            </div>

            {/* Gradient shadow overlay behind content so text is readable */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

            {/* White floating card layout matching reference exactly */}
            <div className="absolute bottom-12 left-4 sm:left-8 md:left-12 lg:left-20 w-[calc(100%-2rem)] sm:w-[480px] bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex items-center justify-between shadow-lg border border-white/40 transition-all duration-300 group-hover:shadow-xl group-hover:bg-white z-10">
              <div className="text-left">
                <span className="text-[#FF6230] font-sans text-xs font-bold uppercase tracking-wider mb-2 block">
                  {study.category}
                </span>
                <h3 className="text-[#1A2540] font-sans font-black text-xl sm:text-2xl tracking-tight leading-tight shadow-none mb-1">
                  {study.title}
                </h3>
                <p className="text-slate-500 font-sans text-xs sm:text-sm font-normal line-clamp-2">
                  {study.description}
                </p>
              </div>

              {/* Box diagonal arrow container */}
              <div className="w-12 h-12 rounded-xl bg-[#111827] group-hover:bg-[#FF6230] text-white flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 ml-6">
                <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal Details Overlay */}
      <AnimatePresence>
        {selectedCase && (
          <>
            {/* Modal Backdrop Blur lock out */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Central detail card popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-x-4 top-[8%] md:top-[12%] max-w-4xl mx-auto bg-white rounded-[32px] overflow-hidden shadow-2xl z-50 border border-slate-100 flex flex-col h-[80vh] md:h-auto md:max-h-[76vh] text-left"
              id="case-study-details-modal"
            >
              {/* Header block filled with background image mockup cover */}
              <div className="relative h-48 sm:h-64 md:h-72 w-full shrink-0">
                <img
                  src={selectedCase.imageUrl}
                  alt={selectedCase.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Backdrop dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-black/30" />

                {/* Close Button Trigger */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Floating Metadata Overlay */}
                <div className="absolute bottom-6 left-6 md:left-9 text-white">
                  <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#FFAE96] bg-[#FF6230] px-2.5 py-1 rounded-sm mb-2.5 inline-block">
                    {selectedCase.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-tight leading-none mt-1">
                    {selectedCase.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Core Body details */}
              <div className="p-6 md:p-9 overflow-y-auto space-y-8 flex-grow">
                {/* Tagline sentence */}
                <div className="border-l-4 border-[#FF6230] pl-5">
                  <p className="text-lg md:text-xl font-sans font-normal text-[#1A2540] italic leading-relaxed">
                    "{selectedCase.tagline}"
                  </p>
                </div>

                {/* Dynamic Stats Row cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedCase.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#F4F6FB] border border-slate-100 p-5 rounded-2xl flex flex-col justify-center items-center text-center shadow-xs"
                    >
                      <span className="text-[#FF6230] font-sans font-black text-2xl sm:text-3xl tracking-tight mb-1">
                        {stat.value}
                      </span>
                      <span className="text-slate-500 font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Feature breakdown lists */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <h4 className="text-[#1A2540] font-sans font-black text-md md:text-lg mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FF6230]" />
                      Core Solutions Delivered
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      Kompozith Studio architectured high-fidelity visual and front-end performance pipelines to supercharge {selectedCase.title}'s reach, maximizing continuous loop animations and tactile responses.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1A2540] font-sans font-black text-md md:text-lg mb-4">
                      Engineering Scope
                    </h4>
                    <ul className="space-y-3">
                      {selectedCase.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer row with CTA to close and act */}
              <div className="p-6 bg-[#F4F6FB] border-t border-slate-150 flex items-center justify-between shrink-0">
                <span className="text-slate-400 font-sans text-[11px]">
                  Project completed successfully in 2026
                </span>
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    const ctc = document.getElementById("contact");
                    if (ctc) {
                      ctc.scrollIntoView({ behavior: "smooth" });
                    } else {
                      const event = new CustomEvent("openContactForm");
                      window.dispatchEvent(event);
                    }
                  }}
                  className="bg-[#FF6230] text-white hover:bg-[#ff7548] px-5 py-2.5 rounded-full text-xs font-bold leading-none shadow-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Build with this framework</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Custom Hover Follow Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-white/20 backdrop-blur-md border border-white/50 shadow-[0_16px_36px_rgba(0,0,0,0.15)] flex items-center justify-center w-14 h-14 -ml-7 -mt-7"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hoveredCardId ? 1 : 0,
          opacity: hoveredCardId ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 26,
        }}
      >
        <div className="w-9 h-9 rounded-full bg-white/55 flex items-center justify-center shadow-xs border border-white/70">
          <ArrowUpRight className="w-4.5 h-4.5 text-[#1A2540] stroke-[3]" />
        </div>
      </motion.div>

    </section>
  );
}