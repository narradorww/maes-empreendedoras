import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --higlight: #21897E;
  --background: #E8FCC2;
  --white: #fff;
  --dark-green: #00241B;
  --dark-blue: #0A192F;
  --red-orange-color-wheel: #F6511D;


  --container: 100rem;

  --small: 1.5rem;
  --medium: 3rem;
  --large: 5rem;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

html, body, #__next {
  height: 100%;
  background: var(--background);
}

body{
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
export default GlobalStyle;
