import { Link } from "gatsby"
import styled from 'styled-components'
import PropTypes from "prop-types"
import React from "react"
import { Container } from '../elements'
import { above, black, white } from '../utilities'

const pages = [
  { name: 'Feedback', path: 'Feedback', },
  { name: 'Careers', path: 'Careers', },
  { name: 'Privacy', path: 'Privacy', },
  { name: 'Copyright WOK@', path: 'Copyright', },

]

const LinkFooter = styled(Link)`
text-decoration:none;
color:white;
font-size:1.2rem;
margin: .5rem 1rem;
justify-self: flex-end;
align-self:center;

`

const FooterNav = styled.nav`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
   color: ${white};
   height:200px;
   ${
  above.small`
  flex-flow: row wrap;
  justify-self: flex-start;
  align-items: center;  
    `}
`

const SpanFooter = styled.span`
 font-size:1.2rem;
 margin: .5rem 1rem;
 align-self:center;
 ${
  above.small`
  margin-left: auto; 
  justify-self: flex-end;
    `}
 
`

const Footer = ({ siteAuthor, className }) => (
  <footer className={className}>
    <Container>
      <FooterNav>

        {pages.map(({ name }) => {
          return (
            <LinkFooter to='/'>
              {name}
            </LinkFooter>
          )
        })}

        <SpanFooter>
          © {new Date().getFullYear()}, Website by {siteAuthor}
        </SpanFooter>
      </FooterNav>
    </Container>
  </footer >
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
}

export default styled(Footer)`
 flex-shrink: 0;
  background-color: ${black};
   
`
