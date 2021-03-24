import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Wemakeprice-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Wemakeprice-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  } 
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Wemakeprice-Bold', sans-serif;
  }
  h1,h2,h3,h4,h5,h6{
    padding: 0;
  }
  li,ol,ul {
    padding: 0;
    list-style: none
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;
export default GlobalStyle;
