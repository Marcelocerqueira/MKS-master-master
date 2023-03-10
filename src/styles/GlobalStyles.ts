import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    /* min-height: 100%; */
    /* background: var(--color-primary); */
  }
  h1,h4 {
    font-weight: 600;
    font-size: 20px;
  }
  h4 {
    font-weight: 600;
    font-size: 15px;
  }
  h2 {
    font-weight: 600;
    font-size: 15px;
  }
  *, button, input,h2 {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Helvetica,Helvetica,Roboto,Arial,sans-serif;
  }
  :root {
    font-size: 62.5%;
    --color-primary: #F5F5F5;
    --color-black: #333;
    --color-white: #FFF;
    --color-gray: #666;
    --color-blue: ##00bfff;
    --color-green: #00a650;

    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }

  
`;
