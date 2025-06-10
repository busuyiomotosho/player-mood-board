import React from 'react';

export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="w-full max-w-md mx-auto">
        {children}
      </div>
    </div>
  );
}