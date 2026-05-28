import { useState, useEffect } from "react";
import logoKompozith from "../assets/images/logo-kompozith.svg";
import { motion } from "motion/react";

interface HeaderProps {
  onNavClick?: (section: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [activeTab, setActiveTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", id: "hero-top" },
    { name: "Services", id: "services-section" },
    { name: "Case Studies", id: "case-studies" },
    { name: "About Us", id: "about-us" },
  ];

  const handleTabClick = (name: string, id: string) => {
    setActiveTab(name);
    if (onNavClick) {
      onNavClick(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };


  return (
    <header
      id="main-app-header"
      //className={`fixed top-0 left-0 w-full z-50 px-4 md:px-12 lg:px-40 flex items-center justify-between h-[75px] md:h-[80px] before:absolute before:inset-0 before:-z-10 before:backdrop-blur-[20px] before:[mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.7)_30%,transparent_100%)] border-b border-white/[0.03]`}
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-12 lg:[padding-left:150px] lg:[padding-right:150px] flex items-center justify-between h-[75px] md:h-[80px] before:absolute before:inset-0 before:-z-10 before:backdrop-blur-xl before:[mask-image:linear-gradient(to_bottom,black_0%,black_25%,transparent_100%)]`}
    >
      {/* Brand Logo Group */}
      <div className="flex items-center" id="brand-logo-container">
        <img
          src={logoKompozith}
          alt="Kompozith Studio"
          className="h-[46px] w-auto"
        />
      </div>

      {/* Responsive Capsule Navigation bar */}
      <div className="flex items-center gap-4" id="navigation-bar">
        {/* Floating Capsule pill list */}
        <nav className="hidden md:flex items-center p-1.5 bg-[#1F2B48] rounded-full shadow-[0_4px_16px_rgba(26,37,64,0.15)] backdrop-blur-md">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <li key={item.name} className="relative">
                  <button
                    onClick={() => handleTabClick(item.name, item.id)}
                    className={`px-4.5 py-2 rounded-full cursor-pointer transition-colors duration-200 relative z-10 ${
                      isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-[#354875] rounded-full z-0 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </li>
              );
            })}

            {/* In-Navbar "Get in Touch" Orange Pill */}
            <li>
              <button
                onClick={() => handleTabClick("Contact", "contact")}
                className="ml-1 px-4.5 py-2 rounded-full cursor-pointer bg-[#FF6230] text-white hover:bg-[#ff7548] active:scale-95 transition-all duration-200 shadow-sm font-semibold text-xs md:text-sm"
              >
                Get in Touch
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation fallback / trigger */}
        <button
          onClick={() => {
            const el = document.getElementById("services-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="md:hidden px-4.5 py-2 rounded-full bg-[#1F2B48] text-white text-xs font-semibold shadow-sm flex items-center gap-1.5 cursor-pointer"
        >
          Explore Work
        </button>
      </div>
    </header>
  );
}
