import styled from "styled-components";

export const Container = styled.div`
  background-color: #DCEAF7;
  width: 400px;
  height: 375px;
  border-radius: 10px;
  margin: 10px;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 10px;

  .display {
    grid-column: 1 / spam 4;
    font-size: 40px;
    padding: 0px;
    text-align: right;
    width: 375px;
    background-color: #303006;
    color: #C9C9C3;
    border-radius: 10px;
  }

  .grid-btn {
    background-color: #363C3D;
    color: #FFF;
    text-align: center;
    border-radius: 10px;
    font-size: 16px;
    padding: 11.5px;
    :hover {
      opacity: 0.8;
    }
  }

  .btn-div {
    font-size: 30px;
  }

  .btn-minus {
    font-size: 30px;
  }

  .btnSum {
    grid-column: 4;
    grid-row: 3 / span 2;
  }

  .btnResult {
    grid-column: 4;
    grid-row: 5 / span 2;
  }

  .btn0 {
    grid-column: 1 / span 3;
    grid-row: 6;
  }
`;
