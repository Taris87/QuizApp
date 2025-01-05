import React, { useState, useEffect } from "react";
import { Quiz, Question } from "../types/quiz";
import { saveQuizProgress, getQuizProgress } from "../services/quizService";
import { shuffleArray } from "../utils/arrayUtils";

interface QuizGameProps {
  quiz: Quiz;
  userId: string;
  onComplete: () => void;
}

interface ShuffledQuestion extends Question {
  shuffledOptions: string[];
  shuffledCorrectIndex: number;
}

export const QuizGame: React.FC<QuizGameProps> = ({
  quiz,
  userId,
  onComplete,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<
    ShuffledQuestion[]
  >([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Debugging: Überprüfen Sie, ob die Props korrekt übergeben werden
  console.log("QuizGame Props:", { quiz, userId, onComplete });

  // Initialisiere die gemischten Fragen und den Fortschritt
  useEffect(() => {
    const progress = getQuizProgress(userId, quiz.id);

    const lastAnsweredIndex = progress.completedQuestions.length;

    // Setze currentQuestionIndex auf 0, wenn lastAnsweredIndex außerhalb des gültigen Bereichs liegt
    const validIndex = Math.min(lastAnsweredIndex, quiz.questions.length - 1);
    setCurrentQuestionIndex(validIndex);

    // Mische die Fragen und Optionen
    const shuffled = quiz.questions.map((question) => {
      const shuffledOptions = shuffleArray(question.options);
      const shuffledCorrectIndex = shuffledOptions.indexOf(
        question.options[question.correctAnswer]
      );
      return {
        ...question,
        shuffledOptions,
        shuffledCorrectIndex,
      };
    });

    console.log("Gemischte Fragen:", shuffled);
    setShuffledQuestions(shuffled);
  }, [quiz, userId, quiz.id]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  // Debugging: Überprüfen Sie, ob die aktuelle Frage geladen wurde
  console.log("Aktuelle Frage:", currentQuestion);

  // Fallback, falls keine Frage geladen wurde
  if (!currentQuestion) {
    return <div>Lade Fragen...</div>;
  }

  // Funktion zur Beantwortung einer Frage
  const handleAnswer = (selectedIndex: number) => {
    if (isAnswered) return;
    setSelectedAnswer(selectedIndex);
    setIsAnswered(true);
    const isCorrect = selectedIndex === currentQuestion.shuffledCorrectIndex;
    saveQuizProgress(userId, quiz.id, currentQuestion.id, isCorrect);
  };

  // Funktion zur nächsten Frage
  const nextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      onComplete(); // Rufe die onComplete-Funktion auf, wenn das Quiz beendet ist
    }
  };

  // Berechne den Fortschritt basierend auf der aktuellen Frage
  const progressPercentage =
    (currentQuestionIndex / shuffledQuestions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Frage {currentQuestionIndex + 1} von {shuffledQuestions.length}
          </span>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
            <span className="flex justify-center">
              {Math.round(progressPercentage)}% Geschafft
            </span>
          </div>
        </div>
        <h2 className="text-xl font-bold">{currentQuestion.text}</h2>
      </div>
      <div className="space-y-3">
        {currentQuestion.shuffledOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={isAnswered}
            className={`w-full p-4 text-left rounded-lg transition-all ${
              isAnswered
                ? index === currentQuestion.shuffledCorrectIndex
                  ? "bg-green-100 border-green-500"
                  : index === selectedAnswer
                  ? "bg-red-100 border-red-500"
                  : "bg-gray-50 border-gray-200"
                : "bg-gray-50 hover:bg-gray-100 border-gray-200"
            } border-2`}>
            {option}
          </button>
        ))}
      </div>
      {isAnswered && (
        <button
          onClick={nextQuestion}
          className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          {currentQuestionIndex === shuffledQuestions.length - 1
            ? "Quiz beenden"
            : "Nächste Frage"}
        </button>
      )}
    </div>
  );
};
