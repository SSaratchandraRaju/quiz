export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  gameCompleted: boolean;
  darkMode: boolean;
  timeRemaining: number;
}