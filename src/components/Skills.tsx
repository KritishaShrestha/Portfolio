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
  {
    name: "Selenium",
    icon: "https://cdn.simpleicons.org/selenium/43B02A",
    color: "#43B02A",
    isColored: true,
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

// Don't duplicate skills, so there are 12 items. This creates more spacing (30 degrees each)
const allSkills = [...skills];

const normalizeOffset = (value: number) => {
  const normalized = value % 1;
  return normalized < 0 ? normalized + 1 : normalized;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const Skills: React.FC = () => {
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
    setOrbitOffset(normalizeOffset(dragStartOffset.current + deltaX / (width * 1.5)));
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
    isMobile ? 44 : isTablet ? 56 : 72
  );

  // Make the arc larger so it's less congested and the curve is a bit flatter
  const radius = clamp(
    effectiveWidth * (isMobile ? 0.45 : 0.4),
    isMobile ? 110 : isTablet ? 130 : 150,
    isMobile ? 340 : isTablet ? 500 : 800
  );

  // Center of the circle pushed down so only the top of the arc is visible
  const centerX = effectiveWidth / 2;
  let centerY = effectiveHeight + radius * (isMobile ? 0.1 : 0.2);

  // Ensure the top of the arc doesn't overflow the container
  const minTop = iconSize * 0.6;
  if (centerY - radius < minTop) {
    centerY = radius + minTop;
  }

  const orbitItems = useMemo(
    () =>
      allSkills.map((skill, index) => {
        const progress = normalizeOffset(index / allSkills.length + orbitOffset);
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
    [allSkills.length, centerX, centerY, orbitOffset, radius]
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
      className="min-h-[100svh] flex flex-col pt-16 sm:pt-20 pb-10 px-4 md:px-6 bg-white dark:bg-slate-900/50 transition-colors relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full my-6 sm:my-10 flex-shrink-0">
        <div className="mb-4 sm:mb-8 px-2 md:px-6 text-center">
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
      </div>

      <div className="flex-grow w-full max-w-6xl mx-auto relative flex items-end justify-center">
        <div
          ref={orbitAreaRef}
          className="w-full h-[45vh] sm:h-[50vh] min-h-[280px] sm:min-h-[360px] md:min-h-[400px] relative overflow-hidden touch-none cursor-grab active:cursor-grabbing"
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
                  style={{ backgroundColor: activeSkill.color, opacity: 0.15 }}
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
    </section>
  );
};

export default Skills;
