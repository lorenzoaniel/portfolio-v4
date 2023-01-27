import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    //COLORS
    --About-Cyan-1: rgba(20, 20, 20, 0.5);
    --About-Cyan-2: rgba(10, 80, 80, 0.5);
    --About-Cyan-3: rgba(20, 150, 150, 0.5);
    --About-Cyan-4: rgba(70, 150, 150, 0.7);
    --About-Cyan-5: rgba(70, 255, 255, 0.5);
    --About-Maroon-1: rgba(80, 10, 10, 1);
    --About-Maroon-2: rgba(70, 20, 20, 1);
    --About-Maroon-3: rgba(255, 70, 70, 0.5);

    //FONTS
    --defaultFont: 'Inter', sans-serif;
    --roboticFont: 'Rajdhani', sans-serif;

    /* * * */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--defaultFont);

    scrollbar-width: none;
  }

  html {
    height: clamp(66.7rem, 100%, 100vh);
    width: 100%;

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
