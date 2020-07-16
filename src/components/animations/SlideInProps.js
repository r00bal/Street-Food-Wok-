import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';


const SlideInProps = ({ children, cssProps, delay = 50, from = "down" }) => {
 const [isVisible, setIsVisible] = useState(false);

 const handleEnter = () => {
  setIsVisible(true)
 }

 return (
  <Waypoint onEnter={() => handleEnter()}>

   {children(isVisible)}

  </Waypoint>
 )
}

export default SlideInProps;