import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { useSpring, config, animated } from 'react-spring'

const ShowHideElement = ({ children, cssProps }) => {
 const [isVisible, setIsVisible] = useState(false);
 const showHideAnimation = useSpring({

  transform: isVisible ? 'translate3d(0,0,0)' : 'translate3d(0,200px,0)',
  opacity: isVisible ? 1 : 0,
  delay: 200,
  config: config.slow

 })

 const handleEnter = () => {
  setIsVisible(true)
 }
 const handleLeave = () => {
  // setIsVisible(false)
 }
 return (
  <Waypoint onEnter={() => handleEnter()} onLeave={() => handleLeave()}>
   <animated.div css={cssProps} style={showHideAnimation}>
    {children}
   </animated.div>
  </Waypoint>
 )
}

export default ShowHideElement;