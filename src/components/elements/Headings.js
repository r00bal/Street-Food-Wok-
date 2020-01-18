
import styled from 'styled-components';
import { headerFont, transparentWhite, black } from '../utilities'

export const Heading = styled.h1`
font-size: 4rem;
font-weight:400;
${headerFont};
color:${black};
padding:15px 45px;
width: fit-content;
background: ${transparentWhite};
text-transform: uppercase;
`;

