import React from "react";
import { Container } from "./AppStyle";
import { Calculator, Historic } from "./components";

function App() {
  return (
    <Container>
      <Calculator />
      <Historic />
    </Container>
  );
}

export default App;
