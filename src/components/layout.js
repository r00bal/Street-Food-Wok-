/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import GlobalStyle from '../Global'
import BackgroundImage from 'gatsby-background-image-es5'
import { useSpring, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'
import Parallax from './hooks/Parallax'
import { useWindowSize } from './hooks/useWindowSize'
import { AccessibleFocusOutlineElement } from './hooks/AccessibleFocusOutlineElement'
import { Container, Header, Heading, MenuIcon } from './elements'
import { Navigation, Footer, Contact } from './layouts'
import { DynamicQueryHeader, above } from './utilities'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)


const Main = styled.main`
width: 100%;
flex: 1 0 auto;
`
const LayoutContainer = styled(Container)`
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: space-around;
`

const MenuButton = styled.button`
appearance: none;
margin:0;
padding:0;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  background: transparent;
  position: fixed;
  width:60px;
  height:60px;
  top:20px;
  right:30px;
  border: none;
  z-index: 15;
  .hambrugerRectangle {
  transition: all 0.3s ease;
  }
  ${
  above.small`
  display:none;
    `}
 &:hover {
  .hambrugerRectangle {
     fill: black;
   }

 }
`

const Layout = ({ children, location, headerTitle, staticHeader }) => {

  const data = useStaticQuery(graphql`
    query SiteTitle_Header_Query {
        site {
        siteMetadata {
          title
          author
        }
      }

    }
  `)

  const refHeader = useRef();
  const [isNavOpen, setNavOpen] = useState(false);
  const [on, toggle] = useState(false)

  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 520) {
      setNavOpen(false)
    }
  }, [size.width]); // Empty array ensures effect is only run on mount and unmount



  const navAnimationDesktop = useSpring({
    from: {
      transform: !on ? 'translate3d(0,-100px,0)' : 'translate3d(0,0,0)',

    },
    to: {
      transform: on ? 'translate3d(0,0,0)' : 'translate3d(0,-100px,0)',

    }, config: config.mass

  })
  const navAnimationMobile = useSpring({ transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)` })
  const title = DynamicQueryHeader(headerTitle) ? DynamicQueryHeader(headerTitle).title : null;
  const image = DynamicQueryHeader(headerTitle) ? DynamicQueryHeader(headerTitle).headerImage.fluid : null;
  return (
    <>
      <GlobalStyle />
      {!staticHeader || (size.width < 520) ?
        (size.width < 520) ? <Navigation animation={navAnimationMobile} /> : <Navigation />
        : <Navigation modifiers="static" />}
      {image && (
        <BackgroundImage
          fluid={image}
        >
          <Header image={image} ref={refHeader}>
            <Parallax style={{ zIndex: '0' }}>
              <Heading>{title}</Heading>
            </Parallax>
          </Header>
        </BackgroundImage>
      )}

      {location ?
        (location.pathname === '/') ? (size.width > 520) && <Navigation animation={navAnimationDesktop} /> : null
        : null
      }
      <AccessibleFocusOutlineElement>
        <MenuButton className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>
          <MenuIcon open={isNavOpen} />
        </MenuButton>
      </AccessibleFocusOutlineElement>

      <Waypoint
        topOffset='-25px'
        onEnter={
          () => {

            toggle(false)

          }
        }
        onLeave={
          () => {

            toggle(true)

          }
        }
      />
      <Main>
        <LayoutContainer>
          {children}
          <Contact />
        </LayoutContainer>

      </Main>

      <Footer siteAuthor={data.site.siteMetadata.author} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
