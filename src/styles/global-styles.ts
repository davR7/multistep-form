import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {margin: 0; padding: 0; border: none; outline: none; font-size: 100%; 
    box-sizing: border-box;}
  ul {list-style: none}
  a {text-decoration: none}
  img {width: 100%}
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
    background: url('/tech.jpeg'); background-repeat: no-repeat; color: #fff;
  }
`;
