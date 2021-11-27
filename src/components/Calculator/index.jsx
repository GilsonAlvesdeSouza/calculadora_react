import { useState } from "react";
import { Container, Grid } from "./style";

function Calculator() {
  const [display, setDisplay] = useState("");
  const handleClickCal = (value) => {
    switch (value) {
      case "c":
        setDisplay("");
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "+":
      case "-":
      case "÷":
      case "x":
        setDisplay(display + value);
        break;
      case "=":
        let res = eval(display.replace("x", "*").replace("÷", "/"));
        setDisplay(res);
        break;
      default:
    }
  };
  const handleDisplayChange = (e) => {
    console.log(e.target.value);
    setDisplay(e.target.value);
  };
  return (
    <Container>
      <Grid>
        <input
          readOnly
          className="display"
          type="text"
          value={display}
          onChange={(e) => handleDisplayChange(e)}
        />
        <button className="grid-btn" onClick={() => handleClickCal("c")}>
          C
        </button>
        <button
          className="grid-btn btn-div"
          onClick={() => handleClickCal("÷")}
        >
          ÷
        </button>
        <button className="grid-btn" onClick={() => handleClickCal("x")}>
          X
        </button>
        <button
          className="grid-btn btn-minus"
          onClick={() => handleClickCal("-")}
        >
          -
        </button>
        <button className="grid-btn" onClick={() => handleClickCal("7")}>
          7
        </button>
        <button className="grid-btn" onClick={() => handleClickCal("8")}>
          8
        </button>
        <button className="grid-btn" onClick={() => handleClickCal("9")}>
          9
        </button>
        <button className="grid-btn btnSum" onClick={() => handleClickCal("+")}>
          +
        </button>
        <button className="grid-btn" onClick={() => handleClickCal("4")}>
          4
        </button>
        <button className="grid-btn" onClick={() => handleClickCal("5")}>
          5
        </button>
        <button className="grid-btn" onClick={() => handleClickCal("6")}>
          6
        </button>
        <button className="grid-btn" onClick={() => handleClickCal("1")}>
          1
        </button>
        <button className="grid-btn" onClick={() => handleClickCal("2")}>
          2
        </button>
        <button className="grid-btn" onClick={() => handleClickCal("3")}>
          3
        </button>
        <button
          className="grid-btn btnResult"
          onClick={() => handleClickCal("=")}
        >
          =
        </button>
        <button className="grid-btn btn0" onClick={() => handleClickCal("0")}>
          0
        </button>
      </Grid>
    </Container>
  );
}

export default Calculator;
