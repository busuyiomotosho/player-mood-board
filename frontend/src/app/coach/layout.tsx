import React from 'react';

export default function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
}