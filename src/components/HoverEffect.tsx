import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface HoverEffectProps {
  children: React.ReactNode;
  className?: string;
}

const HoverEffect: React.FC<HoverEffectProps> = ({ children, className = '' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 6);
    y.set(offsetY / 6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`relative group cursor-pointer transition-transform duration-300 ${className}`}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Gradient glow border */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 blur-[8px] transition-all duration-500"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Light sweep overlay */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-white/10 skew-x-[30deg]"
          initial={{ x: '-150%' }}
          whileHover={{ x: '150%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <motion.div className="relative z-10 rounded-xl bg-black/20 backdrop-blur-md p-4 shadow-md transition-all duration-300 group-hover:shadow-secondary/40">
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HoverEffect;
