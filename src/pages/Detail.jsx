import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../GlobalStyle";

function Detail({ data, setData }) {
  const { id } = useParams();
  const comment = data.find((item) => item.id === id);
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  return (
    <CommentBox>
      <StImg src={comment.avatar} />
      <div>
        <p>{comment.name}</p>
        <p>To. {comment.writedTo}</p>
        <p>{comment.createdAt}</p>
        <StTextarea
          type="text"
          value={comment.content}
          disabled={isInputDisabled}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setIsInputDisabled(!isInputDisabled);
          }}
        >
          수정
        </button>
        <button>삭제</button>
      </div>
    </CommentBox>
  );
}

export default Detail;

const CommentBox = styled.div`
  display: flex;
  margin: 10px;
  background-color: ${theme.blue};
`;

const StImg = styled.img`
  width: 100px;
  height: 100px;
`;

const StTextarea = styled.textarea`
  width: 200px;
  height: 200px;
  &:disabled {
  }
`;
