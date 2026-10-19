import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ContentData } from '../data/content';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Typewriter } from '../components/Typewriter';
import { Heart } from 'lucide-react';

interface Props {
  data: ContentData['story'];
  onNext: () => void;
  playClick: () => void;
}

export const Stage2Story: React.FC<Props> = ({ data, onNext, playClick }) => {
  const [index, setIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  const currentMsg = data.messages[index];
  const isLast = index === data.messages.length - 1;

  const handleNextMessage = () => {
    playClick();
    if (isLast) {
      onNext();
    } else {
      setIsTypingDone(false);
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GlassCard className="max-w-xl w-full text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-pink-500">
          <Heart className="w-5 h-5 fill-pink-500" />
          <span className="text-sm font-semibold tracking-wide uppercase">
            {data.title} ({index + 1}/{data.messages.length})
          </span>
        </div>

        <div className="min-h-[140px] flex items-center justify-center my-4 p-4 bg-white/50 rounded-2xl border border-pink-100">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-gray-800 text-lg sm:text-xl font-medium leading-relaxed"
            >
              <Typewriter
          key={index} // 👈 Quan trọng: Thêm key={index} ở đây
          text={currentMsg}
          speed={40}
          onComplete={() => setIsTypingDone(true)}
        />
            </motion.p>
          </AnimatePresence>
        </div>

        <Button
          onClick={handleNextMessage}
          className="w-full mt-4"
          disabled={!isTypingDone}
        >
          {isLast ? 'Đến thử thách nhận quà 🎁' : 'Tiếp theo ➔'}
        </Button>
      </GlassCard>
    </div>
  );
};