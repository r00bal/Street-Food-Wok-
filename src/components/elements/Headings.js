
import styled from 'styled-components';
import { headerFont, transparentWhite, black, above } from '../utilities'

export const Heading = styled.h1`

font-size: 3rem;
font-weight:400;
${headerFont};
color:${black};
padding:15px 45px;
width: 100%;
background: ${transparentWhite};
text-transform: uppercase;
${({ animation }) => animation ? animation : ``}
${above.small`
     font-size: 4rem;
  
    `}
`;

