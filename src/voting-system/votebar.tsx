const VoteBar = ({ percentage }: { percentage: number }) => {
  return (
    <div style={{ width: `${percentage}%` }} className="bg-danger">
      {percentage}%
    </div>
  );
};

export default VoteBar;
