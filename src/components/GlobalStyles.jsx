import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  body{
    background-color: #faff6f;
  }
`;
export default GlobalStyles;