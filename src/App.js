import React from "react";
import Header from "./components/Header.js";
import SideBar from "./components/SideBar/index.js";
import GlobalStyle from "./theme/globalStyle.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <SideBar />
    </BrowserRouter>
  );
}

export default App;
