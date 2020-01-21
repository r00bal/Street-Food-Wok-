/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import GlobalStyle from '../Global'
import BackgroundImage from 'gatsby-background-image-es5'
import { useSpring, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'
import Parallax from './hooks/Parallax'
import { useWindowSize } from './hooks/useWindowSize'
import { Container, Header, Heading } from './elements'
import { Navigation, Footer } from './layouts'
import { DynamicQueryHeader } from './utilities'

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

const Layout = ({ children, location, headerTitle, static }) => {

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

  const [on, toggle] = useState(false)
  const animation = useSpring({
    from: {
      transform: !on ? 'translate3d(0,-100px,0)' : 'translate3d(0,0,0)',

    },
    to: {
      transform: on ? 'translate3d(0,0,0)' : 'translate3d(0,-100px,0)',

    }, config: config.mass

  })
  const size = useWindowSize();
  const title = DynamicQueryHeader(headerTitle) ? DynamicQueryHeader(headerTitle).title : null;
  const image = DynamicQueryHeader(headerTitle) ? DynamicQueryHeader(headerTitle).headerImage.fluid : null;
  return (
    <>
      <GlobalStyle />
      {static || (size.width > 520) ? <Navigation modifiers="static" /> : <Navigation />}
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
        (location.pathname === '/') ? (size.width > 520) && <Navigation animation={animation} /> : null
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
