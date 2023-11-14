import React, { useState } from "react";
import styled from "styled-components";
import CharTab from "../components/CharTab";
import { theme } from "../GlobalStyle";
import fakeData from "../shared/fakeData";
import Form from "../components/Form";
import Comment from "../components/Comment";

function Home({ data, setData }) {
  const [char, setChar] = useState("woody");
  return (
    <>
      <CharTab char={char} setChar={setChar} />
      <Form data={data} setData={setData} />
      <div>
        {data
          .filter((item) => item.writedTo === char)
          .map((item) => (
            <Comment item={item} key={item.id} />
          ))}
      </div>
    </>
  );
}

export default Home;
