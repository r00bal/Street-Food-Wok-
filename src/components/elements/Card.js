import styled from 'styled-components';
import { animated } from 'react-spring'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Button, LinkButton } from './Buttons'
import { elevation, above } from '../utilities';
import { headerFont, textFont, grey, red, green } from '../utilities'

const CARD_MODIFIERS = {
    transparent: () => `
 opacity:0.3;
 `,
}


const CARDHEADER_MODIFIERS = {
    textFont: () => `
 ${textFont};
 `,
    red: () => `
 color: ${red};
 `,
    green: () => `
 color: ${green};
 `
}

export const Card = styled.div`
display: flex;
flex-direction: column;
/* justify-content:center; */

align-items:center;
padding: 2rem 0 2rem 0;
${elevation[0]};


`

const CardMenu = styled.div`
width:100%;
height:100px;
display:flex;
flex-wrap: wrap;
justify-content: space-around;
align-items:center;
padding:0 0 2rem 0;
border-bottom: 1px solid ${grey};
`
const CardRow = styled.div`
display: -webkit-box;
display: flex;
flex-wrap: wrap;
width:100%;
`

const CardRowItem = styled.div`
position: relative;
padding: 30px 55px 15px;
text-align: center;
width:100%;
transition: all .5s ease;
&:after {
 content: "";
    width: 80%;
    height: 1px;
    background-color: ${grey};
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: 0px auto;
}
${above.med`
flex: 0 0 50%;
max-width:50%;
    `}
    ${applyStyleModifiers(CARD_MODIFIERS)};
`


const CardButton = styled(Button)`
&:hover {
 ${elevation[0]};
}
`

const CardLinkButton = styled(LinkButton)`
&:hover {
 ${elevation[0]};
}
`

const CardHeader = styled(animated.h2)`
font-size: 2rem;
padding: 0 2rem 0 2rem;
font-weight:400;
transition: all .2s ease;
${headerFont};
${applyStyleModifiers(CARDHEADER_MODIFIERS)};
`


const CardBody = styled(animated.p)`
padding: 0 2rem 0 2rem;
font-size: 1.2rem;
font-weight:400;
margin-top: 0;
${textFont};
`

Card.CardHeader = CardHeader;

Card.CardBody = CardBody;

Card.CardMenu = CardMenu;

Card.CardRow = CardRow;

Card.CardRowItem = CardRowItem;

Card.CardButton = CardButton;

Card.CardLinkButton = CardLinkButton;