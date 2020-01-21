import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ImageFrame = styled(Img)`
 border: 1.5px solid black;
 width:${({ width }) => width ? `${width}px` : `auto`};
 height:${({ height }) => height ? `${height}px` : `auto`};
 `

const Image = ({ width, height, fluid }) => {
  return <ImageFrame width={width} height={height} fluid={fluid} imgStyle={{
    padding: '20px 10px'
  }} />
}

export default Image
