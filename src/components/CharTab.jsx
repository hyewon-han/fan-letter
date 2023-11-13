import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { theme } from "../GlobalStyle";

function CharTab({ char, setChar }) {
  const [char1, setChar1] = useState("true");
  const [char2, setChar2] = useState("false");
  const [char3, setChar3] = useState("false");
  const [char4, setChar4] = useState("false");
  return (
    <StDiv>
      <StBtn
        onClick={() => {
          setChar1("true");
          setChar2("false");
          setChar3("false");
          setChar4("false");
          setChar("woody");
        }}
        clicked={char1}
      >
        WOODY
      </StBtn>
      <StBtn
        onClick={() => {
          setChar1("false");
          setChar2("true");
          setChar3("false");
          setChar4("false");
          setChar("buzz");
        }}
        clicked={char2}
      >
        BUZZ
      </StBtn>
      <StBtn
        onClick={() => {
          setChar1("false");
          setChar2("false");
          setChar3("true");
          setChar4("false");
          setChar("forky");
        }}
        clicked={char3}
      >
        FORKY
      </StBtn>
      <StBtn
        onClick={() => {
          setChar1("false");
          setChar2("false");
          setChar3("false");
          setChar4("true");
          setChar("bopeep");
        }}
        clicked={char4}
      >
        BO PEEP
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
