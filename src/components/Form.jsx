import React, { useState, useRef } from "react";
import styled from "styled-components";
import { theme } from "../GlobalStyle";
import { v4 as uuidv4 } from "uuid";

function Form({ data, setData }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const id = uuidv4();
  const selectRef = useRef();

  const selectChar = () => {
    const selectedChar = selectRef.current.value;
    return selectedChar;
  };
  const submitComment = (e) => {
    e.preventDefault();
    const date = Date.now();
    const commentObj = {
      createdAt: date,
      name,
      avatar:
        "https://tse2.mm.bing.net/th?id=OIP.Nen6j3vBZdl8g8kzNfoEHQAAAA&pid=Api&P=0&h=220",
      content,
      writedTo: selectChar(),
      id,
    };
    setData([commentObj, ...data]);
    setName("");
    setContent("");
  };
  return (
    <StForm onSubmit={submitComment}>
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          placeholder="Write your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
          maxLength={10}
        />
      </div>
      <div>
        <label htmlFor="content">content</label>
        <input
          id="content"
          type="text"
          placeholder="Write your content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
          maxLength={50}
        />
      </div>
      <div>
        <label htmlFor="select">Whose fan are you?</label>
        <select id="select" onChange={selectChar} ref={selectRef}>
          <option value="woody">Woody</option>
          <option value="buzz">Buzz</option>
          <option value="forky">Forky</option>
          <option value="bopeep">Bopeep</option>
        </select>
      </div>
      <button>Submit</button>
    </StForm>
  );
}

export default Form;

const StForm = styled.form`
  margin-top: 15px;
  background-color: ${theme.darkPink};
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
