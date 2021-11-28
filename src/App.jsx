import React from "react";
import { Container } from "./AppStyle";
import { Calculator, Historic } from "./components";
import { StateProvider } from "./contexts/StateContext";

function App() {
  return (
    <StateProvider>
      <Container>
        <Calculator />
        <Historic />
      </Container>
    </StateProvider>
  );
}

export default App;
