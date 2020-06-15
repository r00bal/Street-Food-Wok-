import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { useWindowSize } from '../components/hooks/useWindowSize'
import { size } from '../components/utilities'
import { above } from '../components/utilities'
import Layout from "../components/layout"
import { Card } from '../components/elements'
import Image from '../components/image'
import { ShowHideElement } from '../components/animations'
import { ContentBox } from '../components/layouts'
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
          >
            <ShowHideElement cssProps={`z-index:2;`}>
              <Card css={
                `max-width:375px;
              margin:0 0 4rem 0;
              background:white;
              z-index:2;
              ${!mobile ? contentBoxCss[index]['card'] : ``}
            ${above.med`
     margin:1rem;
    `}
          `}>
                <Card.CardHeader>
                  {title}
                </Card.CardHeader>
                <Card.CardBody>
                  {copy}
                </Card.CardBody>
              </Card>
            </ShowHideElement>
            <ShowHideElement cssProps={`width:100%; max-width:400px; z-index:1;`}>
              <Image
                fluid={image.fluid}
                cssProps={`
                height:450px;
                width:100%;
                z-index:1;
            ${!mobile ? contentBoxCss[index]['image'] : ``}
          `}
              />
            </ShowHideElement>
          </ContentBox>
        )
      })}
    </Layout >
  )
}



export default OurStory


// <CardWrapper>
//   <Card>
//     {copy}
//   </Card>
//   <Image fluid={image.fluid} />
// </CardWrapper>