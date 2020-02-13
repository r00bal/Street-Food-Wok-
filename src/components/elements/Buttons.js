import styled from 'styled-components';
import { elevation, textFont, red, black } from '../utilities'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Link } from "gatsby"

const BUTTON_MODIFIERS = {
    small: () => `
    font-size: 1rem;
    padding: 3px 10px;
    `,

    black: () => `
    background-color: ${black};
    border: none;
    color: white;
    &:hover {
    background-color: ${red};
    }
    `,
    red: () => `
    border: none;
    font-weight:600;
    background-color: ${red};
    color: white;
    &:hover {
    background-color: ${black}
    }
    `,
    wide: () => `
    min-width:100%;
    `,
    D3: ({ active }) => `
    ${elevation[1]}
    transition: all 0.1s ease;
    ${active ? 'transform: translate3d(9px,9px,0)' : null};
    ${active ? 'box-shadow:none;' : null};
    &:hover {
        background-color: white;
        color: ${red};
        font-weight:700;
        }
    `,
}

export const AnchorTag = styled.a`
text-decoration: none;
cursor: pointer;
color: inherit;
`

export const Button = styled.button`
/* width: fit-content;
min-width:100px; */
padding: 10px 20px;
border: 2px solid black;
color: black;
font-size: 1.2rem;
font-weight:500;
cursor: pointer;
transition: all 0.3s ease;
text-transform: uppercase;
text-decoration: none;
${textFont};
&:hover {
    color: white;
    font-weight:700;
    background-color: black; 
}
&:focus {

}
&:focus-visible {
  outline: 3px solid red;
}
${applyStyleModifiers(BUTTON_MODIFIERS)};
`
export const LinkButton = Button.withComponent(Link);

export const AnchorTagButton = Button.withComponent(AnchorTag);
