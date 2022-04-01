import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, sans-serif;
  }
  
  body {
    background: var(--background-body);
  }

  :root {
      // Colors
      --white-color: #FFF;
      --background-body: #ddd;
      --background-header: #000;
      --placeholder-color: #6C757D;
      --button-search: #5C636A;

      // Fonts
      --font-1: 1rem; // 16px
  }
`;
 
export default GlobalStyle;