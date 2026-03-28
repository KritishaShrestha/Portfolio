import React, { useEffect, useMemo, useRef, useState } from "react";

interface Skill {
  name: string;
  icon: string;
  color: string;
  isColored?: boolean;
}

const skills: Skill[] = [
  {
    name: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    color: "#0052CC",
  },
  // {
  //   name: "Selenium",
  //   icon: "https://cdn.simpleicons.org/selenium/43B02A",
  //   color: "#43B02A",
  //   isColored: true,
  // },
  {
    name: "Excel",
    icon: "https://img.icons8.com/color/96/000000/microsoft-excel-2019.png",
    color: "#217346",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  {
    name: ".NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    color: "#512BD4",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777BB4",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#181717",
  },
  {
    name: "Jupyter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    color: "#F37626",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
];

const professionalSkills = [
  {
    category: "QA Methodologies & Testing",
    skills: [
      "Agile & Scrum",
      "SDLC",
      "STLC",
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
    ],
  },
  {
    category: "Test Management",
    skills: [
      "Test Planning",
      "Defect Tracking",
      "Test Case Design",
      "Test Strategies",
      "Bug Triage",
      "Traceability Matrix",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Analytical Thinking",
      "Attention to Detail",
      "Effective Communication",
      "Problem Solving",
      "Collaboration",
      "Adaptability",
    ],
  },
];

// Don't duplicate skills, so there are 12 items. This creates more spacing (30 degrees each)
const allSkills = [...skills];

const normalizeOffset = (value: number) => {
  const normalized = value % 1;
  return normalized < 0 ? normalized + 1 : normalized;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tools" | "skills">("tools");
  const [orbitOffset, setOrbitOffset] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  const orbitAreaRef = useRef<HTMLDivElement | null>(null);
  const [orbitAreaSize, setOrbitAreaSize] = useState({ width: 0, height: 0 });

  const isPaused = hoveredSkill !== null || isDragging;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let frame = 0;
    let lastTick = performance.now();

    const animate = (now: number) => {
      const delta = now - lastTick;
      lastTick = now;
      if (!isPaused) {
        setOrbitOffset((prev) => normalizeOffset(prev - delta * 0.00004));
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused, prefersReducedMotion]);

  useEffect(() => {
    const node = orbitAreaRef.current;
    if (!node) return;
    const updateBounds = () => {
      const rect = node.getBoundingClientRect();
      setOrbitAreaSize({ width: rect.width, height: rect.height });
    };
    updateBounds();
    const observer = new ResizeObserver(updateBounds);
    observer.observe(node);
    window.addEventListener("resize", updateBounds);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartOffset.current = orbitOffset;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    // Map pixel drag to circle rotation offset (1 full rotation = 1 unit)
    const width = orbitAreaSize.width || 1000;
    setOrbitOffset(
      normalizeOffset(dragStartOffset.current + deltaX / (width * 1.5)),
    );
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const effectiveWidth = orbitAreaSize.width || 960;
  const effectiveHeight = orbitAreaSize.height || 400;

  const isMobile = effectiveWidth < 640;
  const isTablet = effectiveWidth < 1024;

  const iconSize = clamp(
    effectiveWidth * (isMobile ? 0.07 : isTablet ? 0.06 : 0.05),
    isMobile ? 28 : isTablet ? 34 : 40,
    isMobile ? 44 : isTablet ? 56 : 72,
  );

  // Make the arc larger so it's less congested and the curve is a bit flatter
  const radius = clamp(
    effectiveWidth * (isMobile ? 0.56 : 0.4),
    isMobile ? 140 : isTablet ? 130 : 150,
    isMobile ? 430 : isTablet ? 500 : 800,
  );

  // Center of the circle pushed down so only the top of the arc is visible
  const centerX = effectiveWidth / 2;
  let centerY = effectiveHeight + radius * (isMobile ? 0.02 : 0.2);

  // Ensure the top of the arc doesn't overflow the container
  const minTop = iconSize * 0.6;
  if (centerY - radius < minTop) {
    centerY = radius + minTop;
  }

  const orbitItems = useMemo(
    () =>
      allSkills.map((skill, index) => {
        const progress = normalizeOffset(
          index / allSkills.length + orbitOffset,
        );
        // Angle goes from PI to 3*PI so the top half is between PI and 2PI
        const angle = Math.PI + progress * Math.PI * 2;

        return {
          ...skill,
          index,
          angle,
          left: centerX + radius * Math.cos(angle),
          top: centerY + radius * Math.sin(angle),
          // Visible if we are reasonably above the bottom edge mapping to the center
          isVisible: Math.sin(angle) <= 0.3,
        };
      }),
    [allSkills.length, centerX, centerY, orbitOffset, radius],
  );

  const activeSkill = useMemo(() => {
    if (orbitItems.length === 0) return null;
    if (hoveredSkill !== null) return orbitItems[hoveredSkill];
    let closest = orbitItems[0];
    let minDiff = Infinity;
    for (const item of orbitItems) {
      if (!item.isVisible) continue;
      // angle is between PI and 3PI. Top of arc is 1.5 * Math.PI
      const diff = Math.abs(item.angle - 1.5 * Math.PI);
      if (diff < minDiff) {
        minDiff = diff;
        closest = item;
      }
    }
    return closest;
  }, [hoveredSkill, orbitItems]);

  return (
    <section
      id="skills"
      className="min-h-[100svh] flex flex-col justify-center py-8 sm:py-12 px-4 md:px-6 bg-white dark:bg-slate-900/50 transition-colors relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full mt-6 sm:mt-16 md:mt-16 mb-4 sm:mb-6 flex-shrink-0 z-20 relative px-4 sm:px-6 md:px-10">
        <div className="relative flex flex-col items-center justify-center">
          <div className="text-left self-start ml-0 md:ml-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.1]">
              Tools and{" "}
              <span className="italic font-light text-slate-400">Skills</span>{" "}
              <br />
              engineered for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                perfection.
              </span>
            </h2>
          </div>

          {/* Toggle Switch */}
          <div className="mt-4 md:mt-0 md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2">
            <div className="relative flex items-center p-1 bg-slate-100 dark:bg-slate-800/80 rounded-full border border-slate-200 dark:border-slate-700/50 shadow-inner scale-85 sm:scale-95 md:scale-100 origin-right">
              <button
                onClick={() => setActiveTab("tools")}
                className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === "tools"
                    ? "text-white drop-shadow-md"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                Tools
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === "skills"
                    ? "text-white drop-shadow-md"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                Skills
              </button>
              {/* Sliding background pill */}
              <div
                className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-primary to-accent rounded-full transition-transform duration-500 shadow-lg"
                style={{
                  transform:
                    activeTab === "tools"
                      ? "translateX(0)"
                      : "translateX(100%)",
                  left: "6px",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative grid grid-cols-1 grid-rows-1 mt-6 sm:mt-12 md:mt-16">
        {/* Tools Orbit View */}
        <div
          className={`col-start-1 row-start-1 w-full transition-all duration-700 ease-out flex flex-col items-center justify-center ${
            activeTab === "tools"
              ? "opacity-100 z-10 translate-y-0 pointer-events-auto"
              : "opacity-0 -z-10 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="w-full flex items-end justify-center">
            <div
              ref={orbitAreaRef}
              className="w-full h-[35vh] sm:h-[40vh] min-h-[250px] sm:min-h-[320px] md:min-h-[380px] relative overflow-hidden touch-none cursor-grab active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              {orbitItems.map((item, idx) => {
                if (!item.isVisible) return null;
                const isHovered = hoveredSkill === idx;

                // In the image, the icons are upright (no rotation) and form a beautiful arc
                // When hovered, the item scales up and glows
                return (
                  <div
                    key={`${item.name}-${idx}`}
                    onMouseEnter={() => setHoveredSkill(idx)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="absolute flex items-center justify-center pointer-events-auto transition-transform duration-300 ease-out"
                    style={{
                      left: `${item.left}px`,
                      top: `${item.top}px`,
                      transform: `translate(-50%, -50%) scale(${isHovered ? 1.3 : 1})`,
                      zIndex: isHovered ? 50 : 10,
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      draggable={false}
                      className="object-contain transition-all duration-300"
                      style={{
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                        filter: isHovered
                          ? `drop-shadow(0 0 20px ${item.color}88)`
                          : "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                      }}
                    />
                  </div>
                );
              })}

              {/* Active Skill Center Display */}
              {activeSkill && (
                <div
                  className="absolute pointer-events-none flex flex-col items-center justify-center transition-all duration-500 ease-out z-0"
                  style={{
                    left: `${centerX}px`,
                    // Position it visually inside the arc
                    top: `${centerY - radius + radius * 0.5}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="relative flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-2xl backdrop-blur-sm bg-white/30 dark:bg-slate-900/40"
                    style={{
                      width: `${clamp(radius * 0.4, isMobile ? 100 : 130, isMobile ? 180 : 320)}px`,
                      height: `${clamp(radius * 0.4, isMobile ? 100 : 130, isMobile ? 180 : 320)}px`,
                      boxShadow: `0 0 60px ${activeSkill.color}33, inset 0 0 30px ${activeSkill.color}22`,
                    }}
                  >
                    <div
                      className="absolute inset-0 blur-3xl transition-colors duration-500 rounded-full"
                      style={{
                        backgroundColor: activeSkill.color,
                        opacity: 0.15,
                      }}
                    />
                    <img
                      src={activeSkill.icon}
                      alt={activeSkill.name}
                      className="w-1/3 h-1/3 object-contain transition-all duration-500 drop-shadow-xl z-10"
                      style={{
                        filter: `drop-shadow(0 0 20px ${activeSkill.color}88)`,
                      }}
                    />
                    <h3 className="mt-2 sm:mt-4 text-lg sm:text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500 z-10">
                      {activeSkill.name}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Skills Grid View */}
        <div
          className={`col-start-1 row-start-1 w-full transition-all duration-700 ease-out px-4 sm:px-6 pt-0 pb-4 ${
            activeTab === "skills"
              ? "opacity-100 z-10 translate-y-0 pointer-events-auto"
              : "opacity-0 -z-10 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto w-full items-stretch">
            {professionalSkills.map((category, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden h-full min-h-[21rem] sm:min-h-[22.5rem] flex flex-col p-5 sm:p-6 rounded-2xl border border-slate-300/70 dark:border-slate-700/80 bg-[#f2f2f2] dark:bg-slate-900 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.45)] dark:shadow-[0_16px_34px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 group hover:-translate-y-px hover:shadow-[0_20px_36px_-20px_rgba(15,23,42,0.5)] ${
                  activeTab === "skills"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay:
                    activeTab === "skills" ? `${idx * 70}ms` : "0ms",
                }}
              >
                <div className="absolute inset-0 rounded-2xl border border-white/40 dark:border-white/10 pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_45%)] pointer-events-none" />
                <div className="absolute inset-x-3 top-0 h-1.5 rounded-b-full bg-gradient-to-r from-primary/35 via-accent to-primary/35 opacity-85" />
                <div className="flex items-start gap-3 mb-8">
                  <div className="mt-0.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/20 shadow-inner group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(var(--primary),0.5)] group-hover:animate-pulse" />
                  </div>
                  <div className="min-w-0 min-h-[3.25rem] sm:min-h-[3.75rem] flex items-start">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                      {category.category}
                    </h3>
                  </div>
                </div>
                <ul className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 content-start">
                  {category.skills.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="min-h-[2.6rem] sm:min-h-[2.9rem] flex items-center gap-2 px-2 py-2 sm:px-2.5 sm:py-2.5 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl bg-slate-100/80 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white dark:hover:text-white hover:border-transparent transition-all duration-300 cursor-default shadow-sm hover:shadow-sm hover:-translate-y-px"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                      <span className="leading-snug text-left">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
