import React from 'react'
import styled from 'styled-components'
import { Card } from '../elements'
import { above } from '../utilities'
import Image from '../image'

const Wrapper = styled.div`
display:flex;
flex-flow:column wrap;
justify-content: space-around;
align-items: center;
margin-bottom:5rem;
${above.med`
     flex-flow:${({ reverse }) => reverse ? `row nowrap` : `row-reverse nowrap`};
    `}
`


export default function ContentBox({ id, title, copy, cta, image, index }) {
 const reverse = index % 2 === 0;
 return (
  <Wrapper key={id} reverse={reverse}>
   <Card css={`
            max-width:475px;
            margin:0 0 4rem 0;
            ${above.med`
     margin:1rem;
    `}
          `}>
    <Card.CardHeader>
     {title}
    </Card.CardHeader>
    <Card.CardBody>
     {copy}
    </Card.CardBody>
    <Card.CardButton>
     {cta}
    </Card.CardButton>
   </Card>
   <Image fluid={image}
    cssProps={`
          height:550px;
          max-width:500px;
        `} />
  </Wrapper>
 )

}
