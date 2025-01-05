import React, { useState } from "react";
import { QuizCard } from "./components/QuizCard";
import { CreateQuiz } from "./components/CreateQuiz";
import { QuizGame } from "./components/QuizGame";
import { useQuizzes } from "./hooks/useQuizzes";
import { Quiz } from "./types/quiz";
import {
  deleteCustomQuiz,
  getQuizProgress,
  resetQuizScore,
} from "./services/quizService";
import * as Icons from "lucide-react";

type View = "categories" | "create" | "quiz";

const App: React.FC = () => {
  const [userId] = useState<string>("user1");
  const [activeView, setActiveView] = useState<View>("categories");
  const [activeQuiz, setActiveQuiz] = useState<Quiz | undefined>(undefined);
  const [editQuiz, setEditQuiz] = useState<Quiz | undefined>(undefined);
  const { quizzes, refreshQuizzes } = useQuizzes();

  const startQuiz = (quiz: Quiz) => {
    const progress = getQuizProgress(userId, quiz.id);
    if (progress.completedQuestions.length === quiz.questions.length) {
      resetQuizScore(userId, quiz.id);
    }
    setActiveQuiz(quiz);
    setActiveView("quiz");
  };

  const handleQuizComplete = () => {
    setActiveView("categories");
    setActiveQuiz(undefined);
  };

  const handleEditQuiz = (quiz: Quiz) => {
    setEditQuiz(quiz);
    setActiveView("create");
  };

  const handleDeleteQuiz = (quizId: string) => {
    if (window.confirm("Möchtest du dieses Quiz wirklich löschen?")) {
      deleteCustomQuiz(quizId);
      refreshQuizzes();
    }
  };

  const handleQuizCreated = () => {
    setActiveView("categories");
    setEditQuiz(undefined);
    refreshQuizzes();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Icons.BookOpen className="h-8 w-8 text-blue-600" />
              <a href="/" className="ml-2 text-xl font-bold">
                LernQuiz
              </a>
            </div>
            {activeView !== "quiz" ? (
              <div className="flex items-center">
                <button
                  onClick={() => {
                    setEditQuiz(undefined);
                    setActiveView(
                      activeView === "categories" ? "create" : "categories"
                    );
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  {activeView === "categories"
                    ? "Eigenes Quiz erstellen"
                    : "Zurück zu Kategorien"}
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <button
                  onClick={() => {
                    setActiveView("categories"); // Setzt die Ansicht zurück zu den Kategorien
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Quiz beenden
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === "categories" && (
          <>
            <h1 className="text-3xl font-bold mb-8">Wähle eine Kategorie</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <QuizCard
                  key={quiz.id}
                  quiz={quiz}
                  userId={userId}
                  onStart={() => startQuiz(quiz)}
                  onEdit={() => handleEditQuiz(quiz)}
                  onDelete={() => handleDeleteQuiz(quiz.id)}
                  isCustom={
                    ![
                      "programming",
                      "databases",
                      "networking",
                      "quality_management",
                    ].includes(quiz.id)
                  }
                />
              ))}
            </div>
          </>
        )}

        {activeView === "create" && (
          <CreateQuiz onQuizCreated={handleQuizCreated} editQuiz={editQuiz} />
        )}

        {activeView === "quiz" && activeQuiz && (
          <QuizGame
            quiz={activeQuiz}
            userId={userId}
            onComplete={handleQuizComplete}
          />
        )}
      </main>
    </div>
  );
};

export default App;
