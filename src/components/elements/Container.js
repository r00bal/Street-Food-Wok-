import styled from 'styled-components';
import { above } from '../utilities'


export const Container = styled.section`
 margin: 0 auto;
 max-width: 1200px;
 width:100%;
 padding: 1.45rem 1.0875rem;
 ${above.small`
    width:90%;
    `}
`;