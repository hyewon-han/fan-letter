import React from "react";
import styled from "styled-components";
import { theme } from "../GlobalStyle";
import Button from "./Button";

function CharTab({ char, setChar }) {
  const selectChar = (CharName) => {
    setChar(CharName);
  };
  return (
    <StDiv>
      <StBtn
        onClick={() => selectChar("woody")}
        clicked={(char === "woody").toString()}
      >
        WOODY
      </StBtn>
      <StBtn
        onClick={() => selectChar("buzz")}
        clicked={(char === "buzz").toString()}
      >
        BUZZ
      </StBtn>
      <StBtn
        onClick={() => selectChar("forky")}
        clicked={(char === "forky").toString()}
      >
        FORKY
      </StBtn>
      <StBtn
        onClick={() => selectChar("bopeep")}
        clicked={(char === "bopeep").toString()}
      >
        BOPEEP
      </StBtn>
    </StDiv>
  );
}

export default CharTab;

const StBtn = styled.button`
  height: 50px;
  width: 100px;
  border: none;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.clicked === "true" ? theme.yellow : theme.blue};
  color: ${(props) => (props.clicked === "true" ? "black" : "white")};
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;

const StDiv = styled.div`
  padding: 15px;
  background-color: ${theme.pink};
  display: flex;
  gap: 15px;
  border-radius: 10px;
`;
