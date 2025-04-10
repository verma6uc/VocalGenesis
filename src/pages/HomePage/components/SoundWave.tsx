import React from 'react';
import { motion } from 'framer-motion';

interface SoundWaveProps {
  playing: boolean;
  color?: string;
  width?: number;
  height?: number;
  bars?: number;
}

const SoundWave: React.FC<SoundWaveProps> = ({
  playing,
  color = 'url(#wave-gradient)',
  width = 100,
  height = 50,
  bars = 10
}) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4B0082" />
          <stop offset="100%" stopColor="#00BFFF" />
        </linearGradient>
      </defs>
      
      <g fill={color}>
        {Array.from({ length: bars }).map((_, index) => {
          const barWidth = width / (bars * 2)
          const barMargin = barWidth / 2
          const x = index * (barWidth + barMargin) + barMargin
          const barHeight = playing ? Math.random() * height * 0.8 + height * 0.2 : height * 0.1
          
          return (
            <motion.rect
              key={index}
              x={x}
              y={(height - barHeight) / 2}
              width={barWidth}
              height={barHeight}
              rx={barWidth / 2}
              initial={{ height: height * 0.1, y: height * 0.45 }}
              animate={
                playing
                  ? {
                      height: [
                        height * 0.1,
                        Math.random() * height * 0.6 + height * 0.4,
                        height * 0.1,
                        Math.random() * height * 0.7 + height * 0.3,
                        height * 0.1,
                      ],
                      y: [
                        height * 0.45,
                        (height - (Math.random() * height * 0.6 + height * 0.4)) / 2,
                        height * 0.45,
                        (height - (Math.random() * height * 0.7 + height * 0.3)) / 2,
                        height * 0.45,
                      ],
                    }
                  : { height: height * 0.1, y: height * 0.45 }
              }
              transition={
                playing
                  ? {
                      repeat: Infinity,
                      duration: 1.5,
                      delay: index * 0.05,
                    }
                  : { duration: 0.3 }
              }
            />
          )
        })}
      </g>
    </svg>
  );
};

export default SoundWave;