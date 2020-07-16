/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from 'styled-components'
import GlobalStyle from '../Global'
import BackgroundImage from 'gatsby-background-image-es5'
import { useSpring, config, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'
import Parallax from './hooks/Parallax'
import { SlideIn } from './animations'
import { useWindowSize } from './hooks/useWindowSize'
import { Container, Header, Heading, MenuIcon } from './elements'
import { Navigation, Footer, Contact } from './layouts'
import { DynamicQueryHeader, above, size } from './utilities'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Img from "gatsby-image"
import WokAnimation from './animations/WokAnimation'
library.add(fab)

const BackgroundImageFixed = styled(Img)`
position:absolute;
left:0;
right:0;
width:100%;
height:100%;
background-attachment:fixed;
transition: all 0.1s;
/* &:hover { 
 transform:scale(1.1);
} */
`


const Main = styled.main`
z-index:2;
background-color: #fff;
width: 100%;
flex: 1 0 auto;
padding-top: 5rem;
padding-bottom: 5rem;
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
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false)



  const { width: screenWidth } = useWindowSize();
  const { small: mobileScreenSizeBreakpoint } = size;

  const smallScreens = () => {
    return screenWidth < mobileScreenSizeBreakpoint;
  }

  useEffect(() => {
    // close menu on escape button is pressed
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
  }, [screenWidth]);
  // Empty array ensures effect is only run on mount and unmount

  useEffect(() => {
    // Let the document know when the mouse is being used
    document.body.addEventListener('mousedown', function () {
      document.body.classList.add('using-mouse');
    });

    // Re-enable focus styling when Tab is pressed
    document.body.addEventListener('keydown', function (event) {
      if (event.keyCode === 9) {
        document.body.classList.remove('using-mouse');
      }
    });
  });


  // Animations

  // background scale out animation
  const { s } = useSpring({
    s: isBackgroundLoaded ? 1 : 1.2,
    config: config.slow
  })

  // heading drop down animation
  const { y } = useSpring({
    y: 0,
    from: {
      y: -500,
    },
    config: config.stiff,
    delay: 500

  })



  // navigation animations
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

      <MenuButton className="menu-button" onClick={() => setNavOpen(!isNavOpen)} ref={refMenuButton}>
        <MenuIcon open={isNavOpen} />
      </MenuButton>

      {/* 1) if there is no staticHeader props (not index page) OR there is small screen width then:
      - show mobile navigation for small width screens 
      - or desktop navigation on the large width devices 
      2) If we are on large width devices and on the index page then show main page Navigation - the special one with large icon and positioned at the bottom of the welcome page */}
      {!staticHeader || (smallScreens()) ?
        (smallScreens()) ?
          <Navigation open={isNavOpen} toggleOpen={setNavOpen} mobile={smallScreens()} animation={navAnimationMobile} /> : <Navigation />
        : <Navigation modifiers="static" />}
      {image && (
        <>

          <Header>

            <animated.div style={{ position: 'absolute', width: '100%', height: '100%', transform: s.interpolate((s) => `scale(${s})`) }}>
              <BackgroundImageFixed
                imgStyle={{ position: 'fixed' }}
                fluid={image}
                onLoad={() => setIsBackgroundLoaded(true)}
              />
            </animated.div>

            <Parallax style={{ zIndex: '0' }}>
              <animated.div style={{ overflow: 'hidden', transform: y.interpolate((y) => `translateY(${y}px)`) }}>
                <Heading>{title}</Heading>

              </animated.div>

            </Parallax>
          </Header>
        </>
      )
      }

      {
        location ?
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
      <Footer siteAuthor={data.site.siteMetadata.author} cssProps={`z-index:3`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
