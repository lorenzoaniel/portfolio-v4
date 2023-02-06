import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    //COLORS
    --Home-Grey-1: rgba(33, 33, 33, 1);
    --Home-Grey-2: rgba(56,56,56,1);
    --Home-Grey-3: rgba(241,241,241,1);
    --About-Cyan-1: rgba(20, 50, 50, 0.5);
    --About-Cyan-2: rgba(10, 80, 80, 0.5);
    --About-Cyan-3: rgba(20, 150, 150, 0.5);
    --About-Cyan-4: rgba(70, 150, 150, 0.7);
    --About-Cyan-5: rgba(70, 255, 255, 0.5);
    --About-Cyan-Text-1: rgb(6, 74, 74);
    --About-Maroon-1: rgba(80, 10, 10, 1);
    --About-Maroon-2: rgba(70, 20, 20, 1);
    --About-Maroon-3: rgba(255, 70, 70, 0.5);
    --About-Maroon-4: rgba(150, 70, 70, 0.8);
    --About-Maroon-5: rgba(100, 40, 40, 0.8);
    --About-Maroon-Text-1: rgba(172, 97, 97, 1);
    --About-Purple-1: rgba(51, 30, 71, 1);
    --About-Purple-2: rgba(21, 12, 29, 1);
    --About-Purple-3: rgba(104, 49, 158, 0.5);
    --About-Purple-4: rgba(99, 44, 154, 0.8);
    --About-Purple-5: rgba(73, 6, 100, 0.8);
    --About-Purple-Text-1: rgba(143, 88, 164, 1);
    --About-SwampGreen-1: rgba(35, 50, 20, 1);
    --About-SwampGreen-2: rgba(32, 44, 19, 1);
    --About-SwampGreen-3: rgba(98, 156, 39, 0.5);
    --About-SwampGreen-4: rgba(95, 157, 32, 0.8);
    --About-SwampGreen-5: rgba(49, 89, 10, 0.8);
    --About-SwampGreen-Text-1: rgba(123, 159, 87, 0.8);
    --Projects-Orange-1: rgba(112, 58, 14, 1);
    --Projects-Orange-2: rgba(130, 77, 34, 1);
    --Projects-Orange-3: rgba(255, 149, 62, 1);
    --Home-Grey-1: rgba(33, 33, 33, 1);
    --Home-Grey-2: rgba(56,56,56,1);
    --Home-Grey-3: rgba(241,241,241,1);
    --Home-Grey-1: rgba(33, 33, 33, 1);
    --Home-Grey-2: rgba(56,56,56,1);
    --Home-Grey-3: rgba(241,241,241,1);

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
