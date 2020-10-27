import React from 'react'
import styled from 'styled-components'
import { above } from '../utilities'

export const CardWrapper = styled.div`
position:relative;
display:flex;
flex-flow:column wrap;
justify-content: space-around;
align-items: center;
margin-bottom:5rem;
${above.med`
     flex-flow:${({ reverse }) => reverse ? `row nowrap` : `row-reverse nowrap`};
    `}
`


export default function ContentBox({ id, index, children }) {
      const reverse = index % 2 === 0;
      return (
            <CardWrapper key={id} reverse={reverse}>
                  {children}

            </CardWrapper>
      )

}
