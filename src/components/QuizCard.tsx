import React, { useState } from "react";
import { Quiz } from "../types/quiz";
import { getQuizProgress, resetQuizScore } from "../services/quizService";
import { Play, Edit, Trash2, RefreshCw } from "lucide-react";

interface QuizCardProps {
  quiz: Quiz;
  userId: string;
  onStart: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  isCustom?: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  quiz,
  userId,
  onStart,
  onEdit,
  onDelete,
  isCustom,
}) => {
  const [progress, setProgress] = useState(getQuizProgress(userId, quiz.id));

  const correctAnswers = Math.min(progress.score, quiz.questions.length);
  const progressPercentage = Math.min(
    (correctAnswers / quiz.questions.length) * 100,
    100
  );

  const handleStart = () => {
    resetQuizScore(userId, quiz.id);
    setProgress(getQuizProgress(userId, quiz.id));
    onStart();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{quiz.title}</h3>
        <div className="flex space-x-2">
          {isCustom && (
            <div className="flex space-x-2">
              <button
                onClick={onEdit}
                className="text-blue-600 hover:text-blue-700"
                title="Quiz bearbeiten">
                <Edit className="h-5 w-5" />
              </button>
              <button
                onClick={onDelete}
                className="text-red-600 hover:text-red-700"
                title="Quiz löschen">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          )}
          <button
            onClick={() => {
              resetQuizScore(userId, quiz.id);
              setProgress(getQuizProgress(userId, quiz.id));
              window.location.reload();
            }}
            className="text-gray-600 hover:text-gray-700"
            title="Fortschritt zurücksetzen">
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {correctAnswers} von {quiz.questions.length} Fragen richtig
          beantwortet
        </p>
      </div>
      <button
        onClick={handleStart}
        className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        <Play className="h-5 w-5 mr-2" />
        Quiz starten
      </button>
    </div>
  );
};


