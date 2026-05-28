import React from "react";
import { motion } from "motion/react";

export default function ProcessSection() {
  return (
    <section
      id="process-section"
      className="relative w-full py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#FAFBFD]"
    >
      {/* 2-Column top section mapping to the first grid row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-6 lg:mb-8" id="process-top-row">
        
        {/* Left Side: Category Header Pillar */}
        <div className="flex flex-col items-start text-left justify-start md:pr-4 pt-4">
          {/* Accent Blue Badge */}
          <div className="bg-[#1A2540] text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 flex items-center gap-1.5">
            Our process
          </div>

          <h2 className="text-[#1A2540] font-sans font-black text-4xl sm:text-5xl tracking-tight leading-none mb-6">
            How we do it.
          </h2>

          <p className="text-slate-500 font-sans text-xs sm:text-sm font-normal leading-relaxed max-w-xs">
            Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.
          </p>
        </div>

        {/* Right Side: Step 01 Discovery Call (Double Column Card) */}
        <div
          className="md:col-span-2 group relative overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-amber-100/15 border border-[#E4E9F2]/80 p-6 md:p-8 rounded-[28px] shadow-2xs hover:shadow-xs transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 justify-between text-left"
          id="process-step-1"
        >
          {/* Subtle blurred corner decoration */}
          <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />

          {/* Left card content */}
          <div className="sm:max-w-[48%] relative z-10">
            <span className="text-3xl sm:text-4xl font-black text-[#FF6230] tracking-tight block mb-2 font-sans">
              01
            </span>
            <h3 className="text-[#1A2540] font-sans font-black text-xl sm:text-2xl tracking-tight mb-5">
              Discovery Call
            </h3>
            <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed font-normal">
              <span className="font-semibold text-slate-700">“We listen before we create.”</span> Auditing your brand, understanding your goals, and mapping out the right strategy to move forward.
            </p>
          </div>

          {/* Right card mockup image */}
          <div className="w-full sm:max-w-[48%] rounded-2xl overflow-hidden aspect-[4/3] border border-slate-100 shadow-sm relative z-10 shrink-0">
            <img
              src="/src/assets/images/process_step_one_call_1779961815697.png"
              alt="Discovery Call platform"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>

      {/* 3-Column remaining process steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto" id="process-bottom-row">
        
        {/* Step 02: User Research */}
        <div
          className="group relative overflow-hidden bg-gradient-to-br from-white via-[#F1F4FA]/80 to-[#D2DAE8]/20 border border-[#E2E8F4]/80 p-7 md:p-9 rounded-[28px] shadow-2xs hover:shadow-xs transition-all duration-500 flex flex-col justify-between min-h-[350px] text-left"
          id="process-step-2"
        >
          {/* Elegant dark blur spot in the bottom-right corner as shown in screen */}
          <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-slate-300/30 blur-2xl pointer-events-none z-0" />

          <div className="relative z-10">
            <span className="text-3xl sm:text-4xl font-black text-[#FF6230] tracking-tight block mb-2 font-sans">
              02
            </span>
            <h3 className="text-[#1A2540] font-sans font-black text-xl sm:text-2xl tracking-tight">
              User Research
            </h3>
          </div>

          <div className="relative z-10 mt-auto">
            <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed font-normal">
              <span className="font-semibold text-slate-700">“Structure meets aesthetics.”</span> From wireframes to high-fidelity UI mockups — we craft an experience that looks great and feels intuitive.
            </p>
          </div>
        </div>

        {/* Step 03: Design & Build */}
        <div
          className="group relative overflow-hidden bg-gradient-to-br from-white via-[#FAF6F3]/80 to-[#FCE6D6]/20 border border-[#F2E5DC]/80 p-7 md:p-9 rounded-[28px] shadow-2xs hover:shadow-xs transition-all duration-500 flex flex-col justify-between min-h-[350px] text-left"
          id="process-step-3"
        >
          {/* Subtle warm orange sunset glow at bottom right */}
          <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[#FF6230]/10 blur-2xl pointer-events-none z-0" />

          <div className="relative z-10">
            <span className="text-3xl sm:text-4xl font-black text-[#FF6230] tracking-tight block mb-2 font-sans">
              03
            </span>
            <h3 className="text-[#1A2540] font-sans font-black text-xl sm:text-2xl tracking-tight">
              Design & Build
            </h3>
          </div>

          <div className="relative z-10 mt-auto">
            <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed font-normal">
              <span className="font-semibold text-slate-700">“We code exactly what we promised.”</span> Pixel-perfect development, CMS integration, performance optimization and responsive across all devices.
            </p>
          </div>
        </div>

        {/* Step 04: Launch & Grow */}
        <div
          className="group relative overflow-hidden bg-gradient-to-br from-white via-[#E8F1FC]/60 to-[#9AC3F7]/30 border border-[#D5E4F5]/80 p-7 md:p-9 rounded-[28px] shadow-2xs hover:shadow-xs transition-all duration-500 flex flex-col justify-between min-h-[350px] text-left"
          id="process-step-4"
        >
          {/* Cool blue cyan gradient overlay highlight with heavy blur */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-sky-400/20 blur-2xl pointer-events-none z-0" />
          <div className="absolute -bottom-14 -right-14 w-44 h-44 rounded-full bg-blue-500/10 blur-2xl pointer-events-none z-0" />

          <div className="relative z-10">
            <span className="text-3xl sm:text-4xl font-black text-[#FF6230] tracking-tight block mb-2 font-sans">
              04
            </span>
            <h3 className="text-[#1A2540] font-sans font-black text-xl sm:text-2xl tracking-tight">
              Launch & Grow
            </h3>
          </div>

          <div className="relative z-10 mt-auto">
            <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed font-normal">
              <span className="font-semibold text-slate-700">“Launch day is just the beginning.”</span> We deploy, onboard your team, and keep monitoring performance so your product keeps improving.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
