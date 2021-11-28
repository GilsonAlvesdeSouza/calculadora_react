import { useEffect, useState } from "react";
import { useStateValue } from "../../contexts/StateContext";
import { BtnClear, Container, DivBtn, DivContent, Title } from "./style";

function Historic() {
  const [state, dispatch] = useStateValue();
  const [list, setList] = useState(state.historic);

  useEffect(() => {
    setList(state.historic);
  }, [state]);

  const handleList = list.map((hist, key) => {
    return <li key={`hist-${key}`}>{hist}</li>;
  });

  return (
    <Container>
      <DivContent>
        <Title>Histórico</Title>
        <ul>{handleList}</ul>
      </DivContent>
      <DivBtn>
        <BtnClear onClick={() => dispatch({ type: "clearHistoric" })}>
          Apagar
        </BtnClear>
      </DivBtn>
    </Container>
  );
}

export default Historic;
