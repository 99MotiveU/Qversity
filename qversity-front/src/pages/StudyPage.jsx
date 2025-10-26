import React, { useState, useEffect } from 'react';

// Placeholder data
const studySet = {
  title: 'JavaScript 기초',
  terms: [
    { id: 1, term: '변수 선언 키워드', hint: 'ES6 이후 추가된 키워드 포함', answer: 'var, let, const', explanation: 'var는 함수 스코프, let/const는 블록 스코프를 가집니다.' },
    { id: 2, term: '클로저 (Closure)', hint: '함수와 렉시컬 환경의 관계', answer: '함수와 그 함수가 선언된 렉시컬 환경의 조합', explanation: '내부 함수가 외부 함수의 변수에 접근할 수 있게 합니다.' },
    { id: 3, term: '이벤트 버블링', hint: 'DOM 이벤트 전파 방식', answer: '이벤트가 발생한 요소에서 상위 요소로 전파되는 현상', explanation: 'event.stopPropagation()으로 중단할 수 있습니다.' },
    { id: 4, term: 'Promise', hint: '비동기 작업 결과 처리 방식', answer: '비동기 작업의 최종 완료 또는 실패를 나타내는 객체', explanation: '콜백 지옥 문제를 해결하는 데 도움을 줍니다.' },
  ],
};

// FSRS Rating Button
const RatingButton = ({ color, text, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex-1 py-3 text-white font-bold rounded-lg transition-transform transform hover:scale-105 ${color}`}>
    {text}
  </button>
);

// Study Page Component
export default function StudyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleRating = (rating) => {
    console.log(`Card ${currentCard.id} rated as: ${rating}`);
    // Move to the next card
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % studySet.terms.length);
  };

  const currentCard = studySet.terms[currentIndex];
  const progress = ((currentIndex + 1) / studySet.terms.length) * 100;

  return (
    <div className="font-sans flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-6">
      {/* Header */}
      <header className="w-full max-w-4xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-dark-color">{studySet.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="font-semibold text-dark-color bg-white px-3 py-1 rounded-lg shadow-sm">
            {formatTime(time)}
          </div>
          <button className="text-gray-600 hover:text-primary font-semibold">나가기</button>
        </div>
      </header>

      {/* Main Card Area */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        {/* Flashcard */}
        <div className="w-full h-80 md:h-96 relative" style={{ perspective: '1000px' }} onClick={handleFlip}>
          <div 
            className={`w-full h-full absolute transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
          >
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center p-6">
              <p className="text-3xl md:text-4xl font-bold text-center text-dark-color">{currentCard.term}</p>
              {currentCard.hint && <p className="mt-4 text-gray-500">Hint: {currentCard.hint}</p>}
            </div>
            {/* Back */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl shadow-lg flex flex-col justify-center p-8 text-center">
              <h4 className="font-bold text-2xl md:text-3xl text-dark-color">{currentCard.answer}</h4>
              {currentCard.explanation && <p className="mt-4 text-lg text-gray-600">{currentCard.explanation}</p>}
            </div>
          </div>
        </div>

        {/* FSRS Buttons (shown when flipped) */}
        <div className={`w-full mt-8 transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex space-x-2 md:space-x-4">
            <RatingButton color="bg-again" text="다시" onClick={() => handleRating('again')} />
            <RatingButton color="bg-hard" text="어려움" onClick={() => handleRating('hard')} />
            <RatingButton color="bg-good" text="알맞음" onClick={() => handleRating('good')} />
            <RatingButton color="bg-easy" text="쉬움" onClick={() => handleRating('easy')} />
          </div>
        </div>
      </main>

      {/* Footer - Progress Bar */}
      <footer className="w-full max-w-4xl mx-auto mt-6">
        <div className="flex justify-between text-sm font-semibold text-gray-600 mb-1">
          <span>진행도</span>
          <span>{currentIndex + 1} / {studySet.terms.length}</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </footer>
      
      {/* CSS for 3D transform */}
      <style>{`
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}