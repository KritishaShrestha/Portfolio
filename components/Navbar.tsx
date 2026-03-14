import React, { useState, useEffect } from "react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = ["about", "skills", "projects"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "contact"];

    const handleActiveSection = () => {
      const scrollAnchor = window.scrollY + 180;
      let currentSection = "about";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollAnchor) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleActiveSection();
    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-8"}`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${isScrolled ? "max-w-5xl" : "max-w-7xl"}`}
      >
        <div
          className={`
          relative flex items-center justify-between px-8 h-16 rounded-[24px] transition-all duration-500
          ${
            isScrolled
              ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-xl shadow-slate-200/20 dark:shadow-black/20 border border-white/20 dark:border-slate-800"
              : "bg-transparent border-transparent"
          }
        `}
        >
          <div className="flex items-center">
            <span
              className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(129,170,222,0.28)]"
              style={{
                fontFamily: '"Dancing Script", cursive',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 1px 0 rgba(15, 23, 42, 0.12)",
              }}
            >
              Kritisha
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`relative text-md font-medium transition-colors group ${
                  activeSection === item
                    ? "text-primary dark:text-primary"
                    : "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                    activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}

            <a
              href="#contact"
              className="text-md font-medium px-6 py-2 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Contact</span>
            </a>

            <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700"></div>

            <button
              onClick={toggleDarkMode}
              className="relative p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-xl">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-400"
            >
              <span className="material-symbols-outlined">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-900 dark:text-white"
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? "close" : "menu_open"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
        md:hidden fixed inset-0 z-[-1] bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl transition-all duration-500
        ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
      `}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-bold tracking-tighter transition-colors ${
                activeSection === item
                  ? "text-primary"
                  : "text-slate-900 dark:text-white hover:text-primary"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-bold px-8 py-3 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
          >
            <span>Contact</span>
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
