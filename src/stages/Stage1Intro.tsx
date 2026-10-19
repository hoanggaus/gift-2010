import React from 'react';
import type { ContentData } from '../data/content';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Sparkles, Gift } from 'lucide-react';

interface Props {
  data: ContentData['intro'];
  onNext: () => void;
  playClick: () => void;
}

export const Stage1Intro: React.FC<Props> = ({ data, onNext, playClick }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GlassCard className="max-w-lg w-full text-center">
        <div className="inline-block p-4 bg-rose-100 rounded-full text-rose-500 mb-3 animate-bounce">
          <Gift className="w-9 h-9" />
        </div>

        {/* Khung Ảnh Màn 1 (nếu có) */}
        {data.image && (
          <div className="mb-4 relative inline-block">
            <div className="p-2 bg-white rounded-2xl shadow-md border border-pink-200 -rotate-1 transform">
              <img
                src={data.image}
                alt="Intro"
                className="w-full max-h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        )}

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          {data.greeting}
        </h2>

        <p className="text-gray-600 mb-5 text-sm sm:text-base leading-relaxed">
          {data.question}
        </p>

        <div className="p-3.5 bg-pink-50/80 rounded-2xl border border-pink-200/60 mb-5">
          <p className="text-xs text-pink-600 font-medium">💡 Mẹo nhỏ:</p>
          <p className="text-sm text-gray-700 mt-0.5">{data.passcodeHint}</p>
        </div>

        <Button onClick={onNext} onClickSound={playClick} className="w-full">
          <Sparkles className="w-5 h-5" />
          Bắt đầu hành trình bất ngờ ✨
        </Button>
      </GlassCard>
    </div>
  );
};