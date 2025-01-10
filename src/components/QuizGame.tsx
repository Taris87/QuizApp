import React, { useState, useEffect } from "react";
import { Quiz, Question } from "../types/quiz";
import { saveQuizProgress, getQuizProgress } from "../services/quizService";
import { shuffleArray } from "../utils/arrayUtils";
import ShowResult from "./ShowResult";

interface QuizResult {
  question: string;
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean;
  description: string;
}

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
  const [results, setResults] = useState<QuizResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Debugging: checking if the props are being passed correctly
  console.log("QuizGame Props:", { quiz, userId, onComplete });

  // Init shuffled questions and current question index
  useEffect(() => {
    const progress = getQuizProgress(userId, quiz.id);

    const lastAnsweredIndex = progress.completedQuestions.length;

    // Set current question index to the last answered index or 0 if out of bounds
    const validIndex = Math.min(lastAnsweredIndex, quiz.questions.length - 1);
    setCurrentQuestionIndex(validIndex);

    // Shuffle questions and options
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

   
    setShuffledQuestions(shuffled);
  }, [quiz, userId, quiz.id]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  // Fallback, if no questions are available
  if (!currentQuestion) {
    return <div>Lade Fragen...</div>;
  }

  // Function for answering a question
  const handleAnswer = (selectedIndex: number) => {
    if (isAnswered) return;

    const isCorrect = selectedIndex === currentQuestion.shuffledCorrectIndex;

    // Update results
    setResults((prevResults) => [
      ...prevResults,
      {
        question: currentQuestion.text,
        correctAnswer: currentQuestion.options[currentQuestion.shuffledCorrectIndex],
        userAnswer: currentQuestion.options[selectedIndex],
        isCorrect,
        description: currentQuestion.description,
      },
    ]);

    setSelectedAnswer(selectedIndex);
    setIsAnswered(true);
    saveQuizProgress(userId, quiz.id, currentQuestion.id, isCorrect);
  };

  // Function for going to the next question
  const nextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true); // Show results when quiz is finished
    }
  };

  // Function for restarting the quiz
  const handleStart = () => {
    setCurrentQuestionIndex(0); 
    setShuffledQuestions([]); 
    setSelectedAnswer(null); 
    setIsAnswered(false); 
    setResults([]); 
    setShowResults(false); 

    // Reinitialize shuffled questions
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
    setShuffledQuestions(shuffled); 
  };
  // Calculate progress percentage
  const progressPercentage =
    (currentQuestionIndex / shuffledQuestions.length) * 100;

  if (showResults) {
    return <ShowResult results={results} onRestart={handleStart} />;
  }

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
  <>
    <p className="mt-4 text-gray-500 w-full">
      <span className="font-bold text-black">Erklärung:</span>
      <span className="max-w-full break-words whitespace-normal overflow-hidden">
       {" "}{currentQuestion.description ? currentQuestion.description : "Keine Erklärung vorhanden"}
      </span>
    </p>
    <button
      onClick={nextQuestion}
      className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
      {currentQuestionIndex === shuffledQuestions.length - 1
        ? "Quiz beenden"
        : "Nächste Frage"}
    </button>
  </>
)}
    </div>
  );
};