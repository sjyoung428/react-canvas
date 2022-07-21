import styled from "styled-components";

const CircleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ColorCircle = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

export const S = {
  CircleContainer,
  ColorCircle,
};
