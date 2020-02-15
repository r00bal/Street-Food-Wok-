import styled from 'styled-components';
import { above } from '../utilities'


export const Container = styled.section`
 margin: 0 auto;
 max-width: 1200px;
 width:100%;
 ${above.small`
    width:90%;
    `}
`;

//padding: 1.45rem 1.0875rem;