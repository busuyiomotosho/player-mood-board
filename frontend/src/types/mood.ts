export type EmojiType = 'happy' | 'neutral' | 'sad';

export interface MoodResponse {
  happy: number;
  neutral: number;
  sad: number;
}