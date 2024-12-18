import React from 'react';
import { Trophy } from 'lucide-react';
import { useTypingTest } from '../hooks/useTypingTest';
import TestHeader from './TestHeader';
import WordDisplay from './WordDisplay';
import Stats from './Stats';

export default function TypingTest() {
  const {
    words,
    wordStatus,
    input,
    currentWordIndex,
    correctWords,
    incorrectWords,
    timeLeft,
    testComplete,
    handleInput,
    resetTest,
    calculateWPM,
    calculateAccuracy,
  } = useTypingTest();

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-200 rounded-xl">
      <TestHeader timeLeft={timeLeft} onReset={resetTest} />

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <WordDisplay 
          words={words} 
          currentIndex={currentWordIndex} 
          wordStatus={wordStatus}
        />

        <input
          type="text"
          value={input}
          onChange={handleInput}
          disabled={testComplete}
          className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors disabled:bg-gray-100"
          placeholder={testComplete ? "Test complete!" : "Start typing..."}
        />
      </div>

      {testComplete && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center gap-2 mb-4 text-indigo-600">
            <Trophy className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Your Results</h2>
          </div>
          <Stats
            wpm={calculateWPM()}
            accuracy={calculateAccuracy()}
            correctWords={correctWords}
            incorrectWords={incorrectWords}
          />
        </div>
      )}
    </div>
  );
}