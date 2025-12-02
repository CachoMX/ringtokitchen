'use client';

import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

interface LottieAnimationProps {
  animationData: any;
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export default function LottieAnimation({
  animationData,
  width = 200,
  height = 200,
  loop = true,
  autoplay = true,
  className = '',
}: LottieAnimationProps) {
  if (!animationData) return null;

  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={animationData}
      style={{ width, height }}
      className={className}
    />
  );
}
