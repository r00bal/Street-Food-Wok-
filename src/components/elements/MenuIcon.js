import React from 'react'
import { animated, useSpring, config } from 'react-spring'

const openTransformation = {
 top: 'translate(32 60) rotate(-45)',
 center: 'translate(38 28) rotate(45)',
 bottom: 'translate(32 60) rotate(-45)',
}

const closeTransformation = {
 top: 'translate(28 28) rotate(0)',
 center: 'translate(28 44) rotate(0)',
 bottom: 'translate(28 60) rotate(0)',
}



export const MenuIcon = ({ open }) => {
 const { top, center, bottom } = useSpring({
  to: open ? openTransformation : closeTransformation,
  config: config.stiff,
 })
 return (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
   <rect id="Rectangle" className="hambrugerRectangle" width="100" height="100" fill="#fc3350" />
   <g id="lines">
    <animated.rect id="Rectangle1" width="45" height="8" transform={top} fill="#f8f8f8" />
    <animated.rect id="Rectangle2" width="45" height="8" transform={center} fill="#f8f8f8" />
    <animated.rect id="Rectangle3" width="45" height="8" transform={bottom} fill="#f8f8f8" />
   </g>
  </svg>

 )
}
