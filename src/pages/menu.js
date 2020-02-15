import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useWindowSize } from '../components/hooks/useWindowSize'
import { AccessibleFocusOutlineElement } from '../components/hooks/AccessibleFocusOutlineElement'
import { size, above } from '../components/utilities'
import { Button, Select, Card } from "../components/elements"
import Image from '../components/image'

const menu = ['starters', 'salads', 'wok-fired', 'sides', 'deserts', 'kids', 'drinks', 'pho']

const StyledList = styled.ul`
margin:0 0 5rem 0;
padding:0;
list-style:none;
display:flex;
li {
  flex: 1 0 auto;
  display:flex;
  padding:0;
  margin:0;
}
`
const MenuWrapper = styled.div`
display:flex;
/* flex-flow:column wrap; */
justify-content: space-between;
margin-bottom:5rem;
`


const StyledButtonList = ({ options, state, setState }) => (
  <StyledList>
    {options.map((option) => (
      <li id="menu">
        <AccessibleFocusOutlineElement>
          <Button modifiers="D3"
            value={option}
            active={option === state}
            onClick={(e) => {
              setState(e.target.value)
            }}
          >
            {option}
          </Button>
        </AccessibleFocusOutlineElement>
      </li>
    ))}
  </StyledList>
)

const StyledSelectList = ({ options, setState }) => (
  <AccessibleFocusOutlineElement>
    <Select>
      {options.map((option) => (
        <option value={option} onClick={(e) => {
          setState(e.target.value)
        }}>{option}</option>
      ))}
    </Select>
  </AccessibleFocusOutlineElement>
)



const MenuPage = ({ location }) => {
  const { allDatoCmsAsset } = useStaticQuery(graphql`
  query menu {
    allDatoCmsAsset(filter: {tags: {eq: "pho"}}) {
    edges {
      node {
        id
        fluid {
          base64
          tracedSVG
          aspectRatio
          width
          height
          src
          srcSet
          sizes
        }
      }
    }
  }
}
` )

  const windowWidth = useWindowSize().width;
  const [menuOption, setMenuOption] = useState(null)
  console.log(allDatoCmsAsset.edges[0].node);
  const { fluid } = allDatoCmsAsset.edges[0].node;
  return (
    <Layout location={location} stick="stick" headerTitle={"Menu"}>
      <SEO title="Page two" />
      {windowWidth > size.med
        ?
        <StyledButtonList
          options={menu}
          state={menuOption}
          setState={setMenuOption}
        />
        : <StyledSelectList options={menu} setState={setMenuOption} />}
      <MenuWrapper>
        <Image fluid={fluid} cssProps={`
          height:550px;
          max-width:300px;
          margin: 0 2rem 0 0;
        `} />
        <Card css={`
            width:100%;
    `}>
          <Card.CardHeader>
            Menu
    </Card.CardHeader>
          <Card.CardBody>

          </Card.CardBody>
        </Card>
      </MenuWrapper>
      <Link to="/">Go back to the homepage</Link>
    </Layout >

  )
}

export default MenuPage
