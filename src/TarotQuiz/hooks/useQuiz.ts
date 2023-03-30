import { useState } from "react";
import { useQuestions } from "./useQuestions";

interface UseQuizHook {
  results: string[] | null;
  question: string;
  handleAnswer: (answer: number) => void;
}

export const useQuiz = (): UseQuizHook => {
  const [results, setResult] = useState<string[] | null>(null);
  const [question, handleAnswer] = useQuestions(setResult);

  return { results, question, handleAnswer };
};
