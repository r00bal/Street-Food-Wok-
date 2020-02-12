import styled from 'styled-components';
import { Button } from './Buttons'
import { elevation } from '../utilities';
import { headerFont, textFont } from '../utilities'

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
padding:2rem;
${elevation[0]};
`

const CardButton = styled(Button)`
&:hover {
 ${elevation[0]};
}
`

const CardHeader = styled.h2`
font-size: 2rem;
font-weight:400;
${headerFont};
`
const CardBody = styled.p`
font-size: 1.2rem;
font-weight:400;
margin-top: 0;
${textFont};
`

Card.CardHeader = CardHeader;

Card.CardBody = CardBody;

Card.CardButton = CardButton;