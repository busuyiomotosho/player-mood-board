import { EmojiType, MoodResponse } from '@/types/mood';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 10000,
});

export const submitMood = async (emoji: EmojiType) => {
  try {
    const response = await apiClient.post('/api/mood', { emoji });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const fetchMoods = async (date: string): Promise<MoodResponse> => {
  try {
    const response = await apiClient.get<MoodResponse>('/api/moods', { 
      params: { date } 
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    return { happy: 0, neutral: 0, sad: 0 };
  }
};