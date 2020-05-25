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
import Parallax from './hooks/Parallax'
import { useWindowSize } from './hooks/useWindowSize'
import { Container, Header, Heading, MenuIcon } from './elements'
import { Navigation, Footer, Contact } from './layouts'
import { DynamicQueryHeader, above, size } from './utilities'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Img from "gatsby-image"
library.add(fab)

const StyledArtDirectedBackground = styled(BackgroundImage)`
  width: 100%;
  position:fixed;

  /* You should set a background-size as the default value is "cover"! */
  background-size: cover;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
`

const Main = styled.main`
width: 100%;
flex: 1 0 auto;
margin-top: 5rem;
margin-bottom: 5rem;
`
const LayoutContainer = styled(Container)`
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: space-around;
z-index:1;
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
const LayoutWrapper = styled.div`
position: absolute;
top:100px
/* background-image: url(${(props) => props.background}); */
${({ background }) => background ? `background-image: url(${background});` : ``}
background-size: cover;

`

const Layout = ({ children, location, headerTitle, staticHeader }) => {

  const data = useStaticQuery(graphql`
    query SiteTitle_Header_Query2 {
        site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const refMenuButton = useRef();

  const [isNavOpen, setNavOpen] = useState(false);
  const [on, toggle] = useState(false)



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


  const navAnimationMobile = useSpring({ transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)` })
  const title = DynamicQueryHeader(headerTitle) ? DynamicQueryHeader(headerTitle).title : null;
  const image = DynamicQueryHeader(headerTitle) ? DynamicQueryHeader(headerTitle).headerImage.fluid : null;
  return (
    <>
      <GlobalStyle />

      <MenuButton className="menu-button" onClick={() => setNavOpen(!isNavOpen)} ref={refMenuButton}>
        <MenuIcon open={isNavOpen} />
      </MenuButton>

      {/* 1) if there is no staticHeader props (not index page - main page) OR there is small screen width - mobile devices - then:
      - show mobile navigation for mobile - small width screens 
      - or desktop navigation on the large width devices 
      2) If we are on destktop devices and on the index page then show main page Navigation variation*/}
      {!staticHeader || (smallScreens()) ?
        (smallScreens()) ?
          <Navigation open={isNavOpen} toggleOpen={setNavOpen} mobile={smallScreens()} animation={navAnimationMobile} /> : <Navigation />
        : <Navigation modifiers="static" />}
      {image && (





        <StyledArtDirectedBackground
          fluid={image}
        >
          <Main>
            <LayoutContainer>
              {children}
              <Contact />
            </LayoutContainer>
          </Main>
          <Footer siteAuthor={data.site.siteMetadata.author} />
        </StyledArtDirectedBackground>




      )
      }




    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
