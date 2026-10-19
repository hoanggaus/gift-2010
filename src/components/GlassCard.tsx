import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`backdrop-blur-md bg-white/75 border border-white/60 shadow-2xl rounded-3xl p-6 sm:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};