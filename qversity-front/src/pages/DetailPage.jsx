import React from 'react';

// Placeholder data for a single study set
const studySet = {
  id: 1,
  title: 'Advanced English Vocabulary',
  description: 'A collection of 50 advanced words for GRE and TOEFL preparation.',
  author: 'John Doe',
  terms: [
    { id: 1, term: 'Abnegation', definition: 'The act of renouncing or rejecting something.' },
    { id: 2, term: 'Aggrandize', definition: 'Increase the power, status, or wealth of.' },
    { id: 3, term: 'Alacrity', definition: 'Bris, cheerful readiness.' },
    { id: 4, term: 'Anachronistic', definition: 'Belonging to a period other than that being portrayed.' },
    { id: 5, term: 'Archetypal', definition: 'Very typical of a certain kind of person or thing.' },
    { id: 6, term: 'Ascetic', definition: 'Characterized by severe self-discipline and abstention from all forms of indulgence.' },
    { id: 7, term: 'Beguile', definition: 'Charm or enchant (someone), sometimes in a deceptive way.' },
    { id: 8, term: 'Blandishment', definition: 'A flattering or pleasing statement or action used to persuade someone gently to do something.' },
  ],
};

// Study mode button component
function StudyModeButton({ name, icon }) {
  return (
    <button className="flex flex-col items-center justify-center p-4 border rounded-lg bg-white hover:bg-gray-100 transition-colors space-y-2">
      {/* Placeholder for icon */}
      <div className="w-8 h-8 bg-gray-300 rounded-md"></div>
      <span className="font-semibold text-gray-700">{name}</span>
    </button>
  );
}

export default function DetailPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header (Re-using the same structure as MainPage for consistency) */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="text-2xl font-bold text-blue-600">Qversity</div>
            <div className="flex items-center space-x-4">
              <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold">
                Create set
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8">
        {/* Set Title and Info */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{studySet.title}</h1>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
            <span className="text-md text-gray-600">Created by <span className="font-bold">{studySet.author}</span></span>
          </div>
        </div>

        {/* Study Modes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StudyModeButton name="Flashcards" />
          <StudyModeButton name="Learn" />
          <StudyModeButton name="Test" />
          <StudyModeButton name="Match" />
        </div>

        {/* Terms List */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Terms in this set ({studySet.terms.length})</h2>
          <div className="space-y-4">
            {studySet.terms.map(term => (
              <div key={term.id} className="flex p-4 border rounded-md">
                <div className="w-1/3 font-medium text-gray-700">{term.term}</div>
                <div className="w-2/3 text-gray-600">{term.definition}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
