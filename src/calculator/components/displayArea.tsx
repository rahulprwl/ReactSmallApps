import { Card } from "react-bootstrap";

export default function DisplayArea({ value }: { value: string }) {
  return (
    <Card>
      <Card.Body>{value}</Card.Body>
    </Card>
  );
}
