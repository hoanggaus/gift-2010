import React, { useEffect } from 'react';
import type { ContentData } from '../data/content';
import { GlassCard } from '../components/GlassCard';
import { triggerConfetti } from '../utils/confetti';
import { Heart } from 'lucide-react';

interface Props {
  data: ContentData['letter'];
  customImages?: string[]; // 👈 Nhận ảnh tùy chỉnh từ Màn 3
  onReset: () => void;
  playClick: () => void;
}

export const Stage4Letter: React.FC<Props> = ({
  data,
  customImages,
  onReset,
  playClick,
}) => {
  useEffect(() => {
    triggerConfetti();
    const interval = setInterval(() => triggerConfetti(), 3500);
    return () => clearInterval(interval);
  }, []);

  // Ưu tiên hiển thị customImages nếu có (Ví dụ: tue_1.jpg khi Tuệ mở hộp #3)
  const displayImages =
    customImages && customImages.length > 0 ? customImages : data.images;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-8">
      <GlassCard className="max-w-xl w-full text-center relative overflow-hidden">
        <div className="inline-block p-3 bg-pink-100 rounded-full text-pink-500 mb-2 animate-pulse">
          <Heart className="w-8 h-8 fill-pink-500" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          {data.title}
        </h2>

        {displayImages && displayImages.length > 0 && (
          <div
            className={`mb-4 grid gap-3 ${
              displayImages.length === 2
                ? 'grid-cols-2'
                : 'grid-cols-1 max-w-xs sm:max-w-sm mx-auto'
            }`}
          >
            {displayImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="p-2 bg-white/90 rounded-2xl shadow-md border border-pink-200 transform hover:scale-105 transition-transform flex items-center justify-center overflow-hidden"
                style={{ rotate: idx % 2 === 0 ? '-2deg' : '2deg' }}
              >
                <img
                  src={imgUrl}
                  alt={`Kỷ niệm ${idx + 1}`}
                  className="w-full h-auto max-h-72 sm:max-h-80 object-contain rounded-xl"
                />
              </div>
            ))}
          </div>
        )}

        <div className="text-left space-y-3 bg-white/60 p-5 rounded-2xl border border-pink-100 mb-5 text-gray-700 text-sm sm:text-base leading-relaxed shadow-inner">
          {data.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          <div className="text-right font-bold text-pink-600 pt-2">
            {data.closing}
          </div>
        </div>

        <button
          onClick={() => {
            playClick();
            onReset();
          }}
          className="text-xs text-gray-500 hover:text-pink-600 underline transition-colors cursor-pointer"
        >
          🔄 Đổi đối tượng / Xem lại từ đầu
        </button>
      </GlassCard>
    </div>
  );
};