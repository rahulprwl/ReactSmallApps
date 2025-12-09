import { Button } from "react-bootstrap";

export default function CalcButton({
  label,
  value,
  onClick,
}: {
  label: string;
  value: string;
  onClick: (value: string) => void;
}) {
  return (
    <Button onClick={() => onClick(value)} variant="secondary">
      {label}
    </Button>
  );
}
