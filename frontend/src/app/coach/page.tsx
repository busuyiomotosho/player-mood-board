'use client';
import { useState, useEffect } from 'react';
import { format, subDays, isToday } from 'date-fns';
import MoodChart from '../../components/MoodChart';
import MoodCard from '../../components/MoodCard';
import { fetchMoods } from '../../lib/api';
import { MoodResponse } from '../../types/mood';
import React from 'react';

export default function CoachView() {
  const [date, setDate] = useState<Date>(new Date());
  const [moods, setMoods] = useState<MoodResponse>({
    happy: 0,
    neutral: 0,
    sad: 0
  });

  const fetchData = async () => {
    try {
      const data = await fetchMoods(format(date, 'yyyy-MM-dd'));
      setMoods(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [date]);

  const handleDateChange = (days: number) => {
    setDate(subDays(date, days));
  };

  const handleDatePicker = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Team Mood Dashboard
        </h1>
        
        <div className="flex items-center mt-4 sm:mt-0">
          <button 
            onClick={() => handleDateChange(1)}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="Previous day"
          >
            ←
          </button>
          
          <input 
            type="date" 
            value={format(date, 'yyyy-MM-dd')}
            onChange={handleDatePicker}
            className="mx-2 px-4 py-2 border rounded-lg text-center"
          />
          
          <button 
            onClick={() => handleDateChange(-1)}
            disabled={isToday(date)}
            className={`p-2 rounded-lg ${isToday(date) ? 'opacity-50' : 'hover:bg-gray-100'}`}
            aria-label="Next day"
            aria-disabled={isToday(date)}
          >
            →
          </button>
        </div>
      </div>
      
      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          {isToday(date) ? "Today's Mood Summary" : format(date, 'MMMM d, yyyy')}
        </h2>
        {isToday(date) && (
          <p className="text-sm text-gray-500 mt-1">
            Auto-updating every 10 seconds
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MoodCard type="happy" count={moods.happy} />
        <MoodCard type="neutral" count={moods.neutral} />
        <MoodCard type="sad" count={moods.sad} />
      </div>
      
      <div className="bg-gray-50 p-4 rounded-xl">
        <MoodChart data={moods} />
      </div>
    </div>
  );
}