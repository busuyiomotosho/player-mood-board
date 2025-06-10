import React from 'react';
import { EmojiType } from '@/types/mood';

interface MoodCardProps {
  type: EmojiType;
  count: number;
}

const labelMap: Record<EmojiType, string> = {
  happy: 'Happy',
  neutral: 'Neutral',
  sad: 'Sad',
};

const MoodCard: React.FC<MoodCardProps> = ({ type, count }) => (
  <div className={`mood-card ${type}`}>
    <span className="block text-4xl mb-2">
      {type === 'happy' ? '😃' : type === 'neutral' ? '😐' : '😞'}
    </span>
    <span 
      className="block text-3xl font-bold"
      style={{ color: `var(--color-${type})` }}
    >
      {count}
    </span>
    <span className="text-gray-600 mt-1">
      {labelMap[type]}
    </span>
  </div>
);

export default MoodCard;