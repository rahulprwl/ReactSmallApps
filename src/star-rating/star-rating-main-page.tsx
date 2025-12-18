import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Star from "./components/star";

export default function StarRatingMainPage() {
  const [stars, setStars] = useState(0);
  function starClicked(arg0: number): void {
    setStars(arg0);
  }

  return (
    <Container fluid>
      <Row>
        <h3>Star Rating Main Page</h3>
      </Row>
      <Row>
        <Col onClick={() => starClicked(1)}>
          <Star filled={stars >= 1} />
        </Col>
        <Col onClick={() => starClicked(2)}>
          <Star filled={stars >= 2} />
        </Col>
        <Col onClick={() => starClicked(3)}>
          <Star filled={stars >= 3} />
        </Col>
        <Col onClick={() => starClicked(4)}>
          <Star filled={stars >= 4} />
        </Col>
        <Col onClick={() => starClicked(5)}>
          <Star filled={stars >= 5} />
        </Col>
      </Row>
    </Container>
  );
}
