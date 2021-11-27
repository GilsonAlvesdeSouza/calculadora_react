import React from "react";
import { BtnClear, Container, DivBtn, DivContent, Title } from "./style";

function Historic() {
  return (
    <Container>
      <DivContent>
        <Title>Histórico</Title>
      </DivContent>
      <DivBtn>
        <BtnClear>Apagar</BtnClear>
      </DivBtn>
    </Container>
  );
}

export default Historic;
