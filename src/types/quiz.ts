export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface UserProgress {
  userId: string;
  quizId: string;
  completedQuestions: string[];
  score: number;
}
