import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-[#fbfbfc] dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="z-20 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Quality Assurance Enthusiast
          </div>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05] text-slate-900 dark:text-white">
            Hi, I'm <br />
            <span
              className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Kritisha.
            </span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-lg mb-12">
            I'm on a journey to become a QA Engineer—where clean code meets
            great user experience. Currently learning the art of breaking things
            (methodically, of course).
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              href="#"
              className="px-8 py-4 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20 flex items-center gap-2"
            >
              <span>Download CV</span>
              <span className="material-symbols-outlined text-md">
                download
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <span>Contact Me</span>
              <span className="material-symbols-outlined text-md">mail</span>
            </a>
          </div>
        </div>

        <div className="relative h-[480px] flex items-center justify-center">
          <div className="hidden dark:block absolute w-[470px] h-[470px] rounded-full bg-slate-700/75 blur-[95px]" />

          {/* Ambient Glows */}
          <div
            className="absolute w-[440px] h-[440px] bg-accent/45 dark:bg-accent/26 rounded-full blur-[105px] transition-transform duration-1000 ease-out"
            style={{
              transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
            }}
          ></div>
          <div
            className="absolute w-[300px] h-[300px] dark:w-[330px] dark:h-[330px] bg-primary/25 dark:bg-primary/25 rounded-full blur-[90px] top-1/2 left-1/2 dark:top-[58%] dark:left-[56%] transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            }}
          ></div>

          {/* Orbiting Rings + Sparkles */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
            }}
          >
            <div
              className="absolute left-1/2 top-1/2 w-[110px] h-[110px] rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent dark:from-primary/24 dark:via-accent/18 blur-2xl animate-pulse-slow"
              style={{
                transform: `translate(calc(-50% + ${mousePos.x * 30}px), calc(-50% + ${mousePos.y * 30}px))`,
              }}
            ></div>
            <div className="absolute left-1/2 top-1/2 w-[340px] h-[340px] -translate-x-1/2 -translate-y-1/2 border border-primary/20 rounded-full animate-orbit-slow"></div>
            <div className="absolute left-1/2 top-1/2 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 border border-accent/20 rounded-full animate-orbit-fast"></div>
            <div className="absolute left-1/2 top-1/2 w-[190px] h-[190px] -translate-x-1/2 -translate-y-1/2 border border-dashed border-primary/30 rounded-full animate-orbit-slower"></div>
            <span className="absolute left-[18%] top-[20%] w-2 h-2 rounded-full bg-accent/70 animate-twinkle"></span>
            <span className="absolute right-[14%] top-[28%] w-3 h-3 rounded-full bg-primary/60 animate-drift"></span>
            <span className="absolute left-[10%] bottom-[18%] w-2 h-2 rounded-full bg-accent/60 animate-drift delay-700"></span>
            <span className="absolute right-[18%] bottom-[22%] w-3 h-3 rounded-full bg-primary/50 animate-twinkle delay-500"></span>
            <span className="absolute left-[24%] bottom-[30%] w-4 h-1.5 rounded-full bg-accent/50 animate-tilt"></span>
          </div>

          <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center group">
            <svg
              viewBox="0 0 240 240"
              className="w-full h-full transition-all duration-500 ease-out"
              style={{
                transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)`,
              }}
            >
              <defs>
                <filter
                  id="fuzzy-texture"
                  x="-30%"
                  y="-30%"
                  width="160%"
                  height="160%"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.08"
                    numOctaves="4"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="2.2"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                  <feGaussianBlur stdDeviation="0.4" />
                </filter>
                <linearGradient id="eye-glow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#222" />
                  <stop offset="100%" stopColor="#000" />
                </linearGradient>
              </defs>

              {/* Main Body Group */}
              <g filter="url(#fuzzy-texture)" className="animate-float-gentle">
                {/* Waving Arm (Viewer's Left - character's right) */}
                <g
                  className="panda-wave"
                  style={{
                    transformOrigin: "85px 168px",
                  }}
                >
                  <path
                    d="M80,158 
                    C60,148 45,113 60,98 
                    C80,88 85,118 90,120 
                    C94,140 90,163 88,166"
                    fill="black"
                  />
                </g>

                {/* Body - Round sitting belly */}
                <ellipse
                  cx="120"
                  cy="170"
                  rx="42"
                  ry="48"
                  fill="white"
                  className="dark:fill-slate-100 shadow-inner"
                />

                {/* Nubby Legs */}
                <circle cx="100" cy="210" r="14" fill="black" />
                <circle cx="140" cy="210" r="14" fill="black" />

                {/* Right Arm (Viewer's Right) - Tucked close */}
                <path d="M150,140 Q175,155 160,195" fill="black" />

                {/* Black shoulder/chest band area (joining arms) */}
                <path
                  d="M85,145 Q120,130 155,145 L155,160 Q120,150 85,160 Z"
                  fill="black"
                />

                {/* Head - Small and Rounded */}
                <g
                  style={{
                    transformOrigin: "120px 120px",
                    transform: `rotate(${mousePos.x * 4}deg)`,
                  }}
                >
                  {/* Ears */}
                  <circle cx="90" cy="72" r="15" fill="black" />
                  <circle cx="150" cy="72" r="15" fill="black" />

                  {/* Head Base */}
                  <path
                    d="M75,120 C75,85 90,70 120,70 C150,70 165,85 165,120 C165,150 150,165 120,165 C90,165 75,150 75,120"
                    fill="white"
                    className="dark:fill-slate-100"
                  />

                  {/* Features (Parallax within head - moving more for depth) */}
                  <g
                    style={{
                      transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 8}px)`,
                    }}
                  >
                    {/* Dark Eye Patches */}
                    <ellipse
                      cx="102"
                      cy="122"
                      rx="14"
                      ry="17"
                      fill="black"
                      transform="rotate(-15, 102, 122)"
                    />
                    <ellipse
                      cx="138"
                      cy="122"
                      rx="14"
                      ry="17"
                      fill="black"
                      transform="rotate(15, 138, 122)"
                    />

                    {/* Sparkly Eyes */}
                    <g>
                      <circle cx="105" cy="124" r="7" fill="url(#eye-glow)" />
                      <circle cx="108" cy="120" r="3" fill="white" />
                      <circle
                        cx="103"
                        cy="128"
                        r="1.5"
                        fill="white"
                        opacity="0.6"
                      />
                      <circle cx="135" cy="124" r="7" fill="url(#eye-glow)" />
                      <circle cx="132" cy="120" r="3" fill="white" />
                      <circle
                        cx="137"
                        cy="128"
                        r="1.5"
                        fill="white"
                        opacity="0.6"
                      />
                    </g>

                    {/* Blushing Cheeks */}
                    <circle
                      cx="88"
                      cy="140"
                      r="10"
                      fill="#fecaca"
                      opacity="0.8"
                      className="animate-pulse"
                    />
                    <circle
                      cx="152"
                      cy="140"
                      r="10"
                      fill="#fecaca"
                      opacity="0.8"
                      className="animate-pulse"
                    />

                    {/* Nose & Mouth */}
                    <g transform="translate(120, 142)">
                      <path d="M-2,0 Q0,-3 2,0 L0,3 Z" fill="black" />
                      <path
                        d="M-7,5 Q-3,11 0,5 Q3,11 7,5"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>
                </g>
              </g>

              {/* Ground Shadow */}
              <ellipse
                cx="120"
                cy="218"
                rx="55"
                ry="6"
                fill="black"
                opacity="0.08"
              />
            </svg>

            {/* Playful Floating Badges */}
            <div
              className="absolute -top-12 -right-4 px-6 py-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-xl text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100 border-2 border-primary/20 animate-bounce transition-all hover:scale-110"
              style={{ animationDuration: "4s" }}
            >
              Detail-Oriented
            </div>
            <div
              className="absolute top-20 -left-20 px-5 py-2.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-xl text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100 border-2 border-accent/30 animate-bounce transition-all hover:scale-110"
              style={{ animationDuration: "4.8s", animationDelay: "0.6s" }}
            >
              Power Nap
            </div>
            <div
              className="absolute -bottom-10 -left-10 px-6 py-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-xl text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100 border-2 border-accent/40 animate-bounce transition-all hover:scale-110"
              style={{ animationDuration: "5s", animationDelay: "1s" }}
            >
              Bug Hunter
            </div>

            <div
              className="absolute -bottom-3 right-0 px-5 py-2.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-xl text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100 border-2 border-accent/35 animate-bounce transition-all hover:scale-110"
              style={{ animationDuration: "6.2s", animationDelay: "1.4s" }}
            >
              Fast Learner
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-gentle {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(-10deg) translateY(-12px) translateX(12px); }
          100% { transform: rotate(0deg); }
        }
        @keyframes pandaWave {
          0%   { transform: rotate(0deg); }
          15%  { transform: rotate(-18deg); }
          30%  { transform: rotate(12deg); }
          45%  { transform: rotate(-14deg); }
          60%  { transform: rotate(10deg); }
          75%  { transform: rotate(-6deg); }
          100% { transform: rotate(0deg); }
        }

        .panda-wave {
          animation: none;
        }

        .group:hover .panda-wave {
          animation: pandaWave 3s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }


        @keyframes orbit-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orbit-fast {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes orbit-slower {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.6); opacity: 1; }
        }
        @keyframes drift {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-12px); }
        }
        @keyframes tilt {
          0% { transform: rotate(-8deg) translateY(0px); }
          100% { transform: rotate(8deg) translateY(-6px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0.9; }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite alternate;
        }
        .animate-orbit-slow {
          animation: orbit-slow 18s linear infinite;
        }
        .animate-orbit-fast {
          animation: orbit-fast 12s linear infinite;
        }
        .animate-orbit-slower {
          animation: orbit-slower 26s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 2.4s ease-in-out infinite;
        }
        .animate-drift {
          animation: drift 3.5s ease-in-out infinite alternate;
        }
        .animate-tilt {
          animation: tilt 3.2s ease-in-out infinite alternate;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4.5s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(70px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
