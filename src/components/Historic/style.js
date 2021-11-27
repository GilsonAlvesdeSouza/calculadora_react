import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 360px;
  height: 355px;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`;

export const Title = styled.p`
  margin-top: -2px;
`;

export const DivContent = styled.div`
  overflow: auto;
`;

export const DivBtn = styled.div`
  justify-content: flex-end;
  display: flex;
`;

export const BtnClear = styled.button`
  width: 100px;
  text-align: center;
  cursor: pointer;
`;
