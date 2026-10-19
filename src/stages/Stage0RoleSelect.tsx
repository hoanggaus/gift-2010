import React from 'react';
import { ROLES, type RoleKey } from '../data/content';
import { GlassCard } from '../components/GlassCard';
import { Heart } from 'lucide-react';

interface Props {
  onSelectRole: (role: RoleKey) => void;
  playClick: () => void;
}

export const Stage0RoleSelect: React.FC<Props> = ({ onSelectRole, playClick }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GlassCard className="max-w-2xl w-full text-center my-auto">
        <div className="inline-block p-3 bg-pink-100 rounded-full text-pink-500 mb-2 animate-bounce">
          <Heart className="w-7 h-7 fill-pink-500" />
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
          Món Quà Đặc Biệt 20/10 💐
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm mb-4">
          Cho tớ/con hỏi một chút, bạn/người đang mở trang web này là...
        </p>

        {/* Khung danh sách cuộn mượt cho 8 vai */}
        <div className="max-h-[60vh] sm:max-h-[65vh] overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 gap-3 custom-scrollbar">
          {ROLES.map((role) => (
            <button
              key={role.id}
              onClick={() => {
                playClick();
                onSelectRole(role.id);
              }}
              className="p-3.5 rounded-2xl bg-white/60 hover:bg-white border border-pink-100 hover:border-pink-300 shadow-sm hover:shadow-md transition-all text-left flex items-center gap-3 group cursor-pointer"
            >
              <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                {role.icon}
              </span>
              <div className="overflow-hidden">
                <h3 className="font-bold text-sm sm:text-base text-gray-800 group-hover:text-pink-600 truncate">
                  {role.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                  {role.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};