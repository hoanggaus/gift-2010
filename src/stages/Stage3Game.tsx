import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { ContentData } from '../data/content';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { triggerConfetti } from '../utils/confetti';
import { Gift, Sparkles } from 'lucide-react';

interface Props {
  data: ContentData['game'];
  onNext: (customImages?: string[]) => void; // 👈 Nhận mảng ảnh truyền đi
  playClick: () => void;
}

export const Stage3Game: React.FC<Props> = ({ data, onNext, playClick }) => {
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    playClick();
    setSelectedBox(id);
    triggerConfetti();
  };

  const selectedGift = data.boxes.find((b) => b.id === selectedBox);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GlassCard className="max-w-xl w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {data.title}
        </h2>
        <p className="text-gray-600 text-sm mb-6">{data.description}</p>

        {!selectedGift ? (
          <div className="grid grid-cols-3 gap-3 sm:gap-4 my-6">
            {data.boxes.map((box) => (
              <motion.button
                key={box.id}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => handleSelect(box.id)}
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-pink-100 to-rose-200 border-2 border-pink-300 shadow-lg flex flex-col items-center justify-center gap-1.5 group cursor-pointer"
              >
                <Gift className="w-8 h-8 sm:w-9 sm:h-9 text-rose-500 group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-bold text-rose-700">
                  Hộp #{box.id}
                </span>
                
                {box.label && (
                  <span className="text-[11px] font-semibold text-rose-600 bg-white/80 px-2 py-0.5 rounded-full border border-pink-200 shadow-sm mt-0.5">
                    {box.label}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-5 bg-pink-100/80 rounded-2xl border-2 border-pink-300 my-6 text-center"
          >
            {selectedGift.images && selectedGift.images.length > 0 && (
              <div
                className={`mb-4 grid gap-3 ${
                  selectedGift.images.length === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-1 max-w-xs mx-auto'
                }`}
              >
                {selectedGift.images.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-white/90 rounded-2xl shadow-md border border-pink-200 transform flex items-center justify-center overflow-hidden"
                    style={{ rotate: idx % 2 === 0 ? '-2deg' : '2deg' }}
                  >
                    <img
                      src={imgUrl}
                      alt="Ảnh kỷ niệm"
                      className="w-full h-auto max-h-60 sm:max-h-72 object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="text-3xl mb-1">🎉</div>
            <h3 className="text-lg sm:text-xl font-bold text-rose-600 mb-1">
              {selectedGift.giftName}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {selectedGift.note}
            </p>
          </motion.div>
        )}

        {selectedGift && (
          <Button
            onClick={() => onNext(selectedGift.images)} // 👈 Truyền ảnh của quà đã chọn sang Màn 4
            onClickSound={playClick}
            className="w-full"
          >
            <Sparkles className="w-5 h-5" />
            Xem lá thư đặc biệt 💌
          </Button>
        )}
      </GlassCard>
    </div>
  );
};