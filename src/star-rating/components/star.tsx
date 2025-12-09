import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Star = ({ filled }: { filled: boolean }) => {
  return <div> {filled ? <FaStar /> : <CiStar />}</div>;
};

export default Star;
