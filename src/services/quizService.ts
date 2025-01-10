import { Quiz, UserProgress } from "../types/quiz";

export const saveQuizProgress = (
  userId: string,
  quizId: string,
  questionId: string,
  isCorrect: boolean,
) => {
  const key = `quiz_progress_${userId}`;
  const progress = JSON.parse(localStorage.getItem(key) || "{}");

  if (!progress[quizId]) {
    progress[quizId] = {
      completedQuestions: [],
      score: 0,
    };
  }

  if (!progress[quizId].completedQuestions.includes(questionId)) {
    progress[quizId].completedQuestions.push(questionId);
    if (isCorrect) {
      progress[quizId].score = Math.min(
        progress[quizId].score + 1,
        progress[quizId].completedQuestions.length
      );
    }
  }

  localStorage.setItem(key, JSON.stringify(progress));
};

export const getQuizProgress = (
  userId: string,
  quizId: string
): UserProgress => {
  const key = `quiz_progress_${userId}`;
  const progress = JSON.parse(localStorage.getItem(key) || "{}");
  return progress[quizId] || { completedQuestions: [], score: 0 };
};

export const saveCustomQuiz = (quiz: Quiz) => {
  const customQuizzes = getCustomQuizzes();
  const existingQuizIndex = customQuizzes.findIndex((q) => q.id === quiz.id);

  if (existingQuizIndex !== -1) {
    customQuizzes[existingQuizIndex] = quiz;
  } else {
    customQuizzes.push(quiz);
  }

  localStorage.setItem("custom_quizzes", JSON.stringify(customQuizzes));
};

export const getCustomQuizzes = (): Quiz[] => {
  return JSON.parse(localStorage.getItem("custom_quizzes") || "[]");
};

export const updateCustomQuiz = (quiz: Quiz) => {
  const customQuizzes = getCustomQuizzes();
  const index = customQuizzes.findIndex((q) => q.id === quiz.id);

  if (index !== -1) {
    customQuizzes[index] = quiz;
    localStorage.setItem("custom_quizzes", JSON.stringify(customQuizzes));
  } else {
    console.error(`Quiz mit der ID ${quiz.id} wurde nicht gefunden.`);
  }
};

export const resetQuizScore = (userId: string, quizId: string) => {
  const key = `quiz_progress_${userId}`;
  const progress = JSON.parse(localStorage.getItem(key) || "{}");

  if (progress[quizId]) {
    progress[quizId].score = 0;
    progress[quizId].completedQuestions = [];
    localStorage.setItem(key, JSON.stringify(progress));
  }
};

export const deleteCustomQuiz = (quizId: string): boolean => {
  const customQuizzes = getCustomQuizzes();
  const initialLength = customQuizzes.length;
  const filteredQuizzes = customQuizzes.filter((quiz) => quiz.id !== quizId);

  if (filteredQuizzes.length < initialLength) {
    localStorage.setItem("custom_quizzes", JSON.stringify(filteredQuizzes));
    return true;
  } else {
    console.error(`Quiz mit der ID ${quizId} wurde nicht gefunden.`);
    return false;
  }
};
