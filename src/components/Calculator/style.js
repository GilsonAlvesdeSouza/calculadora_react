import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
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
    height: 60px;
    font-size: 25px;
    padding: 0px;
    text-align: right;
  }

  .grid-btn {
    background-color: #99989a;
    text-align: center;
    padding: 5px;
    font-size: 30px;
    :hover {
      opacity: 0.8;
    }
  }

  .grid-btn {
    background-color: #99989a;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
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
