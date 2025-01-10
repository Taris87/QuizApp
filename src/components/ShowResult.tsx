import React, { useState } from "react";

interface ShowResultProps {
  results: {
    question: string;
    correctAnswer: string;
    userAnswer: string;
    isCorrect: boolean;
    description: string;
  }[];
  onRestart: () => void;
}

const ShowResult: React.FC<ShowResultProps> = ({ results, onRestart }) => {
  const correctCount = results.filter((result) => result.isCorrect).length;
  const incorrectResults = results.filter((result) => !result.isCorrect);
  const correctResults = results.filter((result) => result.isCorrect);
  const sortedResults = [...incorrectResults, ...correctResults];

  const [visibleCount, setVisibleCount] = useState(3); // Number of results to show

  const getScoreMessage = (correct: number, total: number) => {
    const percentage = (correct / total) * 100;
    if (percentage === 100)
      return "Perfekt! Du hast alle Fragen richtig beantwortet! 🎉";
    if (percentage >= 80) return "Sehr gut gemacht! 🌟";
    if (percentage >= 60) return "Gut gemacht! Weiter so! 👍";
    if (percentage >= 40) return "Du bist auf dem richtigen Weg! 💪";
    return "Übe weiter, du schaffst das! 📚";
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more results
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Quiz Ergebnisse
      </h2>
      <p className="text-lg sm:text-xl mb-2 text-center decoration-gray-300 underline">
        {getScoreMessage(correctCount, results.length)}
      </p>
      <p className="text-lg text-center mb-6">
        Richtig beantwortet: <b className="text-green-700">{correctCount}</b> von{" "}
        <b className="text-gray-700">{results.length}</b>
      </p>

      <ul className="space-y-4 bg-white font-bold">
        {sortedResults.slice(0, visibleCount).map((result, index) => (
          <li
            key={index}
            className={`p-4 border border-gray-300 rounded-lg ${
              result.isCorrect
                ? "text-green-700 bg-green-50"
                : "text-red-700 bg-red-50"
            } max-w-full`}>
            <span className="mr-2 font-bold text-center flex justify-center">
              {result.isCorrect ? "✓" : "✗"}{" "}
              {result.isCorrect ? "Richtig" : "Falsch"}
            </span>

            <p className="font-medium">
              <span className="text-gray-700 font-bold">Frage: </span>
              {result.question}
            </p>
            <p className="text-gray-700 font-bold">
              Richtige Antwort:{" "}
              <span className="font-normal">{result.correctAnswer}</span>
            </p>
            <p className="text-gray-700 font-bold">
              Deine Antwort:{" "}
              <span className="font-normal">{result.userAnswer}</span>
            </p>
            <p className="text-gray-700 font-bold">
              Erklärung:{" "}
              <span className="max-w-full font-normal break-words whitespace-normal overflow-hidden">
                {result.description
                  ? result.description
                  : "Keine Erklärung gefunden!"}
              </span>
            </p>
          </li>
        ))}
      </ul>
      {visibleCount < sortedResults.length && (
        <button
          onClick={handleShowMore}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Mehr anzeigen
        </button>
      )}
      <button
        onClick={onRestart}
        className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Quiz erneut starten
      </button>
    </div>
  );
};

export default ShowResult;
