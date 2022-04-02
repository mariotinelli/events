import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", Helvetica, sans-serif;
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
      --primary-color: #0B5ED7;
      --success-color: #157347;
      --border-color: #bbb;

      // Fonts
      --font-1: 1rem; // 16px
      --font-2: 2rem; // 32px
      --font-3: 1.5rem; // 24px
  }
`;
 
export default GlobalStyle;