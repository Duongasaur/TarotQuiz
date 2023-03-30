import React from "react";
import { Navigate } from "react-router-dom";
import { useQuiz } from "./hooks/index";
import QuizResult from "./QuizResult";
import { Prompt } from "./prompt";
import Glass from "../glass/index";
import styled from "styled-components";

const DivGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
`;

const DivTitle = styled.div<{ isTop: boolean }>`
  background-color: rgba(244, 244, 244, 0.7);
  border: 1px solid black;
  ${({ isTop }) => isTop && `background-color: rgba(255, 253, 128, 0.8)`}
`;

const DivScore = styled.div`
  background-color: rgba(200, 200, 200, 0.6);
  border: 1px solid black;
`;

const ScoresDebugger = ({
  scores,
  topScores
}: {
  scores: Record<string, number>;
  topScores: string[];
}) => (
  <DivGrid>
    {Object.entries(scores).map(([card, score]) => (
      <div>
        <DivTitle isTop={topScores.includes(card)}>{card}</DivTitle>
        <DivScore>{score}</DivScore>
      </div>
    ))}
  </DivGrid>
);

const TarotQuiz: React.FC = () => {
  // const { result, question, scores, topScores, handleAnswer } = useQuiz();
  const { results, question, handleAnswer } = useQuiz();

  if (results) {
    const cards = results.join("+").replace(/ /g, "_");
    return <Navigate to={`/quiz/results/${cards}`} />;
  }

  return (
    <div>
      {/* <ScoresDebugger scores={scores} topScores={topScores} /> */}
      <Glass>
        <Prompt question={question} handleAnswer={handleAnswer} />
      </Glass>
    </div>
  );
};

export { QuizResult };
export default TarotQuiz;
