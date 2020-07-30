import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';


const Visible = ({ children }) => {
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

export default Visible;