import React from "react";
import Header from "./components/Header.js";
import SideBar from "./components/SideBar/index.js";
import GlobalStyle from "./theme/globalStyle.js";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index.js";
import styled from "styled-components";
import { StoreProvider } from "./context/index.js";
import { reducer, initialState } from "./reducers";

function App() {
  return (
    <BrowserRouter>
      <StoreProvider reducer={reducer} initialState={initialState}>
        <GlobalStyle />
        <Header />
        <Main>
          <SideBar />
          <Routes />
        </Main>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;

const Main = styled.div`
  display: flex;
`;
