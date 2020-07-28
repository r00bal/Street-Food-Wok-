import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ContentBox } from "../components/layouts"
import { SlideIn } from '../components/animations'
import { above } from '../components/utilities'
import { Card } from '../components/elements'
import Image from '../components/image'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => {
  const { allDatoCmsCard } = useStaticQuery(graphql`
  query index {
    allDatoCmsCard(filter: {cardTag: {eq: "home"}}) {
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

  return (
    <Layout location={location} headerTitle="Street Food Wok" staticHeader={true}>
      <SEO title="Street Food Wok" />
      {allDatoCmsCard.edges.map(({ node }, index) => {
        const { id, title, copy, cta, url, image } = node;
        return (
          <ContentBox
            key={id}
            index={index}
          >
            <SlideIn>
              <Card css={
                `max-width:475px;
          margin:0 0 4rem 0;
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
                <Card.CardLinkButton to={url}>
                  {cta}
                </Card.CardLinkButton>
              </Card>
            </SlideIn>
            <SlideIn cssProps={`width:100%; max-width:500px; z-index:1;`}>
              <Image
                fluid={image.fluid}
                cssProps={
                  `height:550px;
                max-width:500px;
              `}
              />
            </SlideIn>
          </ContentBox>
        )
      })}
    </Layout >
  );
}

export default IndexPage
