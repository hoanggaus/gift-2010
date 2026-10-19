import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

export const useAudio = (bgMusicUrl?: string) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    if (bgMusicUrl) {
      soundRef.current = new Howl({
        src: [bgMusicUrl],
        loop: true,
        volume: 0.4,
        html5: true,
      });
    }

    return () => {
      soundRef.current?.unload();
    };
  }, [bgMusicUrl]);

  const toggleMusic = () => {
    if (!soundRef.current) return;
    if (isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
    } else {
      soundRef.current.play();
      setIsPlaying(true);
    }
  };

  const playClickSound = () => {
    const clickSound = new Howl({
      src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'], // Âm thanh click nhẹ
      volume: 0.5,
    });
    clickSound.play();
  };

  return { isPlaying, toggleMusic, playClickSound };
};