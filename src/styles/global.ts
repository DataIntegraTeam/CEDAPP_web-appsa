import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f7f7f7;
    --green: #007565;
    --white: #FFFFFF;
    --caixaLogin: #f8f8f8;
    /* --text-title: #363f5f;
    --text-body: #969cb3; */
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (min-width: 1080px) {
      font-size: 93.75%; // 15px      
    }
    @media (min-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`