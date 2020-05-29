import styled from 'styled-components';
import { textFont, grey } from '../utilities'
import { applyStyleModifiers } from 'styled-components-modifiers'

const SELECT_MODIFIERS = {
    small: () => `
    font-size: 1rem;
    padding: 3px 10px;
    `
}

export const Select = styled.select`
width:100%;
height:50px;
border: 2px solid ${grey};
font-size: 1.2rem;
font-weight:700;
cursor: pointer;
text-transform: uppercase;
text-decoration: none;
${textFont};
text-align: center;
text-align-last:center;
background:black;
color:white;
${applyStyleModifiers(SELECT_MODIFIERS)};
`

