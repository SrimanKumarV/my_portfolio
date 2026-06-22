import {
  SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript,
  SiMongodb, SiTailwindcss, SiExpress, SiGit, SiOpencv,
  SiScikitlearn, SiMysql, SiHtml5, SiCplusplus
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const TECHNOLOGIES = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
  { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
];

export const TechMarquee = () => {
  const doubled = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="relative py-10 overflow-hidden border-y border-white/5 bg-black/20 backdrop-blur-sm">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {doubled.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex-shrink-0 mx-6 flex items-center gap-3 group cursor-default"
            >
              <Icon
                size={24}
                style={{ color: tech.color, filter: 'brightness(0.7)' }}
                className="group-hover:brightness-125 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_currentColor]"
              />
              <span className="text-lg md:text-xl font-display font-semibold text-white/20 group-hover:text-white/90 transition-all duration-300 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
