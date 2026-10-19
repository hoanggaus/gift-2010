import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 40,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [previousText, setPreviousText] = useState(text);

  if (text !== previousText) {
    setPreviousText(text);
    setDisplayedText('');
  }

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1)); // Lấy chính xác đoạn chữ từ 0 đến i + 1
        i++;
      } else {
        clearInterval(timer);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    // Clean up timer khi unmount hoặc đổi câu
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};