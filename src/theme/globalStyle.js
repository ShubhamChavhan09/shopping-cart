import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: #F2F2F2;
}
`;

export default GlobalStyle;
