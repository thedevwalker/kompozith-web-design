import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2, Award, Calendar, BarChart3, Clock, Sparkles, X, ChevronRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
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

  const cases: CaseStudy[] = [
    {
      id: "automentor",
      title: "Automentor",
      subtitle: "AutoMentor App Mobile",
      category: "UX Case Study",
      description: "Bold and vibrant Branding and UI/UX for a startup with personality and edge.",
      imageUrl: "/src/assets/images/case_study_automentor_1779962169075.png",
      bgColor: "bg-slate-900 border-blue-500/30",
      accentColor: "#3B82F6",
      tagline: "Unlocking seamless automotive mentorship guidance at the tab of a button.",
      stats: [
        { label: "Active Mentorship Cycles", value: "24,000+" },
        { label: "App Store Core Rating", value: "4.9/5★" },
        { label: "Onboarding drop-off", value: "-45%" },
      ],
      details: [
        "In-depth heuristic roadmap evaluation",
        "Dynamic geographical map-matching systems",
        "Integrated conversational calendars and schedules",
        "Modular dark-mode dashboard tailored for on-the-go mechanics"
      ]
    },
    {
      id: "kigoo",
      title: "Kigoo",
      subtitle: "Streaming Entertainment Platform",
      category: "Creative Branding & App Design",
      description: "Immersive entertainment streaming experience tailored with bold typography and diagonal dynamic motion Ribbons.",
      imageUrl: "/src/assets/images/case_study_kigoo_1779962190864.png",
      bgColor: "bg-[#4C1D95] border-[#D8B4FE]/30",
      accentColor: "#A78BFA",
      tagline: "Streamlining next-generation television and premium studio curation globally.",
      stats: [
        { label: "Subscribers Reached", value: "1.2 Million" },
        { label: "Daily Active Engagement", value: "+85%" },
        { label: "Avg Viewing Session", value: "84 mins" },
      ],
      details: [
        "Interactive Diagonal Tape-Ribbon UI mechanics",
        "Optimized client-side responsive image delivery layers",
        "Dynamic content recommendation models",
        "Ultra-low latency custom web video engine controller"
      ]
    },
    {
      id: "monlook",
      title: "Mon Look",
      subtitle: "Personal Styling Social Portal",
      category: "Fashion Tech UI/UX",
      description: "Bespoke fashion consulting interface optimizing conversions. Scaled on pastel palettes.",
      imageUrl: "/src/assets/images/case_study_monlook_1779962211255.png",
      bgColor: "bg-[#FAECF0]/80 border-rose-300/30",
      accentColor: "#FB7185",
      tagline: "Putting full personal closets on high-street digital visualizers.",
      stats: [
        { label: "Stylist Sales Boost", value: "+140%" },
        { label: "User Retention Rate", value: "92%" },
        { label: "Daily Styling Uploads", value: "8,500+" },
      ],
      details: [
        "Fluid pastel-pink interactive color theme configurations",
        "Trio-phone slider rendering for premium catalog reviews",
        "One-click stylist session reservation workflow",
        "Secured enterprise payment gateway links"
      ]
    }
  ];

  return (
    <section
      id="case-studies"
      className="relative w-full py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-white"
    >
      {/* Structural layout row matching the screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-14 relative z-10">
        <div className="flex flex-col items-start text-left">
          {/* Accent Badge */}
          <div className="bg-[#1A2540] text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 flex items-center gap-1.5 shadow-sm">
            Work
          </div>

          <h2 className="text-[#1A2540] font-sans font-black text-4xl sm:text-5xl tracking-tight leading-none">
            The outcomes we've got.
          </h2>
        </div>

        {/* Right strategic description */}
        <div className="flex items-center h-full md:pt-10 text-left">
          <p className="text-slate-600 font-sans text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-lg">
            A look at some of the brands we've helped — and the outcomes we've delivered.
          </p>
        </div>
      </div>

      {/* Styled Staggered Stacked Case Studies */}
      <div className="max-w-7xl mx-auto space-y-8" id="outcomes-cards-list">
        {cases.map((study) => (
          <div
            key={study.id}
            onClick={() => setSelectedCase(study)}
            className={`group relative overflow-hidden rounded-[32px] border ${study.bgColor} p-6 sm:p-10 lg:p-12 cursor-pointer transition-all duration-500 hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)] flex flex-col md:grid md:grid-cols-12 gap-8 items-center text-left`}
          >
            {/* Background glowing lighting flare inside cards */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 via-black/0 to-transparent pointer-events-none" />

            {/* Left Content Column */}
            <div className="md:col-span-4 flex flex-col justify-between h-full space-y-12 z-10">
              {/* Card Badge / Title Block */}
              <div>
                <span className="text-xs uppercase font-mono font-black tracking-widest text-[#FF6230] mb-3 inline-block">
                  {study.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-black text-white mix-blend-difference">
                  {study.subtitle}
                </h3>
              </div>

              {/* Bottom Info Row */}
              <div>
                <h4 className="text-md font-sans font-extrabold text-[#FFAE96] capitalize tracking-wide mb-1">
                  {study.title}
                </h4>
                <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed font-normal max-w-sm">
                  {study.description}
                </p>
              </div>
            </div>

            {/* Center / Right Picture Column */}
            <div className="md:col-span-8 w-full h-full min-h-[220px] sm:min-h-[350px] overflow-hidden rounded-2xl relative z-10 border border-white/5 shadow-2xl">
              <img
                src={study.imageUrl}
                alt={study.subtitle}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-700 ease-out will-change-transform"
              />

              {/* High End Floating Open case study Badge */}
              <div className="absolute top-5 right-5 z-20">
                <div className="bg-white/95 backdrop-blur-md text-[#1A2540] hover:bg-white px-4.5 py-2.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 transition-all duration-300 group-hover:scale-105">
                  <span>Open case study</span>
                  <div className="w-5 h-5 rounded-full bg-[#FF6230] flex items-center justify-center text-white">
                    <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Hover card border shadow transition indicator overlay */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-t group-hover:from-black/10 transition-colors duration-500 pointer-events-none" />
            </div>

          </div>
        ))}
      </div>

      {/* Modern Dialog Detailed Modal Showcase representation */}
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
                  alt={selectedCase.subtitle}
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
                  <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#FFAE96] bg-[#FF6230] px-2.5 py-1 rounded-sm mb-2.5 inline-block">
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
                  <p className="text-lg md:text-xl font-normal text-[#1A2540] italic leading-relaxed">
                    "{selectedCase.tagline}"
                  </p>
                </div>

                {/* Dynamic Stats Row cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedCase.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#F4F6FB] border border-slate-100 p-5 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xs"
                    >
                      <span className="text-[#FF6230] font-sans font-black text-2.5xl sm:text-3xl tracking-tight mb-1">
                        {stat.value}
                      </span>
                      <span className="text-slate-500 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Feature breakdown lists */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <h4 className="text-[#1A2540] font-sans font-extrabold text-md md:text-lg mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FF6230]" />
                      Core Solutions Delivered
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      Kompozith Studio architectured high-fidelity visual and front-end performance pipelines to supercharge {selectedCase.title}'s reach, maximizing continuous loop animations and tactile responses.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#1A2540] font-sans font-extrabold text-md md:text-lg mb-4">
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
                <span className="text-slate-400 font-mono text-[11px]">
                  Project completed successfully in 2026
                </span>
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    const ctc = document.getElementById("contact-form-sidebar");
                    if (ctc) {
                      // Trigger contact button behavior
                      const btn = document.getElementById("magnetic-cta-trigger");
                      if (btn) btn.click();
                    } else {
                      // Fallback opening
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

    </section>
  );
}
