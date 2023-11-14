import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle";
import Router from "./shared/router";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/fakeData.json");
      const json = await response.json();
      setData([...json]);
    }
    fetchData();
  }, []);

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
