import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle";
import Router from "./shared/router";
import { useState } from "react";
import { Context } from "./Context";
import fakeData from "./fakeData.json";

function App() {
  const [data, setData] = useState(fakeData);

  return (
    <Context.Provider value={{ data, setData }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
