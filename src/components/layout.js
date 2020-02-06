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
import { DynamicQueryHeader, above, size } from './utilities'
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
  const refMenuButton = useRef();
  const [isNavOpen, setNavOpen] = useState(false);
  const [on, toggle] = useState(false)

  const { width: screenWidth } = useWindowSize();
  const { small: mobileScreenSizeBreakpoint } = size;

  const smallScreens = () => {
    return screenWidth < mobileScreenSizeBreakpoint;
  }



  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isNavOpen) return
      const { keyCode } = e;
      if (keyCode === 27) {
        setNavOpen(false)
        refMenuButton.current.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isNavOpen]);

  useEffect(() => {
    if (!smallScreens()) {
      setNavOpen(false)
    }
  }, [screenWidth]); // Empty array ensures effect is only run on mount and unmount


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
      <AccessibleFocusOutlineElement>
        <MenuButton className="menu-button" onClick={() => setNavOpen(!isNavOpen)} ref={refMenuButton}>
          <MenuIcon open={isNavOpen} />
        </MenuButton>
      </AccessibleFocusOutlineElement>
      {/* 1) if there is no staticHeader props (not index page - main page) OR there is small screen width - mobile devices - then:
      - show mobile navigation for mobile - small width screens 
      - or desktop navigation on the large width devices 
      2) If we are on destktop devices and on the index page then show main page Navigation variation*/}
      {!staticHeader || (smallScreens()) ?
        (smallScreens()) ?
          <Navigation open={isNavOpen} toggleOpen={setNavOpen} mobile={smallScreens()} animation={navAnimationMobile} /> : <Navigation />
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
        (location.pathname === '/') ? (!smallScreens()) && <Navigation animation={navAnimationDesktop} open={on} /> : null
        : null
      }


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
