import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Player Mood Board
        </h1>
        <p className="text-gray-600 mb-8">
          Track team sentiment after training sessions
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/player" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Player View
          </Link>
          
          <Link 
            href="/coach" 
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Coach Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}