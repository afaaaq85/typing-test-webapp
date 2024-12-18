import { useState, useEffect, useCallback } from 'react';
import { generateWords } from '../utils/words';
import { WordStatus } from '../types/typing';

const TIMER_DURATION = 30;
const INITIAL_WORD_COUNT = 60;
const WORD_BUFFER_THRESHOLD = 24;
const WORDS_TO_ADD = 36;

export function useTypingTest() {
  const [words, setWords] = useState<string[]>(generateWords(INITIAL_WORD_COUNT));
  const [wordStatus, setWordStatus] = useState<WordStatus[]>(Array(INITIAL_WORD_COUNT).fill('pending'));
  const [input, setInput] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isActive, setIsActive] = useState(false);
  const [testComplete, setTestComplete] = useState(false);

  // Add more words when approaching the end
  useEffect(() => {
    if (words.length - currentWordIndex <= WORD_BUFFER_THRESHOLD) {
      const newWords = generateWords(WORDS_TO_ADD);
      setWords(prevWords => [...prevWords, ...newWords]);
      setWordStatus(prevStatus => [...prevStatus, ...Array(WORDS_TO_ADD).fill('pending')]);
    }
  }, [currentWordIndex, words.length]);

  // Timer logic
  useEffect(() => {
    let interval: number ;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTestComplete(true);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Start timer on first input
    if (!isActive && !testComplete) {
      setIsActive(true);
    }

    // Don't process input if test is complete
    if (testComplete) {
      return;
    }

    setInput(value);

    // Check if word is complete (space pressed)
    if (value.endsWith(' ')) {
      const typedWord = value.trim();
      const currentWord = words[currentWordIndex];
      const isCorrect = typedWord === currentWord;

      // Update word status
      setWordStatus(prev => {
        const newStatus = [...prev];
        newStatus[currentWordIndex] = isCorrect ? 'correct' : 'incorrect';
        return newStatus;
      });

      // Update statistics
      if (isCorrect) {
        setCorrectWords(prev => prev + 1);
      } else {
        setIncorrectWords(prev => prev + 1);
      }

      // Move to next word
      setCurrentWordIndex(prev => prev + 1);
      setInput('');
    }
  }, [currentWordIndex, words, isActive, testComplete]);

  const resetTest = useCallback(() => {
    const initialWords = generateWords(INITIAL_WORD_COUNT);
    setWords(initialWords);
    setWordStatus(Array(INITIAL_WORD_COUNT).fill('pending'));
    setInput('');
    setCurrentWordIndex(0);
    setCorrectWords(0);
    setIncorrectWords(0);
    setTimeLeft(TIMER_DURATION);
    setIsActive(false);
    setTestComplete(false);
  }, []);

  const calculateWPM = useCallback(() => {
    const totalWords = correctWords + incorrectWords;
    const minutes = (TIMER_DURATION - timeLeft) / 60;
    return Math.round(totalWords / minutes);
  }, [correctWords, incorrectWords, timeLeft]);

  const calculateAccuracy = useCallback(() => {
    const totalWords = correctWords + incorrectWords;
    if (totalWords === 0) return 100;
    return Math.round((correctWords / totalWords) * 100);
  }, [correctWords, incorrectWords]);

  return {
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
  };
}