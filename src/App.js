import React from "react";
import Header from "./components/Header.js";
import SideBar from "./components/SideBar/index.js";
import GlobalStyle from "./theme/globalStyle.js";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <SideBar />
    </div>
  );
}

export default App;
