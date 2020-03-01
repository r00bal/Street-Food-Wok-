import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Button, LinkButton } from './Buttons'
import { elevation } from '../utilities';
import { headerFont, textFont, grey } from '../utilities'

const CARD_MODIFIERS = {
 small: () => `
 font-size: 1rem;
 padding: 3px 10px;
 `,
}

export const Card = styled.div`
display: flex;
flex-direction: column;
/* justify-content:center; */
align-items:center;
padding: 2rem 0 2rem 0;
${elevation[0]};
${applyStyleModifiers(BUTTON_MODIFIERS)};
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

const CardHeader = styled.h2`
font-size: 2rem;
padding: 0 2rem 0 2rem;
font-weight:400;
${headerFont};
`
const CardBody = styled.p`
padding: 0 2rem 0 2rem;
font-size: 1.2rem;
font-weight:400;
margin-top: 0;
${textFont};
`

Card.CardHeader = CardHeader;

Card.CardBody = CardBody;

Card.CardMenu = CardMenu;

Card.CardButton = CardButton;

Card.CardLinkButton = CardLinkButton;