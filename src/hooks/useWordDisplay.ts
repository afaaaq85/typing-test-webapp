import { useMemo } from 'react';

const WORDS_PER_LINE = 12;
const LINES_PER_PARAGRAPH = 3;

export function useWordDisplay(words: string[]) {
  const paragraphs = useMemo(() => {
    const result: number[][] = [];
    const wordsPerParagraph = WORDS_PER_LINE * LINES_PER_PARAGRAPH;
    
    for (let i = 0; i < words.length; i += wordsPerParagraph) {
      const paragraph: number[] = [];
      for (let j = i; j < i + wordsPerParagraph && j < words.length; j++) {
        paragraph.push(j);
      }
      result.push(paragraph);
    }
    
    return result;
  }, [words]);

  const currentParagraphIndex = useMemo(() => {
    const wordsPerParagraph = WORDS_PER_LINE * LINES_PER_PARAGRAPH;
    return Math.floor(words.length / wordsPerParagraph);
  }, [words.length]);

  return {
    paragraphs,
    currentParagraphIndex
  };
}