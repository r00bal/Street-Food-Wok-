import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ContentBox } from "../components/layouts"
import { SlideIn, SlideInProps, AnimatedImage } from '../components/animations'
import { above } from '../components/utilities'
import { Card } from '../components/elements'
import Image from '../components/image'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Test = ({ location }) => {
  const { allDatoCmsCard } = useStaticQuery(graphql`
  query test2 {
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
        const reverse = index % 2 === 0;
        return (
          <ContentBox
            key={id}
            index={index}
          >
            <SlideInProps delay={200}>
              {(isVisible) => (

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
                  {console.log(isVisible)}

                  <Card.CardBody>
                    {copy}
                  </Card.CardBody>


                  <Card.CardLinkButton to={url}>
                    {cta}
                  </Card.CardLinkButton>

                </Card>

              )}

            </SlideInProps>
            <AnimatedImage fluid={image.fluid} cssProps={`width:100%; max-width:500px; z-index:1; height:550px;
                max-width:500px;`} />


          </ContentBox>
        )
      })}
    </Layout >
  );
}

export default Test
