import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorFollower = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hoverType, setHoverType] = useState<"none" | "link" | "button">("none");
  const [clicking, setClicking] = useState(false);
  const frame = useRef(0);

  // Smooth cursor position update (requestAnimationFrame)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
      setVisible(true);
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a")) setHoverType("link");
      else if (target.closest("button, [role='button']")) setHoverType("button");
      else setHoverType("none");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleHover);

    return () => {
      cancelAnimationFrame(frame.current);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  const isHovering = hoverType !== "none";

  return (
    <>
      {/* Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[100] bg-accent mix-blend-difference"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: visible ? (clicking ? 0.7 : 1) : 0,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />

      {/* Soft Aura */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[99] bg-gradient-to-r from-secondary/40 to-accent/40 blur-xl"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: visible ? (isHovering ? 0.7 : 0.3) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 18,
        }}
      />

      {/* Energy Rings */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[98]"
            animate={{
              x: pos.x - 30,
              y: pos.y - 30,
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 rounded-full border border-accent/30"
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{
                  duration: 1.2 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click Pulse */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 bg-accent/40 rounded-full pointer-events-none z-[101]"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: clicking ? 1.8 : 0,
          opacity: clicking ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
      />

      {/* Smart Label */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            key={hoverType}
            className="fixed text-[11px] font-semibold bg-secondary text-primary px-2 py-1 rounded-md pointer-events-none z-[102] shadow-md"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{
              transform: `translate(${pos.x + 20}px, ${pos.y - 20}px)`,
            }}
          >
            {hoverType === "link" ? "Open Link" : "Click"}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Directional Glow (subtle 3D motion) */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-tr from-secondary/30 via-accent/30 to-transparent pointer-events-none blur-2xl z-[90]"
        animate={{
          x: pos.x - 64,
          y: pos.y - 64,
          rotate: isHovering ? 15 : 0,
          opacity: visible ? 0.4 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      />
    </>
  );
};

export default CursorFollower;
