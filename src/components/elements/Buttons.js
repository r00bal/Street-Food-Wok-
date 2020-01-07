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
    background-color: ${red};
    border: none;
    color: white;
    &:hover {
    background-color: ${black};
    }
    `,
    wide: () => `
    padding: 5px 100px;
    `,
    D3: () => `
    ${elevation[1]}
    transition: all 0.1s ease;
    &:hover {
        background-color: white;
        color: black;
        box-shadow:none;
        font-weight:500;
    transform: translate3d(9px,9px,0)
        }
    `,
}

export const Button = styled.button`
width: fit-content;
padding: 5px 15px;
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
// const InnerButton = styled.button`
//  outline: ${(props) => props.clicked ? 'none' : '1px solid blue'};
// `;

// const Button = ({ children, modifiers }) => {
//     const [clicked, isClicked] = useState(false);
//     return (
//         <InnerButton
//             modifiers={modifiers} onClick={() => isClicked(!clicked)} clicked={clicked}>
//             {children}
//         </InnerButton>
//     )
// }