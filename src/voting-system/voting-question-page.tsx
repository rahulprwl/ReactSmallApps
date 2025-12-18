import { useState } from "react";
import VoteOption from "./option";

const VotingQuestionPage = () => {
  const [votes, setVotes] = useState<Record<number, number>>({});
  const onVoteCast = (optionId: number) => {
    setVotes((prevVotes) => {
      const newVotes = { ...prevVotes };
      newVotes[optionId] = (newVotes[optionId] || 0) + 1;
      return newVotes;
    });
  };
  return (
    <div>
      <h2>{question.text}</h2>
      {question.options.map((option) => {
        const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
        const optionVotes = votes[option.id] || 0;
        const percentage =
          totalVotes > 0 ? (optionVotes / totalVotes) * 100 : 0;
        return (
          <VoteOption
            key={option.id}
            optionText={option.text}
            optionId={option.id}
            percentage={percentage}
            onClick={onVoteCast}
          />
        );
      })}
    </div>
  );
};
export default VotingQuestionPage;

const question = {
  text: "What is your favorite programming language?",
  options: [
    { id: 1, text: "JavaScript" },
    { id: 2, text: "Python" },
    { id: 3, text: "Java" },
    { id: 4, text: "C#" },
  ],
};
