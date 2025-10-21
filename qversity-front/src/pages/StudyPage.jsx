import React, { useState } from 'react';

// Placeholder data - reusing the same set from DetailPage
const studySet = {
  title: 'Advanced English Vocabulary',
  terms: [
    { id: 1, term: 'Abnegation', definition: 'The act of renouncing or rejecting something.' },
    { id: 2, term: 'Aggrandize', definition: 'Increase the power, status, or wealth of.' },
    { id: 3, term: 'Alacrity', definition: 'Bris, cheerful readiness.' },
    { id: 4, term: 'Anachronistic', definition: 'Belonging to a period other than that being portrayed.' },
    { id: 5, term: 'Archetypal', definition: 'Very typical of a certain kind of person or thing.' },
  ],
};

export default function StudyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = studySet.terms[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false); // Show front of next card
    setCurrentIndex((prevIndex) => (prevIndex + 1) % studySet.terms.length);
  };

  const handlePrev = () => {
    setIsFlipped(false); // Show front of previous card
    setCurrentIndex((prevIndex) => (prevIndex - 1 + studySet.terms.length) % studySet.terms.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-2">{studySet.title}</h1>
        <div className="text-center text-gray-500 mb-6">
          Card {currentIndex + 1} of {studySet.terms.length}
        </div>

        {/* Flashcard */}
        <div
          className="relative w-full h-80 perspective-1000"
          onClick={handleFlip}
        >
          <div
            className={`absolute w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
          >
            {/* Front of the card */}
            <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
              <p className="text-4xl font-bold text-gray-800">{currentCard.term}</p>
            </div>

            {/* Back of the card */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
              <p className="text-2xl text-gray-700">{currentCard.definition}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrev}
            className="px-6 py-3 bg-white rounded-lg shadow-md hover:bg-gray-50 font-semibold"
          >
            Prev
          </button>
          <p className="text-gray-600">Click card to flip</p>
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-white rounded-lg shadow-md hover:bg-gray-50 font-semibold"
          >
            Next
          </button>
        </div>
      </div>

      {/* CSS for 3D transform (can be moved to a CSS file) */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}
