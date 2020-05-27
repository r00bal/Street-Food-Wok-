import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { useSpring, config, animated } from 'react-spring'

const ShowHideElement = ({ children, title }) => {
 const [isVisible, setIsVisible] = useState(false);
 const showHideAnimation = useSpring({

  transform: isVisible ? 'translate3d(0,0,0)' : 'translate3d(0,100px,0)',
  opacity: isVisible ? 1 : 0,
  delay: 300,
  config: config.slow

 })

 const handleEnter = (desc) => {
  console.log('I am visible' + desc);
  setIsVisible(true)
 }
 const handleLeave = (desc) => {
  console.log('I will be back' + desc);
  // setIsVisible(false)
 }
 return (
  <Waypoint onEnter={() => handleEnter(title)} onLeave={() => handleLeave(title)}>
   <animated.div style={showHideAnimation}>
    {console.log(children)}
    {children}
   </animated.div>
  </Waypoint>
 )
}

export default ShowHideElement;