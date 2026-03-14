import React, { useState, useRef } from "react";

interface Skill {
  name: string;
  icon: string;
  color: string; // Brand hex color
  isColored?: boolean;
  baseShape: string;
  hoverShape: string;
}

const skills: Skill[] = [
  {
    name: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    color: "#0052CC",
    baseShape: "70% 30% 30% 70% / 60% 40% 60% 40%",
    hoverShape: "30% 70% 70% 30% / 40% 60% 40% 60%",
  },
  {
    name: "Selenium",
    icon: "https://cdn.simpleicons.org/selenium/43B02A",
    color: "#43B02A",
    isColored: true,
    baseShape: "30% 70% 70% 30% / 30% 30% 70% 70%",
    hoverShape: "70% 30% 30% 70% / 70% 70% 30% 30%",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
    baseShape: "50% 50% 20% 80% / 25% 80% 20% 75%",
    hoverShape: "20% 80% 50% 50% / 80% 25% 75% 20%",
  },
  {
    name: ".NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    color: "#512BD4",
    baseShape: "80% 20% 50% 50% / 50% 50% 80% 20%",
    hoverShape: "50% 50% 80% 20% / 80% 20% 50% 50%",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777BB4",
    baseShape: "40% 60% 40% 60% / 70% 30% 70% 30%",
    hoverShape: "60% 40% 60% 40% / 30% 70% 30% 70%",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1",
    baseShape: "60% 40% 80% 20% / 20% 80% 40% 60%",
    hoverShape: "40% 60% 20% 80% / 80% 20% 60% 40%",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#181717",
    baseShape: "30% 70% 40% 60% / 50% 40% 60% 50%",
    hoverShape: "70% 30% 60% 40% / 40% 50% 50% 60%",
  },
  {
    name: "Jupyter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    color: "#F37626",
    baseShape: "70% 30% 60% 40% / 40% 60% 30% 70%",
    hoverShape: "30% 70% 40% 60% / 60% 40% 70% 30%",
  },
];

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -25;
    setTilt({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const glowColor = skill.color + "44"; // ~25% alpha
  const bloomColor = skill.color + "22"; // ~13% alpha

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000 cursor-pointer flex-shrink-0 mx-4 py-8"
      style={{ zIndex: isHovered ? 50 : 1 }}
    >
      {/* Dynamic Background Bloom */}
      <div
        className="absolute inset-0 transition-all duration-700 blur-[40px] -z-10 opacity-0 group-hover:opacity-60 scale-[1.6]"
        style={{
          borderRadius: isHovered ? skill.hoverShape : skill.baseShape,
          backgroundColor: bloomColor,
          transform: `translate(${tilt.x * -0.2}px, ${tilt.y * 0.2}px)`,
        }}
      ></div>

      {/* Additional Circular Glow */}
      <div
        className="absolute inset-0 transition-all duration-1000 blur-[60px] -z-20 opacity-0 group-hover:opacity-40 scale-[2]"
        style={{
          borderRadius: "50%",
          backgroundColor: glowColor,
          transform: `translate(${tilt.x * -0.3}px, ${tilt.y * 0.3}px) scale(${isHovered ? 1.2 : 1})`,
        }}
      ></div>

      <div
        className={`
          relative w-[140px] md:w-[160px] aspect-square flex flex-col items-center justify-center
          bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl 
          border border-slate-200 dark:border-slate-700
          transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)
          group-hover:border-primary/60 group-hover:bg-white dark:group-hover:bg-slate-800
        `}
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${isHovered ? 1.12 : 1})`,
          borderRadius: isHovered ? skill.hoverShape : skill.baseShape,
          boxShadow: isHovered
            ? `0 25px 50px -15px rgba(0,0,0,0.2), 0 0 30px ${glowColor}`
            : "0 8px 20px -8px rgba(0,0,0,0.1)",
        }}
      >
        <div
          className="relative mb-3 transition-transform duration-500"
          style={{
            transform: `translate(${tilt.x * 0.4}px, ${tilt.y * -0.4}px)`,
          }}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className={`w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-500 ${isHovered ? "scale-120" : skill.isColored ? "opacity-100" : "grayscale opacity-70"}`}
            style={{
              filter: isHovered ? `drop-shadow(0 0 12px ${glowColor})` : "none",
            }}
          />
        </div>

        <span
          className={`font-semibold text-sm md:text-base uppercase tracking-wide transition-colors duration-500 ${isHovered ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}
        >
          {skill.name}
        </span>

        {/* Brand Indicator Dot */}
        <div
          className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-500 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
          style={{
            backgroundColor: skill.color,
            boxShadow: `0 0 12px ${skill.color}`,
          }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const doubledSkills = [...skills, ...skills, ...skills];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center pt-24 pb-12 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16 px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1]">
            Tools and{" "}
            <span className="italic font-light text-slate-400">Skills</span>{" "}
            <br />
            engineered for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              perfection.
            </span>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden marquee-mask py-8">
          <div className="flex animate-marquee hover:pause-marquee">
            {doubledSkills.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                skill={skill}
                index={index % skills.length}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite; /* Faster scroll speed (20s instead of 50s) */
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Skills;
