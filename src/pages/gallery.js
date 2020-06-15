import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'
import { ShowHideElement } from '../components/animations'

const GalleryWrapper = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-around;
width:100%;
`

const Gallery = ({ location }) => {

  const { allDatoCmsAsset } = useStaticQuery(graphql`
  query gallery {
    allDatoCmsAsset(filter: {tags: {eq: "gallery"}} sort: {fields: notes}) {
    edges {
      node {
        id
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
}
` )
  const { edges } = allDatoCmsAsset;
  return (
    <Layout location={location} stick="stick" headerTitle="Gallery">
      {console.log(edges)}
      <SEO title="Gallery" />
      <GalleryWrapper>
        {
          edges.map(({ node }, index, arr) => {
            const { fluid } = node
            const eachFour = index % (arr.length / 2);
            const portraitOrientation = eachFour % 3 === 0;
            return (
              <ShowHideElement cssProps={`flex: 50% 50%;
              align-self:center;
              width:100%;
              min-width:300px; max-width:${portraitOrientation ? `400px` : `550px`}`}>
                <Image fluid={fluid}
                  cssProps={`  
          height:${portraitOrientation ? `550px` : `350px`};
          max-width:${portraitOrientation ? `400px` : `550px`};
          margin: 1rem;
          `} />
              </ShowHideElement>

            )
          }
          )
        }
      </GalleryWrapper>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default Gallery
