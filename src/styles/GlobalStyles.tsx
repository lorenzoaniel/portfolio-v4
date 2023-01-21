import { createGlobalStyle, css } from "styled-components";
import normalizeStyle from "./normalizeStyle";

export const GlobalStyle = createGlobalStyle`
  * {
      //
    --defaultFont: 'Inter', sans-serif;
    --roboticFont: 'Rajdhani', sans-serif;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--defaultFont)
  }

  html {
    height: 100vh;
    width: 100vw;

    font-size: 62.5%;
    body {
      height: 100%;
      width: 100%;
      #root {
        height: inherit;
        width: inherit;
        font-size: 1.6rem
      }
    }
  }

`;
