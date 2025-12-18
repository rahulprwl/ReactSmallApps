import VoteBar from "./votebar";

const VoteOption = ({
  optionText,
  optionId,
  percentage,
  onClick,
}: {
  optionText: string;
  percentage: number;
  optionId: number;
  onClick: (id: number) => void;
}) => {
  return (
    <button className="option" onClick={() => onClick(optionId)}>
      <VoteBar percentage={percentage} />
      <div className="option-text">{optionText}</div>
    </button>
  );
};

export default VoteOption;
