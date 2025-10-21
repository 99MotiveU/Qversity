import React from 'react';

// Placeholder data for study sets
const studySets = [
  { id: 1, title: 'Advanced English Vocabulary', termCount: 50, author: 'John Doe' },
  { id: 2, title: 'React Key Concepts', termCount: 32, author: 'Jane Smith' },
  { id: 3, title: 'Japanese Hiragana & Katakana', termCount: 92, author: 'John Doe' },
  { id: 4, title: 'Fundamentals of Physics', termCount: 78, author: 'Emily White' },
  { id: 5, title: 'Spanish for Beginners', termCount: 45, author: 'Jane Smith' },
];

// Component for a single study set card
function StudySetCard({ title, termCount, author }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{termCount} terms</p>
      <div className="flex items-center">
        {/* Placeholder for author avatar */}
        <div className="w-6 h-6 rounded-full bg-gray-300 mr-2"></div>
        <span className="text-sm text-gray-500">{author}</span>
      </div>
    </div>
  );
}

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="text-2xl font-bold text-blue-600">Qversity</div>
            <div className="flex-grow mx-8">
              {/* Search Bar */}
              <input 
                type="text" 
                placeholder="Search study sets..." 
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold">
                Create set
              </button>
              {/* User Profile Icon */}
              <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Study Sets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {studySets.map(set => (
            <StudySetCard 
              key={set.id} 
              title={set.title} 
              termCount={set.termCount} 
              author={set.author} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}
