import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <StHeader>
        <Link to="/">
          <span>Fan Letter to Toy Story</span>
        </Link>
      </StHeader>
      <StLayout>{children}</StLayout>
      <StFooter>
        <span>copyright &copy; Fan Letter</span>
      </StFooter>
    </div>
  );
}

export default Layout;

const StHeader = styled.header`
  width: 100%;
  background-color: black;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 40px;
  font-size: 22px;
`;

const StFooter = styled.footer`
  width: 100%;
  background-color: black;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: 90vh;
`;
