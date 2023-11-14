import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../GlobalStyle";

function Detail({ data, setData }) {
  const { id } = useParams();
  const comment = data.find((item) => item.id === id);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [textarea, setTextarea] = useState(comment.content);
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <CommentBox>
        <StImg src={comment.avatar} />
        <div>
          <p>{comment.name}</p>
          <p>To. {comment.writedTo}</p>
          <p>{comment.createdAt}</p>
          <StTextarea
            type="text"
            value={textarea}
            disabled={isInputDisabled}
            cols="40"
            rows="10"
            onChange={(e) => {
              setTextarea(e.target.value);
            }}
          />
        </div>
        <div>
          {isInputDisabled ? (
            <button
              onClick={() => {
                setIsInputDisabled(false);
              }}
            >
              수정
            </button>
          ) : null}
          {isInputDisabled ? null : (
            <button
              onClick={() => {
                if (textarea === comment.content) alert("수정사항이 없습니다.");
                else {
                  const result = window.confirm("이대로 수정하시겠습니까?");
                  if (result) {
                    data.find((item) => item.id === id).content = textarea;
                    navigate("/");
                  } else return;
                }
              }}
            >
              수정완료
            </button>
          )}
          {isInputDisabled ? (
            <button
              onClick={() => {
                const result = window.confirm("정말 삭제하시겠습니까?");
                if (result) {
                  setData(data.filter((item) => item.id !== id));
                  navigate("/");
                } else return;
              }}
            >
              삭제
            </button>
          ) : null}
        </div>
      </CommentBox>
    </>
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
  /* width: 200px;
  height: 200px;
  &:disabled {
  } */
`;
