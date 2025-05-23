import React, { useState, useEffect } from "react";
import { categories } from "./data/categories"; // Assuming categories data is imported from here
import { QuizCard } from "./components/QuizCard";
import { ResultCard } from "./components/ResultCard";
import type { GameState } from "./types";

const QUESTION_TIMER = 10; // seconds

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    isAnswered: false,
    gameCompleted: false,
    darkMode: false,
    timeRemaining: QUESTION_TIMER,
  });

  useEffect(() => {
    if (gameState.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [gameState.darkMode]);

  useEffect(() => {
    let timer: number;
    if (!gameState.isAnswered && !gameState.gameCompleted) {
      timer = window.setInterval(() => {
        setGameState((prev) => {
          if (prev.timeRemaining <= 0) {
            clearInterval(timer);
            return {
              ...prev,
              isAnswered: true,
              timeRemaining: 0,
            };
          }
          return {
            ...prev,
            timeRemaining: prev.timeRemaining - 1,
          };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState.currentQuestionIndex, gameState.isAnswered]);

  const handleAnswer = (selectedIndex: number) => {
    const currentCategory = categories[gameState.currentQuestionIndex];
    const currentQuestion =
      currentCategory.questions[gameState.currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;

    setGameState((prev) => ({
      ...prev,
      selectedAnswer: selectedIndex,
      isAnswered: true,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));
  };

  const handleNext = () => {
    const nextIndex = gameState.currentQuestionIndex + 1;
    if (
      nextIndex < categories[gameState.currentQuestionIndex].questions.length
    ) {
      setGameState((prev) => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        isAnswered: false,
        timeRemaining: QUESTION_TIMER,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        gameCompleted: true,
      }));
    }
  };

  const handleRestart = () => {
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswer: null,
      isAnswered: false,
      gameCompleted: false,
      darkMode: gameState.darkMode,
      timeRemaining: QUESTION_TIMER,
    });
  };

  const toggleDarkMode = () => {
    setGameState((prev) => ({
      ...prev,
      darkMode: !prev.darkMode,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
        TestYourWits
        </h1>

        {!gameState.gameCompleted ? (
          <QuizCard
            categories={categories}
            onAnswer={handleAnswer}
            onNext={handleNext}
            selectedAnswer={gameState.selectedAnswer}
            isAnswered={gameState.isAnswered}
            currentQuestionIndex={gameState.currentQuestionIndex}
            totalQuestions={
              categories.length > 0 &&
              gameState.currentQuestionIndex < categories.length
                ? categories[gameState.currentQuestionIndex].questions.length
                : 0
            }
            score={gameState.score}
            darkMode={gameState.darkMode}
            toggleDarkMode={toggleDarkMode}
            timeRemaining={gameState.timeRemaining}
          />
        ) : (
          <ResultCard
            score={gameState.score}
            totalQuestions={
              categories.length > 0 &&
              gameState.currentQuestionIndex < categories.length
                ? categories[gameState.currentQuestionIndex].questions.length
                : 0
            }
            onRestart={handleRestart}
            darkMode={gameState.darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;
