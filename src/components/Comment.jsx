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
  );
}

export default Comment;

const CommentBox = styled.div`
  display: flex;
  margin: 10px;
  background-color: ${theme.blue};
`;

const StImg = styled.img`
  width: 100px;
  height: 100px;
`;
