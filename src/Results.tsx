import { useParams, Navigate } from "react-router-dom";
import { CARDS, RESULTS } from "./TarotQuiz/resource/index";
import QuizResult from "./TarotQuiz/QuizResult";
import Glass from "./glass/index";
import styled from "styled-components";

const MainResults = styled.main`
  max-height: 100%;
  overflow-y: auto;
`;

const allCards: string[] = Object.values(CARDS);

const Results = () => {
  const { cards } = useParams<{ cards: string }>();

  const results: string[] = cards
    .replace(/_/g, " ")
    .split("+")
    .filter((card) => allCards.includes(card));

  if (results.length < 1) {
    return <Navigate to="/quiz" />;
  }

  return (
    <MainResults>
      {results.map((cardIn) => (
        <Glass key={cardIn}>
          <QuizResult result={RESULTS.find(({ card }) => card === cardIn)} />
        </Glass>
      ))}
    </MainResults>
  );
};

export default Results;
