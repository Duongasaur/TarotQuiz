import { useRef, useState } from 'react';
import { CARDS, QUESTIONS } from '../resource/index';

type OriginalQuestion = {
  set: string;
  variations: string[];
  cards: string[];
};

type SplitQuestion = {
  question: string;
  cards: string[];
};

const shuffleArray = <T>(array: T[]): T[] => {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const getRandomVariation = (variations: string[]): [string, string[]] => {
  const index = Math.floor(Math.random() * variations.length);
  const selected = variations[index];
  const remaining = variations.filter((v, i) => i !== index);
  return [selected, remaining];
};

const generateSets = (variations: string[], cards: string[]): [SplitQuestion, SplitQuestion] => {
  const [variation1, remainingVariations] = getRandomVariation(variations);
  const [variation2] = getRandomVariation(remainingVariations);

  return [
    { question: variation1, cards },
    { question: variation2, cards },
  ];
};

const splitAndRandomizeQuestions = (
  questions: OriginalQuestion[]
): { set1: SplitQuestion[]; set2: SplitQuestion[] } => {
  const shuffledQuestions = shuffleArray(questions);

  const [set1, set2] = shuffledQuestions.reduce(
    ([set1, set2]: [SplitQuestion[], SplitQuestion[]], question) => {
      const [split1, split2] = generateSets(question.variations, question.cards);
      return [
        [...set1, split1],
        [...set2, split2],
      ];
    },
    [[], []]
  );

  return { set1, set2 };
};
type CardScores = { [key: string]: number };

function getHighestScoringCards(scores: CardScores): string[] {
  const maxScore = Math.max(...Object.values(scores));
  const highestScoringCards = Object.keys(scores).filter(card => scores[card] === maxScore);
  return highestScoringCards;
}

function getHighestCardScore(scores: CardScores): number {
  return Math.max(...Object.values(scores));
}

function measureResults(scores: CardScores) {
  const cards = getHighestScoringCards(scores);
  if (cards.length < 3) {
    return cards;
  }

  if (getHighestCardScore(scores) < 1) {
    return [CARDS.THE_FOOL];
  } else {
    return [CARDS.THE_WORLD];
  }
}

interface QuizIteration {
  question: string;
  handleAnswer: (answer: number) => void;
}

function* quizDispenser(
  questionSets: OriginalQuestion[]
): Generator<QuizIteration, string[], number> {
  const { set1, set2 } = splitAndRandomizeQuestions(questionSets);
  const cardScores: CardScores = {};

  const handleAnswer = (answer: number, cards: string[]) => {
    cards.forEach(card => {
      cardScores[card] = (cardScores[card] || 0) + answer;
    });
  };

  for (const { question, cards } of set1) {
    const _answer: number = yield {
      question,
      handleAnswer: (answer: number) => handleAnswer(answer, cards),
    };
  }

  const filters = getHighestScoringCards(cardScores);
  const checkForCard = (card: string) => filters.includes(card);
  const set2Filtered = set2.filter(({ cards }) => cards.some(checkForCard));

  for (const { question, cards } of set2Filtered) {
    const _answer: number = yield {
      question,
      handleAnswer: (answer: number) => handleAnswer(answer, cards),
    };
  }

  return measureResults(cardScores);
}

export const useQuestions = (
  complete: (result: string[]) => void
): [string, (answer: number) => void] => {
  const questionsIterator = useRef(quizDispenser(QUESTIONS)).current;
  const [currentQuestion, setCurrentQuestion] = useState<QuizIteration | string[]>(
    () => questionsIterator.next().value
  );

  const nextQuestion = () => {
    const { value: question, done } = questionsIterator.next();

    if (done) {
      return complete(question as string[]);
    }

    setCurrentQuestion(question);
  };

  const answerQuestion = (answer: number) => {
    if ('handleAnswer' in currentQuestion) {
      currentQuestion.handleAnswer(answer);
    }
    nextQuestion();
  };

  return [(currentQuestion as unknown as QuizIteration).question, answerQuestion];
};
