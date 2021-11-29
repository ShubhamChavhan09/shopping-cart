import React from "react";
import Header from "./components/Header.js";
import SideBar from "./components/SideBar/index.js";
import GlobalStyle from "./theme/globalStyle.js";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index.js";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Main>
        <SideBar />
        <Routes />
      </Main>
    </BrowserRouter>
  );
}

export default App;

const Main = styled.div`
  display: flex;
`;
