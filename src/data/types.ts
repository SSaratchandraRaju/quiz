export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    questions: Question[];
  }
  