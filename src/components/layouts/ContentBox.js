import React from 'react'
import styled from 'styled-components'
import { Card } from '../elements'
import Image from '../image'

const Wrapper = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content: space-around;
align-items: center;
margin-bottom:5rem;
`

const CardImage = ({ id, title, copy, cta, image }) => {
 return (
  <Wrapper key={id}>
   <Card css={`
            max-width:475px;
            margin:1rem;
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

const ImageCard = ({ id, title, copy, cta, image }) => {
 return (
  <Wrapper key={id}>
   <Image fluid={image}
    cssProps={`
          height:550px;
          max-width:500px;
        `} />
   <Card css={`
            max-width:475px;
            margin:1rem;
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

  </Wrapper>
 )
}


export default function ContentBox({ id, title, copy, cta, image, index }) {
 const even = (index % 2) === 0;
 { console.log(even) }
 if (even) {
  return <CardImage id={id} title={title} copy={copy} cta={cta} image={image} />
 } else {
  return <ImageCard id={id} title={title} copy={copy} cta={cta} image={image} />
 }
}
