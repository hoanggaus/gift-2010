import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  // Bắn pháo hoa màu hồng & vàng trái tim
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff69b4', '#ff1493', '#ffb6c1', '#ffd700'],
  });
};