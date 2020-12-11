import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
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
