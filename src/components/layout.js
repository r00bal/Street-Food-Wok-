/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import GlobalStyle from '../Global'
import Parallax from './hooks/Parallax'
import { Container, Header, Heading } from './elements'
import Navigation from '../components/layouts/Navigation.js'
import Footer from '../components/layouts/Footer.js'

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

const Layout = ({ children, location, test, image, stick }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      {stick ? <Navigation stick="stick" /> : <Navigation />}
      <Header image={image} >
        <Parallax style={{ zIndex: '0' }}>
          <Heading>WOK STREET FOOD</Heading>
        </Parallax>
      </Header>
      {console.log(location.pathname)}


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
