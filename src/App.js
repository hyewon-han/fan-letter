import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle";
import Router from "./shared/router";
import { useState } from "react";
import fakeData from "./shared/fakeData";

function App() {
  const [data, setData] = useState([...fakeData]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router data={data} setData={setData} />
      </ThemeProvider>
    </>
  );
}

export default App;
