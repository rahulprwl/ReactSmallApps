import { Col, Container, Row } from "react-bootstrap";
import CalcButton from "./CalcButton";
export default function Symbols({
  onClick,
}: {
  onClick: (symbol: string) => void;
}) {
  return (
    <Container fluid>
      <Row>
        <Col xs={1}>
          <CalcButton value="+" label="+" onClick={onClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="-" label="-" onClick={onClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="*" label="*" onClick={onClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="/" label="/" onClick={onClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="=" label="=" onClick={onClick} />
        </Col>
      </Row>
    </Container>
  );
}
