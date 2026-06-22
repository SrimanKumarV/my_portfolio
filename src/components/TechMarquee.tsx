

const TECHNOLOGIES = [
  "React.js", "Node.js", "Python", "Java", "C++", "PostgreSQL", 
  "MongoDB", "Tailwind CSS", "TypeScript", "Express", "FastAPI", 
  "Git", "Linux", "OpenCV"
];

export const TechMarquee = () => {
  return (
    <section className="relative py-12 overflow-hidden border-y border-white/5 bg-black/20 backdrop-blur-sm">
      {/* Gradients for fading effect on edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-marquee">
        {/* Double the array for seamless infinite loop since animation translates to -50% */}
        {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
          <div 
            key={index}
            className="flex-shrink-0 mx-8 flex items-center justify-center text-2xl md:text-4xl font-display font-bold text-white/10 hover:text-white/80 hover:text-glow transition-all duration-300 cursor-default"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};
