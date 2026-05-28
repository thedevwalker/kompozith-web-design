import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Mail, Phone, MessageSquare, Send, CheckCircle2, User, Globe, FileText, ArrowRight, ShieldCheck } from "lucide-react";

import Header from "./components/Header";
import LinesBackground from "./components/LinesBackground";
import MagneticButton from "./components/MagneticButton";
import ScrollingImagesGrid from "./components/ScrollingImagesGrid";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import OutcomesSection from "./components/OutcomesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function App() {
  useSmoothScroll();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", budget: "medium" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleOpenDrawer = () => {
      setDrawerOpen(true);
    };
    window.addEventListener("openContactForm", handleOpenDrawer);
    return () => {
      window.removeEventListener("openContactForm", handleOpenDrawer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setDrawerOpen(false);
      setFormData({ name: "", email: "", message: "", budget: "medium" });
    }, 4000);
  };

  return (
    <div id="hero-top" className="relative min-h-screen w-full bg-[#FAFBFD] text-slate-800 font-sans overflow-x-hidden transition-colors duration-300">
      
      {/* SVG-based Guideline & Crosshair Backdrop */}
      <LinesBackground />

      {/* Decorative Blur Orbs for elegant depth background matching */}
      <div className="absolute top-24 left-[15%] w-72 h-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-96 right-[10%] w-96 h-96 rounded-full bg-orange-400/5 blur-3xl pointer-events-none z-0" />

      {/* Header Navigation Module */}
      <Header onNavClick={(id) => {
        if (id === "contact") {
          setDrawerOpen(true);
        } else {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }} />

      {/* Main Container Hero Wrapper */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-[140px] md:pt-[160px] pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Column Content Area */}
          <div className="md:col-span-6 flex flex-col items-start text-left space-y-7 z-20">
            
            {/* Soft Green Available Pill Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/60 shadow-3xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-700 font-sans font-semibold text-xs tracking-wide">
                Available for projects
              </span>
            </motion.div>

            {/* Main Display Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-[#1A2540] font-sans font-black text-9xl sm:text-5xl lg:text-6.5xl tracking-tight leading-[1.05] max-w-xl"
            >
              We are the <span className="font-serif italic font-semibold text-[#FF6230] hover:text-[#ff794d] transition-colors duration-300">only</span> digital partner <span className="text-slate-400 font-black">you need.</span>
            </motion.h1>

            {/* Display Subheading details */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-slate-600 font-sans text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-md"
            >
              We help Tech Startups and Small Business B2B to standout in their market. High-performance design meets premium Web engineering.
            </motion.p>

            {/* Magnetic CTA button wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, type: "spring", stiffness: 100 }}
              className="pt-2"
            >
              <MagneticButton onClick={() => setDrawerOpen(true)}>
                Get in Touch
              </MagneticButton>
            </motion.div>

            {/* Overlapping circle avatars social proof group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-6 flex flex-wrap items-center gap-4 border-t border-slate-100 w-full max-w-md"
              id="social-proof-panel"
            >
              <div className="flex -space-x-3.5">
                <img
                  className="inline-block h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Creative director avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Technical lead avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Product engineer avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Marketing head avatar"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-slate-800 font-sans font-semibold text-xs sm:text-sm tracking-tight leading-none">
                  Trusted by <span className="text-[#FF6230]">+50</span> Customers
                </span>
                <span className="text-slate-400 font-inter text-[10px] sm:text-xs mt-0.5 font-medium leading-none">
                  They've hit their target - You're next
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column Scrolling Grid Module */}
          <div className="md:col-span-6 z-10 w-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
            >
              <ScrollingImagesGrid />
            </motion.div>
          </div>

        </div>
      </main>

      {/* Services and Accordions Viewport Section (Transition line at 780px mapped by SVG) */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ServicesSection />
      </motion.div>

      {/* Modern interactive process section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ProcessSection />
      </motion.div>

      {/* Styled outcomes case studies section with interactive modal */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <OutcomesSection />
      </motion.div>

      {/* Testimonials success stories segment */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <TestimonialsSection />
      </motion.div>

      {/* Interactive design subscription FAQs segment */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <FaqSection />
      </motion.div>

      {/* Footer Branding Showcase */}
      <motion.footer
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full bg-slate-50 border-t border-slate-100 py-12 px-6 md:px-12 lg:px-20 text-center" id="footer-branding">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M17 5L7 19" stroke="#FF6230" strokeWidth="4" strokeLinecap="round" />
                <path d="M7 5H17V15" stroke="#1A2540" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-slate-700 font-sans font-bold text-sm tracking-tight">
              Kompozith <span className="text-[#FF6230] font-serif italic font-semibold">Studio</span>
            </span>
          </div>

          <div className="text-slate-400 font-mono text-[11px] tracking-wide">
            © 2026 Kompozith Studio. All rights reserved. Deliberate interactive precision.
          </div>

          <div className="flex items-center gap-1 bg-white border border-slate-200/60 px-3 py-1.5 rounded-full shadow-3xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-slate-500 font-sans font-semibold text-[10px] tracking-wide uppercase">
              Secure Submission API
            </span>
          </div>
        </div>
      </motion.footer>

      {/* Sliding Slideover Contact Drawer Component */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop Blur Lockout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-[#1A2540]/40 backdrop-blur-xs z-50 cursor-pointer"
            />

            {/* Contact Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 p-7 md:p-9 flex flex-col justify-between overflow-y-auto border-l border-slate-100 text-left"
              id="contact-form-sidebar"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#FF6230]" />
                    <h3 className="text-[#1A2540] font-sans font-black text-xl tracking-tight">
                      Start Your Project
                    </h3>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors duration-200 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-slate-500 font-sans text-sm md:text-md mb-6 leading-relaxed">
                  Tell us about your venture. Our creative digital engineers will get back to you with custom strategies in less than 2 hours.
                </p>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center space-y-4 my-8"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h4 className="text-emerald-900 font-sans font-bold text-lg leading-tight">
                      Proposal Submitted!
                    </h4>
                    <p className="text-emerald-700 font-sans text-sm">
                      Thank you {formData.name || "friend"}. We have received your request and will contact you shortly on <strong>{formData.email}</strong>.
                    </p>
                  </motion.div>
                ) : (
                  /* Form Fields */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name input */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-slate-700 font-sans text-xs font-semibold uppercase tracking-wider">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your beautiful name"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#FF6230] focus:ring-1 focus:ring-[#FF6230] outline-none text-slate-800 text-sm font-medium transition-all"
                        />
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-slate-700 font-sans text-xs font-semibold uppercase tracking-wider">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#FF6230] focus:ring-1 focus:ring-[#FF6230] outline-none text-slate-800 text-sm font-medium transition-all"
                        />
                      </div>
                    </div>

                    {/* Budget radio groups */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-slate-700 font-sans text-xs font-semibold uppercase tracking-wider">
                        Estimated Budget Range
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { key: "small", label: "< $5k" },
                          { key: "medium", label: "$5k - $15k" },
                          { key: "large", label: "$15k+" },
                        ].map((b) => {
                          const isSelected = formData.budget === b.key;
                          return (
                            <button
                              key={b.key}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: b.key })}
                              className={`py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                                isSelected
                                  ? "bg-[#FF6230]/10 border-[#FF6230] text-[#FF6230]"
                                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              {b.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-slate-700 font-sans text-xs font-semibold uppercase tracking-wider">
                        Project Description
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you have in mind..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#FF6230] focus:ring-1 focus:ring-[#FF6230] outline-none text-slate-800 text-sm font-medium transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#FF6230] hover:bg-[#ff7548] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Strategy Inquiry
                    </button>

                  </form>
                )}
              </div>

              {/* Drawer Footer Metrics */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-slate-400 font-mono text-[10px]">
                <div className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[#FF6230]" />
                  <span>HQ: Europe London Time</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>NDAs Guaranteed</span>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
