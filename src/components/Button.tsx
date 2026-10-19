import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline';
  onClickSound?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  onClickSound,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClickSound) onClickSound();
    if (onClick) onClick(e);
  };

  const baseStyle = 'px-6 py-3 rounded-full font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-pink-200',
    secondary: 'bg-white text-pink-600 hover:bg-pink-50 border border-pink-200',
    outline: 'border-2 border-pink-400 text-pink-600 hover:bg-pink-500 hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};