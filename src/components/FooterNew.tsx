import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Globe,
  Compass,
  Sparkles,
  ChevronDown,
  ExternalLink,
  MessageSquare,
  Copy,
  Check
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrganicGradient from "./OrganicGradient";
import Globe3D from "./Globe3D";
import Newsletter from "./Newsletter";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Custom SVG for X (formerly Twitter) icon for absolute fidelity
function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom SVG for Behance / Layout / Dribbble alternative to look exactly like the reference icon
function DesignIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
      <path d="M3 15h6" />
      <path d="M15 3v18" />
      <path d="M15 9h6" />
    </svg>
  );
}

export default function FooterNew() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    // Set up high-fidelity GSAP ScrollTrigger entry animations for footer columns
    const ctx = gsap.context(() => {
      // 1. First row items (Branding mission, Vertical text logo, Important column, Legal column)
      gsap.fromTo(
        ["#footer-branding-column", "#vertical-kompozith-logo", "#important-links-col", "#legal-links-col"],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#footer-section",
            start: "top 85%", // starts when the top of the footer hits 85% of viewport
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Second row items (Newsletter block, Contact block, Dotted interactive Globe wrapper)
      gsap.fromTo(
        ["#newsletter-block", "#contact-details-block", "#globe-3d-wrapper"],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#newsletter-block",
            start: "top 95%", // starts when the newsletter section hits 95% of viewport
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Bottom Row items (Follow us socials & Copyright note)
      gsap.fromTo(
        "#footer-bottom-row",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#footer-bottom-row",
            start: "top 98%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <footer
      id="footer-section"
      ref={footerRef}
      className="relative bg-[#FAFBFD] border-t border-slate-100 pt-32 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden text-slate-800 font-sans selection:bg-[#ff4e17] selection:text-white"
    >
      {/* Organic Moving Gradient Background (GSAP animated SVG) */}
      <OrganicGradient />

      {/* Main Footer Container with relative z-index to sit on top of gradient */}
      <div className="relative max-w-7xl mx-auto z-10 space-y-16">

        {/* ================= FIRST CONTENT ROW ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Column (Brand Mission & Call to action) */}
          <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-8" id="footer-branding-column">
            <h2 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]">
              Elevate your brand with us.
            </h2>

            {/* Circular interactive arrow button & "Book a call" action */}
            <div className="inline-flex items-center gap-4 group cursor-pointer" id="book-a-call-btn">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white group-hover:bg-[#ff4e17] group-hover:border-[#ff4e17] transition-all duration-500 transform group-hover:scale-105 shadow-2xs">
                <ArrowUpRight className="w-5 h-5 text-slate-700 group-hover:text-white transition-all duration-500 group-hover:rotate-45" />
              </div>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#ff4e17] group-hover:text-slate-900 transition-colors duration-300 underline underline-offset-8 decoration-2 decoration-[#ff4e17]"
              >
                Book a call
              </a>
            </div>
          </div>

          {/* Middle Column (flanking vertical borders) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center self-stretch relative px-4">
            {/* Flanking Vertical Line Right */}
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-slate-200 via-slate-100 to-transparent" />
          </div>

          {/* Mobile / Tablet vertical separator (equivalent of flanking borders on small screens) */}
          <div className="block lg:hidden w-full h-[1px] bg-gradient-to-r from-slate-200 via-slate-100 to-transparent my-4" />

          {/* Newsletter Subscription Block (Right Side of First Row) */}
          <div className="lg:col-span-5 flex flex-col justify-start pl-0 lg:pl-12">
            <Newsletter />
          </div>

        </div>

        {/* Dotted / Dashed Horizontal Separator */}
        <div className="border-t border-dashed border-slate-200 w-full pt-12" />

        {/* ================= SECOND CONTENT ROW ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Column (Important and Legal Links list) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">

            {/* "Important" Link Category */}
            <div className="space-y-6" id="important-links-col">
              <h4 className="font-display font-medium text-slate-900 text-lg tracking-tight">
                Important
              </h4>
              <ul className="space-y-4 text-sm">
                {[
                  { label: "Services", href: "#services" },
                  { label: "Portfolio", href: "#portfolio" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "About", href: "#about" },
                  { label: "Reviews", href: "#reviews" }
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-[#ff4e17] transition-all duration-300 flex items-center gap-1 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e17] scale-0 group-hover/item:scale-100 transition-transform duration-300" />
                      <span className="group-hover/item:translate-x-1.5 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* "Legal" Link Category */}
            <div className="space-y-6" id="legal-links-col">
              <h4 className="font-display font-medium text-slate-900 text-lg tracking-tight">
                Legal
              </h4>
              <ul className="space-y-4 text-sm">
                {[
                  { label: "Terms & conditions", href: "#terms" },
                  { label: "Privacy policy", href: "#privacy" },
                  { label: "Contact us", href: "#contact" }
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-[#ff4e17] transition-all duration-300 flex items-center gap-1 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e17] scale-0 group-hover/item:scale-100 transition-transform duration-300" />
                      <span className="group-hover/item:translate-x-1.5 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Middle Column ("Get in touch" Contact Information Block) */}
          <div className="lg:col-span-4 space-y-5" id="contact-details-block">
            <div>
              <h3 className="font-display font-medium text-slate-900 text-lg tracking-tight">
                Get in touch
              </h3>
              <p className="text-slate-600 text-sm font-light mt-1">
                We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              {/* Email Address Link */}
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 p-1.5 rounded bg-white border border-slate-200 text-slate-500 group-hover:text-[#ff4e17] group-hover:border-[#ff4e17]/30 transition-colors shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Email Address</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:hello@kompozith.com"
                      className="font-light text-slate-800 hover:text-[#ff4e17] transition-colors hover:underline underline-offset-4"
                    >
                      hello@kompozith.com
                    </a>
                    <button
                      onClick={() => copyToClipboard("hello@kompozith.com", "email")}
                      className="text-slate-400 hover:text-slate-600 p-1"
                      title="Copy to clipboard"
                    >
                      {copiedText === "email" ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Telephone Number Link */}
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 p-1.5 rounded bg-white border border-slate-200 text-slate-500 group-hover:text-[#ff4e17] group-hover:border-[#ff4e17]/30 transition-colors shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Phone Support</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+15551234567"
                      className="font-light text-slate-800 hover:text-[#ff4e17] transition-colors hover:underline underline-offset-4"
                    >
                      +1 (555) 123-4567
                    </a>
                    <button
                      onClick={() => copyToClipboard("+1 (555) 123-4567", "phone")}
                      className="text-slate-400 hover:text-slate-600 p-1"
                      title="Copy to clipboard"
                    >
                      {copiedText === "phone" ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Physical Location Address */}
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 p-1.5 rounded bg-white border border-slate-200 text-slate-500 group-hover:text-[#ff4e17] group-hover:border-[#ff4e17]/30 transition-colors shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Physical Address</span>
                  <p className="font-light text-slate-600 leading-relaxed">
                    123 Design Street,<br />Creative City, CA 90210
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Rotating 3D Globe with dynamic hover markers) */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <Globe3D />
          </div>

        </div>

        {/* Dotted / Dashed Horizontal Separator */}
        <div className="border-t border-dashed border-slate-200 w-full pt-8" />

        {/* ================= THIRD CONTENT ROW (Follow Us + Copyright) ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-2 text-xs text-slate-500" id="footer-bottom-row">

          {/* Follow Us and Social Circle Buttons */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <span className="font-display font-medium text-slate-800 text-sm">
              Follow us
            </span>
            <div className="flex items-center gap-2.5">
              {[
                { icon: <XIcon className="w-3.5 h-3.5" />, href: "https://twitter.com", name: "X (Twitter)" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com", name: "Instagram" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com", name: "LinkedIn" },
                { icon: <Globe className="w-4 h-4" />, href: "https://kompozith.com", name: "Website" },
                { icon: <DesignIcon className="w-4 h-4" />, href: "https://figma.com", name: "Figma" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center bg-white text-slate-500 hover:text-white hover:border-[#ff4e17] hover:bg-[#ff4e17] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xs"
                  aria-label={`Visit our ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright Note */}
          <div className="font-sans font-light tracking-wide text-slate-500 text-center sm:text-right w-full sm:w-auto">
            Copyright © 2024 - All rights reserved
          </div>

        </div>

      </div>
    </footer>
  );;
}
