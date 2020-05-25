import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from 'styled-components'
import { useWindowSize } from '../components/hooks/useWindowSize'
import { size } from '../components/utilities'
import Layout from "../components/layout"
import { Card } from '../components/elements'
import { CardWrapper } from '../components/layouts/ContentBox'
import { ContentBox } from '../components/layouts'
import Image from '../components/image'
import SEO from "../components/seo"


const contentBoxCss = [
  {
    card: ``,
    image: `
    transform:rotate(0.02turn) translateX(-150px);
    `
  }, {
    card: `
    transform:rotate(-0.01turn) translateX(-150px);
    
    `,
    image: `
    transform:rotate(0.01turn);
    `
  },
  {
    card: `
    transform:rotate(0.01turn) translateX(150px);
    `,
    image: `
    
    `
  },
  {
    card: `
    transform:rotate(0.03turn) translateX(-150px);
    `,
    image: `
    transform:rotate(-0.02turn);
    `
  },
  {
    card: `
    `,
    image: `
    `
  }
]

const OurStory = ({ location }) => {
  const { allDatoCmsCard } = useStaticQuery(graphql`
  query ourstory {
    allDatoCmsCard(filter: {cardTag: {eq: "ourstory"}} sort: {fields: order, order:ASC}) {
	  edges {
	    node {
	      id
        title
        copy
        cta
        url
       image {
        fluid {
     ...GatsbyDatoCmsFluid
      }
       } 
	    }
	  }
	}
}
` )

  const windowWidth = useWindowSize().width;
  const mobile = windowWidth < size.med;
  return (
    <Layout location={location} stick="stick" headerTitle="Our Story">
      <SEO title="Our Story" />
      {allDatoCmsCard.edges.map(({ node }, index) => {
        const { id, title, copy, image } = node;
        return (
          <ContentBox
            key={id}
            index={index}
            mobile={mobile}
            id={id}
            title={title}
            copy={copy}
            image={image.fluid}
            CardCss={
              `max-width:375px;
            margin:0 0 4rem 0;
            background:white;
            z-index:2;
            ${!mobile ? contentBoxCss[index]['card'] : ``}
            `
            }
            ImageCss={`
            height:450px;
            max-width:400px;
            z-index:1;
            ${!mobile ? contentBoxCss[index]['image'] : ``}
          `} />

        )
      })}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}



export default OurStory


// <CardWrapper>
//   <Card>
//     {copy}
//   </Card>
//   <Image fluid={image.fluid} />
// </CardWrapper>