import React from 'react'
import styled from 'styled-components'

import VideoBackground from '../VideoBackground';
import { Card } from '../elements'
import { useSpring, useTrail, animated, config } from 'react-spring'

const CardWrapper = styled(Card)`
height:450px;
display:flex;
padding-bottom:5rem;
flex-direction: column;
justify-content: flex-end;
align-items: center;
color: #fff;
`


export default function VideoCard({ children, modifiers, overlayColor }) {
 // const fade = useSpring(
 //  {
 //   from: {
 //    opacity: 0,
 //    transform: 'translate3d(50%,0,0)',
 //   },
 //   opacity: 1,
 //   transform: 'translate3d(0,0,0)',
 //  })
 return (
  // <animated.div style={fade}>
  <VideoBackground modifiers={modifiers} overlayColor={overlayColor}>
   <CardWrapper>
    {children}
   </CardWrapper>
  </VideoBackground>
  // </animated.div >
 )
}
