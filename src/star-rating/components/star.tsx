import { StarFill, StarHalf } from "react-bootstrap-icons";

const Star = ({ filled }: { filled: boolean }) => {
  return <div> {filled ? <StarFill /> : <StarHalf />}</div>;
};

export default Star;
