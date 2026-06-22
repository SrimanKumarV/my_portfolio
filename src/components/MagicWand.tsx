import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Spark {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
}

const SPARK_COLORS = ['#00F2FE', '#4facfe', '#a78bfa', '#ffffff', '#34d399'];

let sparkId = 0;
let lastX = 0;
let lastY = 0;

export const MagicWand = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const throttleRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Throttle spark creation
      if (throttleRef.current) return;
      throttleRef.current = true;
      setTimeout(() => { throttleRef.current = false; }, 40);

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      lastX = e.clientX;
      lastY = e.clientY;

      // Only emit sparks when moving fast enough
      if (speed > 6) {
        const count = Math.min(3, Math.floor(speed / 10) + 1);
        const newSparks: Spark[] = Array.from({ length: count }, () => ({
          id: sparkId++,
          x: e.clientX,
          y: e.clientY,
          color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
          size: Math.random() * 4 + 2,
          angle: Math.random() * 360,
        }));
        setSparks((prev) => [...prev.slice(-15), ...newSparks]);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.magnetic')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Torchlight Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[40]"
        style={{
          background: 'radial-gradient(circle, rgba(0,242,254,0.12) 0%, rgba(139,92,246,0.04) 35%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
        animate={{ x: mousePosition.x - 250, y: mousePosition.y - 250 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
      />

      {/* Spark Trails */}
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[98]"
            style={{
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
              boxShadow: `0 0 ${spark.size * 2}px ${spark.color}`,
            }}
            initial={{
              x: spark.x - spark.size / 2,
              y: spark.y - spark.size / 2,
              opacity: 0.9,
              scale: 1,
            }}
            animate={{
              x: spark.x + Math.cos((spark.angle * Math.PI) / 180) * 30 - spark.size / 2,
              y: spark.y + Math.sin((spark.angle * Math.PI) / 180) * 30 - spark.size / 2,
              opacity: 0,
              scale: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onAnimationComplete={() =>
              setSparks((prev) => prev.filter((s) => s.id !== spark.id))
            }
          />
        ))}
      </AnimatePresence>

      {/* The Magic Wand Tip */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100]"
        style={{ boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(0,242,254,0.6)' }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Hover Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white/50 rounded-full pointer-events-none z-[99]"
        style={{ boxShadow: '0 0 15px rgba(0,242,254,0.3) inset' }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 0.5,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
};
