import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    //COLORS
    --Home-Grey-1: rgba(33, 33, 33, 0.8);
    --Home-Grey-2: rgba(56,56,56, 0.8);
    --Home-Grey-3: rgba(164, 164, 164, 0.8);
    --Home-Grey-4: rgba(158, 158, 158, 0.8);
    --Home-Grey-5: rgba(241, 241, 241, 0.8);
    --About-Cyan-1: rgba(10, 58, 58, 0.8);
    --About-Cyan-2: rgba(24, 79, 79, 0.8);
    --About-Cyan-3: rgba(20, 150, 150, 0.8);
    --About-Cyan-4: rgba(70, 150, 150, 0.8);
    --About-Cyan-5: rgba(70, 255, 255, 0.8);
    --About-Cyan-Text-1: rgb(6, 74, 74);
    --About-Maroon-1: rgba(66, 11, 11, 0.8);
    --About-Maroon-2: rgba(69, 20, 20, 0.8);
    --About-Maroon-3: rgba(156, 21, 21, 0.8);
    --About-Maroon-4: rgba(150, 70, 70, 0.8);
    --About-Maroon-5: rgba(255, 73, 73, 0.8);
    --About-Maroon-Text-1: rgba(172, 97, 97, 0.8);
    --About-Purple-1: rgba(42, 11, 69, 0.8);
    --About-Purple-2: rgba(44, 19, 66, 0.8);
    --About-Purple-3: rgba(85, 23, 147, 0.8);
    --About-Purple-4: rgba(114, 73, 154, 0.8);
    --About-Purple-5: rgba(201, 65, 255, 0.8);
    --About-Purple-Text-1: rgba(143, 88, 164, 0.8);
    --About-SwampGreen-1: rgba(40, 71, 9, 0.8);
    --About-SwampGreen-2: rgba(43, 66, 18, 0.8);
    --About-SwampGreen-3: rgba(100, 171, 28, 0.8);
    --About-SwampGreen-4: rgba(115, 158, 72, 0.8);
    --About-SwampGreen-5: rgba(159, 255, 62, 0.8);
    --About-SwampGreen-Text-1: rgba(123, 159, 87, 0.8);
    --Projects-Orange-1: rgba(68, 37, 11, 0.8);
    --Projects-Orange-2: rgba(77, 46, 21, 0.8);
    --Projects-Orange-3: rgba(170, 93, 30, 0.8);
    --Projects-Orange-4: rgba(144, 99, 63, 0.8);
    --Projects-Orange-5: rgba(255, 147, 59, 0.8);
    --Contact-Yellow-1: rgba(67, 65, 12, 0.8);
    --Contact-Yellow-2: rgba(78, 76, 19, 0.8);
    --Contact-Yellow-3: rgba(175, 170, 32, 0.8);
    --Contact-Yellow-4: rgba(155, 152, 69, 0.8);
    --Contact-Yellow-5: rgba(255, 249, 65, 0.8);
    --Contact-DarkBlue-1: rgba(12, 14, 67, 0.8);
    --Contact-DarkBlue-2: rgba(20, 22, 88, 0.8);
    --Contact-DarkBlue-3: rgba(31, 36, 170, 0.8);
    --Contact-DarkBlue-4: rgba(72, 75, 164, 0.8);
    --Contact-DarkBlue-5: rgba(66, 73, 255, 0.8); 

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
