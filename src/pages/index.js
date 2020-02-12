import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Card, Heading, Button, LinkButton, Select, Input, Form } from '../components/elements'
import { size } from '../components/utilities'
import { ContentBox } from "../components/layouts"
import { useWindowSize } from '../components/hooks/useWindowSize'
import Layout from "../components/layout"
import SEO from "../components/seo"




const IndexPage = ({ location }) => {
  const { allDatoCmsCard } = useStaticQuery(graphql`
  query index {
    # datoCmsAsset(basename: {eq: "women-vietnam"}) {
    # isImage
    # filename
    # tags
    # basename
    #   fluid {
    #  ...GatsbyDatoCmsFluid
    #   }
    # }
    allDatoCmsCard {
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
  const handleClick = (e) => {
    console.log(e.target.value)
  }

  return (
    <Layout location={location} headerTitle="Street Food Wok" staticHeader={true}>
      <SEO title="Street Food Wok" />

      {allDatoCmsCard.edges.map(({ node }, index) => {
        const { id, title, copy, cta, url, image } = node;
        console.log(index)
        return (
          <ContentBox
            index={index}
            id={id}
            title={title}
            copy={copy}
            cta={cta}
            url={url}
            image={image.fluid} />
        )
      })}
    </Layout >
  );
}

export default IndexPage
