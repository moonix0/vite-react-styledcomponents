import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after{
      box-sizing: border-box;
  }

  *{
    margin: 0;
  }

  html, body{
    height: 100%;
  }

  body{
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  ul, ol{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  img, svg{
    width: 100%;
    height: 100%;
  }
`;

function GlobalStyle() {
  return <GlobalStyles />;
}

export default GlobalStyle;
