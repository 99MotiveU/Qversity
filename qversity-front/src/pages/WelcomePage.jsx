import React from 'react';

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">
              Qversity
            </div>
            <div className="flex items-center space-x-4">
              <button type="button" className="text-gray-600 hover:text-blue-600">
                Log in
              </button>
              <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign up
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          AI-powered flashcards for effective learning.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          Master any subject with our smart learning platform. Create, share, and study with a spaced repetition system designed to boost your memory.
        </p>
        <button type="button" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
          Get started
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full py-8">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Qversity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
