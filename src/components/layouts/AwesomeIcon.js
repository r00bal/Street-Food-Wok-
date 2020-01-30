import { Link } from "gatsby"
import styled from 'styled-components'
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





const AwesomeIcon = ({ icon, style }) => {

 return (
  <>
   <FontAwesomeIcon icon={icon} style={style} />
  </>
 )
}


export default AwesomeIcon
