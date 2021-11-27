import React from "react";
import { Container, Grid } from "./style";

function Calculator() {
  return (
    <Container>
      <Grid>
        <input className="display"/>
        <button className="grid-btn btnc">C</button>
        <button className="grid-btn btnDiv">/</button>
        <button className="grid-btn btnX">X</button>
        <button className="grid-btn btn-">-</button>
        <button className="grid-btn btn7">7</button>
        <button className="grid-btn btn8">8</button>
        <button className="grid-btn btn9">9</button>
        <button className="grid-btn btnSum">+</button>
        <button className="grid-btn btn4">4</button>
        <button className="grid-btn btn5">5</button>
        <button className="grid-btn btn6">6</button>
        <button className="grid-btn btn7">1</button>
        <button className="grid-btn btn8">2</button>
        <button className="grid-btn btn9">3</button>
        <button className="grid-btn btnResult">=</button>
        <button className="grid-btn btn0">0</button>
      </Grid>
    </Container>
  );
}

export default Calculator;
