import React, { useState, useRef } from "react";
import styled from "styled-components";
import CharTab from "../components/CharTab";
import { theme } from "../GlobalStyle";
import fakeData from "../shared/fakeData";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [char, setChar] = useState("woody");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState([...fakeData]);
  const id = uuidv4();
  const selectRef = useRef();

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
    setData([...data, commentObj]);
  };
  const selectChar = () => {
    const selectedChar = selectRef.current.value;
    return selectedChar;
  };
  return (
    <>
      <CharTab char={char} setChar={setChar} />
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
      <StDiv>
        {data
          .filter((item) => item.writedTo === char)
          .map((item) => (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <CommentBox>
                <StImg src={item.avatar} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.createdAt}</p>
                  <p>
                    {item.content.length > 40
                      ? `${item.content.slice(0, 40)}...`
                      : item.content}
                  </p>
                </div>
              </CommentBox>
            </Link>
          ))}
      </StDiv>
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

const StDiv = styled.div``;

const CommentBox = styled.div`
  display: flex;
  margin: 10px;
  background-color: ${theme.blue};
`;

const StImg = styled.img`
  width: 100px;
  height: 100px;
`;
