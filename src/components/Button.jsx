import React from "react";
import styled from "styled-components";
import { theme } from "../GlobalStyle";

function Button({ value }) {
  return <StBtn>{value}</StBtn>;
}

export default Button;

const StBtn = styled.button`
  height: 50px;
  width: 100px;
  border: none;
  transition: all 0.2s ease-in-out;
  background-color: ${theme.purple};
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
