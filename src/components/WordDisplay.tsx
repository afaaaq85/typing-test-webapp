import React, { useRef, useEffect } from "react";
import { WordStatus } from "../types/typing";
import { useWordDisplay } from "../hooks/useWordDisplay";

interface WordDisplayProps {
  words: string[];
  currentIndex: number;
  wordStatus: WordStatus[];
}

export default function WordDisplay({ words, currentIndex, wordStatus }: WordDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { paragraphs, currentParagraphIndex } = useWordDisplay(words);

  // Auto-scroll to keep the current word visible
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const paragraphHeight = container.scrollHeight / paragraphs.length;
      const targetScroll = currentParagraphIndex * paragraphHeight;

      container.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, currentParagraphIndex]);

  return (
    <div
      ref={containerRef}
      className="mb-6 h-44 text-lg text-gray-600 leading-relaxed  overflow-y-auto scroll-smooth"
    >
      {paragraphs.map((paragraph, pIndex) => (
        <p key={pIndex} className="mb-4 break-words whitespace-normal">
          {paragraph.map((wordIndex) => (
            <span
              key={`${words[wordIndex]}-${wordIndex}`}
              className={`mr-2 break-words ${getWordClassName(wordIndex, currentIndex, wordStatus[wordIndex])} transition-colors duration-200`}
            >
              {words[wordIndex]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

function getWordClassName(index: number, currentIndex: number, status: WordStatus): string {
  if (index === currentIndex) {
    return "bg-indigo-100 px-1 rounded";
  }
  if (index < currentIndex) {
    return status === "correct" ? "text-green-600" : "text-red-500 line-through";
  }
  return "";
}
