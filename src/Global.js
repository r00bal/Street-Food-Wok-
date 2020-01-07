import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { textFont } from './components/utilities'

const GlobalStyles = createGlobalStyle`
${normalize()};
@import url('https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Fredericka+the+Great&display=swap');
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 75px 0 0;
  ${textFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}




`


export default GlobalStyles;