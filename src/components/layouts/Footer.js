import { Link } from "gatsby"
import styled from 'styled-components'
import PropTypes from "prop-types"
import React from "react"
import { transparentBlack, elevation, fixed, absolute, above, black, white } from '../utilities'

const pages = [
 { name: 'Feedback', path: 'Feedback', },
 { name: 'Careers', path: 'Careers', },
 { name: 'Privacy', path: 'Privacy', },
 { name: 'Copyright WOK@', path: 'Copyright', },

]

const StyledLink = styled(Link)`
text-decoration:none;
color:white;
font-size:1rem;
margin-right:1rem;
justify-self: flex-end;
align-self:center;
`

const Footer = ({ siteAuthor, className }) => (
 <footer className={className}>
  {pages.map(({ name }) => {
   return (
    <StyledLink>
     {name}
    </StyledLink>
   )
  })}

  <span style={{
   marginLeft: "auto"
  }}>
   © {new Date().getFullYear()}, Website by {siteAuthor}
  </span>


 </footer >
)

Footer.propTypes = {
 siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
 siteAuthor: ``,
}

export default styled(Footer)`
  padding:2rem;
  display: flex;
  flex-flow: row wrap;
  justify-self: flex-start;
  align-items: center;
   background-color: ${black};
   color: ${white};
   height:200px;
   
`
