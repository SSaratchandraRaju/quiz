import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ score, totalQuestions, onRestart, darkMode, toggleDarkMode }) => {
  const percentage = (score / totalQuestions) * 100;
  let message = '';
  
  if (percentage === 100) message = "Perfect Score! You're Amazing! 🏆";
  else if (percentage >= 80) message = "Great Job! Almost Perfect! 🌟";
  else if (percentage >= 60) message = "Good Work! Keep Learning! 📚";
  else message = "Keep Practicing! You Can Do Better! 💪";

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Quiz Completed!</h2>
        <p className="text-xl mb-4 dark:text-gray-300">
          Your Score: {score} out of {totalQuestions}
        </p>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">{message}</p>
        <button
          onClick={onRestart}
          className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
