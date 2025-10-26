import React from 'react';

// Placeholder data for study sets in the 'Programming' category
const studySets = [
  {
    id: 1,
    title: 'JavaScript 기초',
    description: '웹 개발에 필요한 핵심 개념을 학습합니다.',
    icon: 'JS', // Placeholder for icon
    stats: { total: 20, learned: 8, toReview: 5, new: 7 },
  },
  {
    id: 2,
    title: 'Python 기초',
    description: '프로그래밍의 기초와 데이터 분석에 필요한 개념을 학습합니다.',
    icon: 'PY', // Placeholder for icon
    stats: { total: 18, learned: 12, toReview: 3, new: 3 },
  },
  {
    id: 3,
    title: 'React 기초',
    description: '컴포넌트, 상태 관리, Hooks 등 현대적인 웹 앱 개발 개념을 학습합니다.',
    icon: 'RE', // Placeholder for icon
    stats: { total: 22, learned: 5, toReview: 2, new: 15 },
  },
];

// Stat item component for the card
const StatItem = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-bold text-dark-color">{value}장</p>
  </div>
);

// Study Set Card component with stacked effect
const StudySetCard = ({ set }) => (
  <div className="relative cursor-pointer group" style={{ perspective: '1000px' }}>
    <div className="relative w-full h-40 transform-style-3d transition-transform duration-500 group-hover:-translate-y-1">
      {[...Array(3)].map((_, i) => (
        <div 
          key={i} 
          className="absolute w-full h-full bg-white rounded-lg shadow-md border border-gray-200"
          style={{ transform: `translateZ(${-i * 4}px) translateY(${-i * 4}px)` }}
        ></div>
      ))}
      <div className="absolute w-full h-full bg-white rounded-lg shadow-lg border border-gray-200 flex p-1">
        <div className="w-40 bg-gray-50 rounded-l-lg flex flex-col items-center justify-center p-4">
          <div className="text-3xl font-bold text-primary">{set.icon}</div>
          <h3 className="text-lg font-bold text-center text-dark-color mt-2">{set.title}</h3>
        </div>
        <div className="flex-1 p-4 flex flex-col justify-between">
          <p className="text-sm text-gray-600">{set.description}</p>
          <div className="grid grid-cols-4 gap-2 text-sm">
            <StatItem label="총 카드" value={set.stats.total} />
            <StatItem label="학습한 카드" value={set.stats.learned} />
            <StatItem label="복습할 카드" value={set.stats.toReview} />
            <StatItem label="새 카드" value={set.stats.new} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Detail Page Component (now Study Set List)
export default function DetailPage() {
  return (
    <div className="font-sans min-h-screen bg-light-color">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-3">
            <div className="text-2xl font-bold text-primary">Qversity</div>
            <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 md:p-12">
        <div className="mb-8">
          <button className="text-gray-600 hover:text-primary font-semibold mb-4">
            &larr; 메인으로 돌아가기
          </button>
          <h1 className="text-4xl font-bold text-dark-color flex items-center">
            <span className="text-green-500 mr-3">&#x2F;&lt;&gt;</span>
            프로그래밍 플래시카드
          </h1>
        </div>

        <div className="space-y-6">
          {studySets.map(set => (
            <StudySetCard key={set.id} set={set} />
          ))}
        </div>
      </main>
    </div>
  );
}