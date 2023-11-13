import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    box-sizing: border-box;
    
    background-image: url("https://www.hdwallpapers.in/download/toy_story_4_2019-HD.jpg");
    background-size: cover;
  }
`;

export const theme = {
  yellow: "#fcbb6d",
  pink: "#d8737f",
  darkPink: "#ab6c82",
  purple: "#685d79",
  blue: "#475c7a",
};

export default GlobalStyle;
