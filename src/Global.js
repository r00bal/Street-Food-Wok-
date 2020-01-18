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

html, body {
  height: 100%;
}

body {
  height: 100%;
  max-width: 100vw;
    overflow-x: hidden;
    font-size:16px;
  ${textFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  #___gatsby {
     display: flex;
    height: 100%; 
  flex-direction: column; 
    #gatsby-focus-wrapper {
      display: flex;
      height: 100%;
  flex-direction: column;
    }
  
 
  }

  }





`


export default GlobalStyles;