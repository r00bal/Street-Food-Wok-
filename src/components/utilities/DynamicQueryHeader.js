
import { useStaticQuery, graphql } from 'gatsby'

export const DynamicQueryHeader = (title) => {
  const data = useStaticQuery(graphql`
 query HeaderQuery {
	allDatoCmsHeader {
    edges {
      node {
        title
        headerImage {
          fluid(maxWidth: 1920, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
}
`)

  const { edges } = data.allDatoCmsHeader;
  const headerQuery = edges.find(
    edge => edge.node.title === title
  )
  if (!headerQuery) {
    return null
  }

  return headerQuery.node;
}
