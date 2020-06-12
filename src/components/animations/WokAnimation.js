import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { useSpring, interpolate, config, animated } from 'react-spring'
import styled, { css } from 'styled-components'
import onions from '../assets/svg/onions-white.svg'
import chilli from '../assets/svg/chilli-white-red.svg'
import mushrooms from '../assets/svg/mushrooms-white.svg'
import tomato from '../assets/svg/tomato-white.svg'
import wok from '../assets/svg/sketch-wok-white.svg'

const Image = styled(animated.img)`

transform:rotate(-5deg);
    width: ${({ width }) => width ? width : 300}px;
    z-index: ${({ name }) => name === `wok` ? 10 : 1};
    position:${({ name }) => name === `wok` ? `` : `absolute`};
    ${({ name }) => name !== `wok` ? positions[name] : ``};
`

const positions = {
 onion: `top:45%; left:45%;`,
 chilli: `top:42%; left:79%; transform:rotate(30deg);`,
 mushroom: `top:48%; left:55%;`,
 tomato: `top:49%; left:68%;`
}


const randomNumber = (min, max) => {
 return Math.floor(Math.random() * (max - min)) + min;
}

const WokWrapper = styled(animated.div)`

${({ mobile }) => mobile ? `margin:0 auto` : ``};
transform-origin: 0 0;
position: absolute;
z-index:2;
display:block;
`
const WaggiesWrapper = styled(animated.div)`

top:0;
position: absolute;
z-index:-1;
width:100%;
height:100%;
`
const small = '16%';
const large = '18%';


const WokAnimation = ({ children, cssProps, mobile, width }) => {
 const [isVisible, setIsVisible] = useState(false);

 const { o, x, y, r } = useSpring({
  from: { o: 1, x: 0, y: 0, r: 0 },
  to: { o: 1, x: 1, y: 1, r: 1 },
  config: { mass: 1, tension: 210, friction: 35 }

 })

 const handleEnter = () => {
  setIsVisible(true)
 }
 const handleLeave = () => {
  // setIsVisible(false)
 }
 return (
  <Waypoint onEnter={() => handleEnter()} onLeave={() => handleLeave()}>
   <WokWrapper css={cssProps} style={{
    opacity: o,
    transform: interpolate([
     x.interpolate({ range: [0, 0.5, 0.8, 0.9, 1], output: [0, 30, 30, 20, 0] }),
     y.interpolate({ range: [0, 0.5, 0.8, 0.9, 1], output: [0, 20, 20, 10, 0] }),
     r.interpolate({ range: [0, 0.5, 0.8, 0.9, 1], output: [-2, 20, -20, -10, -2] })
    ], (x, y, r) => `translate(${x}px,${y}px) rotate(${r}deg)`),

   }} mobile={mobile}>
    <Image src={wok} name="wok" width={width ? width : 80} mobile={mobile} />
    <WaggiesWrapper>
     <Image src={chilli} name="chilli" width={large} />
     <Image src={onions} name="onion" width={small} />
     <Image src={mushrooms} name="mushroom" width={small} />
     <Image src={tomato} name="tomato" width={large} />

    </WaggiesWrapper>


   </WokWrapper>
  </Waypoint>
 )
}

export default WokAnimation;