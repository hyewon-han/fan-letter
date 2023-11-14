import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../GlobalStyle";

function Comment({ item }) {
  return (
    <Link to={`/detail/${item.id}`}>
      <CommentBox>
        <StImg src={item.avatar} />
        <div>
          <StP>{item.name}</StP>
          <p>{item.createdAt}</p>
          <p>
            {item.content.length > 40
              ? `${item.content.slice(0, 40)}...`
              : item.content}
          </p>
        </div>
      </CommentBox>
    </Link>
  );
}

export default Comment;

const CommentBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
  background-color: ${theme.pink};
  padding: 15px;
  border-radius: 10px;
  box-shadow: ${theme.boxShadow};
`;

const StImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: ${theme.boxShadow};
`;

const StP = styled.p`
  font-weight: 700;
`;
