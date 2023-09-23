import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  body {
    min-height: 100vh;
    background: #ffffff;
    font-family: 'Roboto', sans-serif;
    color: #333;
    overflow-x: hidden;
  }
  
  a {
    color: #333;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    font-size: 1.25rem;
  }

  .btnSalvar {
    @media(max-width: 600px) {
      margin-top: 1rem;
    }
  }

  .titulo {
    @media(max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  .area-grafico {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    padding: 1rem;
  }

  .tr-body {
    height: 40px;
    background: red;
  }


  .paragrafo-campanha{
    width: max-content;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #25804F;
    padding: 1rem;
    margin: auto 0 1rem auto;
  }
`;

export default GlobalStyles;
