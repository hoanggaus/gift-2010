import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CONTENT_BY_ROLE, type RoleKey } from './data/content';
import { useAudio } from './hooks/useAudio';
import { MusicPlayer } from './components/MusicPlayer';

import { Stage0RoleSelect } from './stages/Stage0RoleSelect';
import { Stage1Intro } from './stages/Stage1Intro';
import { Stage2Story } from './stages/Stage2Story';
import { Stage3Game } from './stages/Stage3Game';
import { Stage4Letter } from './stages/Stage4Letter';

export default function App() {
  const [role, setRole] = useState<RoleKey | null>(null);
  const [stage, setStage] = useState<number>(0);
  const [customLetterImages, setCustomLetterImages] = useState<string[] | undefined>(undefined);

  // Link nhạc nền nhẹ nhàng lofi piano
  const { isPlaying, toggleMusic, playClickSound } = useAudio('/sounds/bg-music.mp3');

  const handleSelectRole = (selectedRole: RoleKey) => {
    setRole(selectedRole);
    setStage(1);
    if (!isPlaying) toggleMusic(); // Tự động phát nhạc khi bắt đầu tương tác
  };

  const nextStage = () => setStage((prev) => prev + 1);

  const resetApp = () => {
    setStage(0);
    setRole(null);
    setCustomLetterImages(undefined); // Reset lại danh sách ảnh tùy chỉnh khi chọn đối tượng mới
  };

  const content = role ? CONTENT_BY_ROLE[role] : null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      {/* Nút bật/tắt nhạc floating */}
      <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

      <AnimatePresence mode="wait">
        {stage === 0 && (
          <motion.div key="stage0" exit={{ opacity: 0, scale: 0.95 }}>
            <Stage0RoleSelect onSelectRole={handleSelectRole} playClick={playClickSound} />
          </motion.div>
        )}

        {stage === 1 && content && (
          <motion.div key="stage1" exit={{ opacity: 0, scale: 0.95 }}>
            <Stage1Intro data={content.intro} onNext={nextStage} playClick={playClickSound} />
          </motion.div>
        )}

        {stage === 2 && content && (
          <motion.div key="stage2" exit={{ opacity: 0, scale: 0.95 }}>
            <Stage2Story data={content.story} onNext={nextStage} playClick={playClickSound} />
          </motion.div>
        )}

        {stage === 3 && content && (
          <motion.div key="stage3" exit={{ opacity: 0, scale: 0.95 }}>
            <Stage3Game
              data={content.game}
              onNext={(customImages) => {
                setCustomLetterImages(customImages); // 👈 Lưu ảnh từ hộp quà đã chọn (Tú hoặc Tuệ)
                nextStage();
              }}
              playClick={playClickSound}
            />
          </motion.div>
        )}

        {stage === 4 && content && (
          <motion.div key="stage4">
            <Stage4Letter
              data={content.letter}
              customImages={customLetterImages} // 👈 Truyền ảnh xuống Màn 4 để hiển thị chuẩn xác
              onReset={resetApp}
              playClick={playClickSound}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}