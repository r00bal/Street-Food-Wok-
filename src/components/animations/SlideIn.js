import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring'

const slowSlide = { mass: 5, tension: 80, friction: 60 };

const direction = {
 down: 'translate3d(0,350px,0)',
 up: 'translate3d(0,-350px,0)',
 left: 'translate3d(-350px,0,0)',
 right: 'translate3d(350px,0,0)'
}

const SlideIn = ({ children, cssProps, delay = 50, from = "down" }) => {
 const [isVisible, setIsVisible] = useState(false);
 const SlideFromBottom = useSpring({
  transform: isVisible ? 'translate3d(0,0,0)' : direction[from],
  opacity: isVisible ? 1 : 0,
  delay: delay,
  config: slowSlide

 })

 const handleEnter = () => {
  setIsVisible(true)
 }
 const handleLeave = () => {
  // setIsVisible(false)
 }
 return (
  <Waypoint onEnter={() => handleEnter()} onLeave={() => handleLeave()}>
   <animated.div css={cssProps} style={SlideFromBottom}>
    {children}
   </animated.div>
  </Waypoint>
 )
}

export default SlideIn;