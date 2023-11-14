import React, { useState } from "react";
import CharTab from "../components/CharTab";
import Form from "../components/Form";
import Comment from "../components/Comment";
import styled from "styled-components";

function Home({ data, setData }) {
  const [char, setChar] = useState("woody");
  return (
    <>
      <CharTab char={char} setChar={setChar} />
      <Form data={data} setData={setData} />
      <div>
        {data
          .filter((comment) => comment.writedTo === char)
          .map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        {data.filter((comment) => comment.writedTo === char).length === 0 ? (
          <StDiv>첫번째 코멘트를 남겨주세요! 😆</StDiv>
        ) : null}
      </div>
    </>
  );
}

export default Home;

const StDiv = styled.div`
  background-color: black;
  color: white;
  padding: 15px;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 22px;
`;
