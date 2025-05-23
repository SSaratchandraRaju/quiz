import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Question, Category } from '../data/types';
import { ResultCard } from './ResultCard';

interface QuizCardProps {
  categories: Category[];
  onAnswer: (selectedIndex: number) => void;
  onNext: () => void;
  selectedAnswer: number | null;
  isAnswered: boolean;
  currentQuestionIndex: number;
  totalQuestions: number;
  score: number;
  darkMode: boolean;
  toggleDarkMode: () => void;
  timeRemaining: number;
}


interface ShuffledQuestion extends Question {
  shuffledOptions: string[];
  correctAnswer: number;
}

export const QuizCard: React.FC<QuizCardProps> = ({ categories, darkMode, toggleDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<ShuffledQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10); // 10 seconds timer

  const totalQuestions = 5;

  const shuffleArray = (array: string[], correctAnswerIndex: number): [string[], number] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const newCorrectIndex = shuffled.indexOf(array[correctAnswerIndex]);
    return [shuffled, newCorrectIndex];
  };

  useEffect(() => {
    if (selectedCategory) {
      // Shuffle the available questions
      const shuffled = selectedCategory.questions
        .map((question) => {
          const [shuffledOptions, newCorrectAnswer] = shuffleArray(
            question.options,
            question.correctAnswer
          );
          return { ...question, shuffledOptions, correctAnswer: newCorrectAnswer };
        })
        .sort(() => Math.random() - 0.5); // Shuffle questions randomly
  
      // Select the first 5 questions after shuffle
      setShuffledQuestions(shuffled.slice(0, totalQuestions));
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsQuizCompleted(false);
      setTimeRemaining(10);
    }
  }, [selectedCategory]);
  

  useEffect(() => {
    if (isAnswered || isQuizCompleted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          handleNext();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, isAnswered, isQuizCompleted]);

  const handleAnswer = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswer(index);
      setIsAnswered(true);
      if (index === shuffledQuestions[currentQuestionIndex].correctAnswer) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex >= totalQuestions - 1) {
      setIsQuizCompleted(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeRemaining(10); // Reset timer
    }
  };

  return isQuizCompleted ? (
    <ResultCard
      score={score}
      totalQuestions={totalQuestions}
      onRestart={() => {
        setIsQuizCompleted(false);
        setSelectedCategory(null);
        setScore(0);
      }}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    />
  ) : (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <label htmlFor="category" className="block text-lg font-semibold mb-2 dark:text-white">
          Select Topic:
        </label>
        <select
          id="category"
          className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
          onChange={(e) => {
            const category = categories.find(c => c.id === parseInt(e.target.value));
            setSelectedCategory(category || null);
          }}
        >
          <option value="">Select a Topic</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCategory && shuffledQuestions.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300">
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-semibold">
              Score: {score}/{totalQuestions}
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          <div className="mb-4">
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </div>
          </div>

          {/* Timer */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold dark:text-white">
              {shuffledQuestions[currentQuestionIndex]?.question}
            </h2>
            <div
              className={`text-lg font-semibold ${
                timeRemaining <= 3 ? 'text-red-500' : 'text-blue-500'
              }`}
            >
              ⏳ {timeRemaining}s
            </div>
          </div>

          <div className="space-y-3">
            {shuffledQuestions[currentQuestionIndex]?.shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className={`w-full p-4 text-left rounded-lg border border-gray-200 dark:border-gray-700 
                  ${isAnswered && index === shuffledQuestions[currentQuestionIndex].correctAnswer ? 'bg-green-100 dark:bg-green-900' : ''}
                  ${isAnswered && index === selectedAnswer && index !== shuffledQuestions[currentQuestionIndex].correctAnswer ? 'bg-red-100 dark:bg-red-900' : ''}
                  ${!isAnswered ? 'hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer' : 'cursor-default'}`}
              >
                {option}
              </button>
            ))}
          </div>

          {isAnswered && (
            <button
              onClick={handleNext}
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
