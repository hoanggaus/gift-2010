import React from 'react';
import { motion } from 'framer-motion';
import { Disc } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-pink-200 flex items-center gap-2 text-pink-600"
    >
      <Disc className={`w-6 h-6 ${isPlaying ? 'animate-spin text-pink-500' : 'text-gray-400'}`} style={{ animationDuration: '3s' }} />
      <span className="text-xs font-medium pr-1 hidden sm:inline">
        {isPlaying ? 'Đang phát nhạc 🎵' : 'Bật nhạc 🔇'}
      </span>
    </motion.button>
  );
};