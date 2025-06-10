'use client';
import { useState } from 'react';
import EmojiButton from '../../components/EmojiButton';
import { submitMood } from '../../lib/api';
import React from 'react';

export default function PlayerView() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (emoji: 'happy' | 'neutral' | 'sad') => {
    try {
      await submitMood(emoji);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      {submitted ? (
        <div className="text-center py-10">
          <div className="text-green-500 text-4xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-green-600 animate-pulse">
            Thanks for your feedback!
          </h2>
          <p className="text-gray-600 mt-2">
            Your mood has been recorded successfully
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            How was today&apos;s training?
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Select your mood to help your coach understand the team&apos;s feelings
          </p>
          
          <div className="flex justify-around my-8">
            <EmojiButton type="happy" onClick={() => handleSubmit('happy')} />
            <EmojiButton type="neutral" onClick={() => handleSubmit('neutral')} />
            <EmojiButton type="sad" onClick={() => handleSubmit('sad')} />
          </div>
        </>
      )}
    </div>
  );
}