import React from 'react';

// Reusable Category Card Component
const CategoryCard = ({ name, icon, onClick }) => (
  <div 
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer p-8 text-center"
    onClick={onClick}
  >
    <div className="w-24 h-24 bg-blue-100 text-primary rounded-full mx-auto flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-dark-color">{name}</h3>
  </div>
);

// Main Page Component (Category Selection)
export default function MainPage() {
  const handleCategoryClick = (category) => {
    // In a real app, this would navigate to the detail page for that category
    // e.g., navigate(`/category/${category}`);
    alert(`Navigate to ${category} category`);
  };

  return (
    <div className="font-sans min-h-screen bg-light-color">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-3">
            <div className="text-2xl font-bold text-primary">Qversity</div>
            <div className="flex items-center space-x-4">
              <button type="button" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary font-semibold">
                + 새 세트 만들기
              </button>
              {/* User Profile Icon */}
              <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 md:p-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-color mb-2">안녕하세요, Qversity님!</h1>
          <p className="text-lg text-gray-600">오늘도 Qversity와 함께 효율적인 학습을 시작해보세요.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-color mb-6">학습 분야</h2>
          <div className="grid grid-cols-1 gap-8">
            <CategoryCard 
              name="프로그래밍"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
              }
              onClick={() => handleCategoryClick('programming')}
            />
            {/* More categories can be added here */}
          </div>
        </div>
      </main>
    </div>
  );
}