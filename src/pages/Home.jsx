import React, { useState } from "react";
import styled from "styled-components";
import CharTab from "../components/CharTab";
import { theme } from "../GlobalStyle";
import fakeData from "../shared/fakeData";

function Home() {
  return (
    <>
      <CharTab />
      <StForm>
        <div>
          <label htmlFor="name">name</label>
          <input id="name" type="text" placeholder="Write your name" required />
        </div>
        <div>
          <label htmlFor="content">content</label>
          <input
            id="content"
            type="text"
            placeholder="Write your content"
            required
          />
        </div>
        <div>
          <label htmlFor="select">Whose fan are you?</label>
          <select id="select">
            <option value="woody">Woody</option>
            <option value="buzz">Buzz</option>
            <option value="forky">Forky</option>
            <option value="bopeep">Bopeep</option>
          </select>
        </div>
        <button>Submit</button>
      </StForm>
      <div>
        {fakeData
          .filter((item) => item.writedTo === "카리나")
          .map((item) => (
            <li>{item.content}</li>
          ))}
      </div>
    </>
  );
}

export default Home;

const StForm = styled.form`
  margin-top: 15px;
  background-color: ${theme.darkPink};
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
