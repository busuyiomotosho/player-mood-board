import React from 'react';
import { EmojiType } from '@/types/mood';

interface EmojiButtonProps {
  type: EmojiType;
  onClick: () => void;
}

const emojiMap: Record<EmojiType, string> = {
  happy: '😃',
  neutral: '😐',
  sad: '😞',
};

const EmojiButton: React.FC<EmojiButtonProps> = ({ type, onClick }) => (
  <button 
    className="emoji-btn" 
    onClick={onClick}
    aria-label={type}
  >
    {emojiMap[type]}
  </button>
);

export default EmojiButton;