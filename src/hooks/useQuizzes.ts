import { useState, useEffect } from "react";
import { Quiz } from "../types/quiz";
import { getCustomQuizzes } from "../services/quizService";
import { databasesQuiz } from "../data/quizzes/databases";
import { programmingQuiz } from "../data/quizzes/programming";
import { networkingQuiz } from "../data/quizzes/networking";
import { qualityManagementQuiz } from "../data/quizzes/quality_management";

export function useQuizzes() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const loadQuizzes = () => {
    try {
      const customQuizzes = getCustomQuizzes();
      setQuizzes([
        programmingQuiz,
        databasesQuiz,
        networkingQuiz,
        qualityManagementQuiz,
        ...customQuizzes,
      ]);
    } catch (error) {
      console.error("Fehler beim Laden der Quizze:", error);
      setQuizzes([
        programmingQuiz,
        databasesQuiz,
        networkingQuiz,
        qualityManagementQuiz,
      ]);
    }
  };

  useEffect(() => {
    loadQuizzes();
  }, []);

  const refreshQuizzes = () => {
    loadQuizzes();
  };

  return { quizzes, refreshQuizzes };
}
