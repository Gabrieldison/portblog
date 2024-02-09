import fonts from "google-fonts";
import { createGlobalStyle } from "styled-components";

fonts.add({
  Inter: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body {
    background: ${(props) => props.theme["background"]};
    -webkit-font-smoothing: antialiased;
  }

  buttom: {
   cursor: pointer;
   font-size: 1rem;
 };
`;
