import React, { useState } from "react";

const About: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);

  return (
    <section
      id="about"
      className="min-h-max md:min-h-[100svh] flex items-center pt-16 sm:pt-24 pb-12 bg-[#f2f2f2] dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div
            className="relative group transition-all duration-1000 max-w-[16rem] sm:max-w-sm mx-auto"
            onMouseEnter={() => {
              setIsHovered(true);
              setHasHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="relative z-10 w-full aspect-[4/5] overflow-hidden transition-all duration-1000 hover:scale-[1.03]"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                animation: "morph-about 12s ease-in-out infinite alternate",
              }}
            >
              <img
                alt="Kritisha"
                className={`w-full h-full object-cover transition-all duration-[1.5s] scale-110 group-hover:scale-100 ${hasHovered ? "grayscale-0" : "grayscale"}`}
                src="/profile.jpg"
              />
            </div>
            <div className="absolute -inset-6 border-2 border-accent/50 rounded-full animate-spin-slow z-0 opacity-80 pointer-events-none"></div>
            <div className="absolute -inset-10 border border-primary/30 rounded-full animate-spin-reverse-slow z-0 opacity-70 pointer-events-none"></div>
          </div>
          <div>
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1]">
                Testing with{" "}
                <span className="italic font-light text-slate-400">soul,</span>{" "}
                <br />
                results with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  precision.
                </span>
              </h2>
              <br />
            </div>
            <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed text-justify">
              <p>
                I’m a motivated QA enthusiast who enjoys analyzing applications,
                breaking workflows, and ensuring features work as intended. I’m
                continuously learning testing methodologies and tools to
                strengthen my skills in software quality assurance.
              </p>

              <p>
                I’m passionate about contributing to the development of
                high-quality software and am excited to grow as a QA Engineer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes morph-about {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%; }
          100% { border-radius: 70% 30% 30% 70% / 70% 30% 70% 30%; }
        }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse-slow { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .animate-spin-reverse-slow { animation: spin-reverse-slow 30s linear infinite; }
      `}</style>
    </section>
  );
};

export default About;
