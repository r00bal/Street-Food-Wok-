import styled from 'styled-components';
import { textFont, grey } from '../utilities'
import { applyStyleModifiers, applyResponsiveStyleModifiers } from 'styled-components-modifiers'

const INPUT_MODIFIERS = {
   small: () => `
    font-size: 1rem;
    padding: 3px 10px;
    min-width:100px;
    `,
   greyBorder: () => `
    border: 2px solid ${grey};
    `,
   mobileFullWidth: () => `
     width:100%;
  `
}

export const Input = styled.input`
padding: 10px 20px;
border: 2px solid black;
color: black;
font-size: 1.5rem;
width: ${({ width }) => width ? width : `fit-content`};
min-width:180px;
font-weight:500;
cursor: pointer;
transition: all 0.3s ease;
text-transform: uppercase;
text-decoration: none;
${textFont};
${applyStyleModifiers(INPUT_MODIFIERS)};
${applyResponsiveStyleModifiers(INPUT_MODIFIERS)}
`

