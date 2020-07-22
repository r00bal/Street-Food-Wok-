import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { useSpring, useTrail, animated, config } from 'react-spring'

const manualConfig = { mass: 5, tension: 80, friction: 60 };

const ShowElementTrial = ({ children, isVisible }) => {


 const elements = React.Children.toArray(children);
 const trail = useTrail(elements.length, {
  config: config.slow,
  opacity: isVisible ? 1 : 0,
  x: isVisible ? 0 : 50,
  height: isVisible ? 80 : 0,
  from: { opacity: 0, x: 50, height: 0 },
 })
 return (
  <>
   {/* {elements.map(el => React.cloneElement(el, { style: { opacity: 0.1 } }))} */}
   {trail.map(({ x, height, ...rest }, index) => (
    <animated.div style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }} >
     {elements[index]}
    </animated.div>


   ))}
  </>
 )

}

export default ShowElementTrial;