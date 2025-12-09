import React, { Component, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Keypad from "./components/keypad";
import Symbols from "./components/Symbols";
import DisplayArea from "./components/displayArea";
import { on } from "events";

export default function CalculatorMainPage() {
  const [display, setDisplay] = useState("");
  const [lastNum, setLastNum] = useState<number | null>(null);
  const [lastSign, setLastSign] = useState<string | null>(null);

  const onSymbolClick = (symbol: string) => {
    console.log("Symbol clicked:", symbol, display);
    const nn = parseInt(display);

    let newVal = `${nn}`;
    if (lastNum !== null) {
      console.log("nn: ", nn);

      console.log("lastNum: ", lastNum);
      console.log("lastSign: ", lastSign);
      newVal = eval(`${lastNum} ${lastSign} ${nn}`).toString();
    }
    console.log("Last Num:", lastNum, "Last Sign:", lastSign);
    console.log("Display before clearing:", display);
    setLastNum(parseFloat(newVal));
    setLastSign(symbol);
    // queue.push(display);
    // queue.push(symbol);
    // setQueue(queue);
    setDisplay(symbol === "=" ? newVal : "");
  };
  const onKeypadClick = (symbol: string) => {
    console.log("Keypad clicked:", symbol);
    setDisplay(display + symbol);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <DisplayArea value={display} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Symbols onClick={onSymbolClick} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Keypad onClick={onKeypadClick} />
        </Col>
      </Row>
    </Container>
  );
}
