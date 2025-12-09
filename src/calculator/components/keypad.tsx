import { Col, Container, Row } from "react-bootstrap";
import CalcButton from "./CalcButton";
export default function Keypad({
  onClick,
}: {
  onClick: (symbol: string) => void;
}) {
  const onButtonClick = (val: string) => {
    onClick(val);
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={1}>
          <CalcButton value="7" label="7" onClick={onButtonClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="8" label="8" onClick={onButtonClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="9" label="9" onClick={onButtonClick} />
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <CalcButton value="4" label="4" onClick={onButtonClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="5" label="5" onClick={onButtonClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="6" label="6" onClick={onButtonClick} />
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <CalcButton value="1" label="1" onClick={onButtonClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="2" label="2" onClick={onButtonClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="3" label="3" onClick={onButtonClick} />
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <CalcButton value="0" label="0" onClick={onButtonClick} />
        </Col>
        <Col xs={1}>
          <CalcButton value="." label="." onClick={onButtonClick} />
        </Col>
      </Row>
    </Container>
  );
}
