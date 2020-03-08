import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useWindowSize } from '../components/hooks/useWindowSize'
import { size } from '../components/utilities'
import { Button, Select, Card } from "../components/elements"
import { Checkbox } from "../components/layouts"
import Image from '../components/image'

const menu = ['starters', 'salads', 'wok-fired', 'sides', 'deserts', 'kids', 'drinks', 'pho']
const tags = [
  {
    name: 'vegan',
    value: '#vegan_'
  },
  {
    name: 'vegetarian',
    value: '#vegetarian_'
  },
  {
    name: 'diary free',
    value: '#diaryfree_'
  },
  {
    name: 'gluten free',
    value: '#glutenfree_'
  },
  {
    name: '<500 cal',
    value: '#<500 cal_'
  }
]

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
        <Button modifiers="D3"
          value={option}
          active={option === state}
          onClick={(e) => {
            setState(e.target.value)
          }}
        >
          {option}
        </Button>
      </li>
    ))}
  </StyledList>
)

const StyledSelectList = ({ options, setState }) => (

  <Select css={`
    margin:0 0 2rem 0;
    `}
    onChange={(e) => {
      setState(e.target.value)
    }}
  >
    {options.map((option) => (
      <option value={option} >{option}</option>
    ))}
  </Select>

)



const MenuPage = ({ location }) => {
  const { allDatoCmsAsset, allDatoCmsMenu } = useStaticQuery(graphql`
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
  allDatoCmsMenu {
   edges {
     node {
       id
      name
      category
      ingredients
      tag
     }
   }
 }
}
` )

  const windowWidth = useWindowSize().width;
  const [menuOption, setMenuOption] = useState(null)
  const [checkedItems, setCheckedItems] = useState({})
  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems({ ...checkedItems, [name]: isChecked })

  }
  const checkIfChecked = () => {
    console.log('NEW')
    const keys = Object.keys(checkedItems);
    for (const key in checkedItems) {
      if (checkedItems.hasOwnProperty(key)) {
        const element = checkedItems[key];
        console.log(key, element)
        if (element) {
          console.log('isChecked ', key);
        }
      }
    }

  }

  const { fluid } = allDatoCmsAsset.edges[0].node;
  const { edges } = allDatoCmsMenu;

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
        : <StyledSelectList options={menu} state={menuOption} setState={setMenuOption} />}
      <MenuWrapper>
        <Image fluid={fluid} cssProps={`
          height:550px;
          max-width:300px;
          margin: 0 2rem 0 0;
        `} />
        <Card css={`
            width:100%;
    `}>
          <Card.CardMenu>

            {tags.map(({ name, value }) => <Checkbox name={name} value={value} label={name} checked={checkedItems[name]} handleChange={handleCheckboxChange} />)}
          </Card.CardMenu>
          <Card.CardRow>
            {checkIfChecked()}
            {edges.map(({ node }) => {
              const { category, tag } = node;
              if (category === menuOption) {
                return (
                  <Card.CardRowItem>
                    <Card.CardHeader modifiers={["textFont", "red"]}>{node.name}</Card.CardHeader>
                    <Card.CardBody> {node.ingredients}</Card.CardBody>
                  </Card.CardRowItem>
                )
              }
            })}
          </Card.CardRow>

        </Card>
      </MenuWrapper>
      <Link to="/">Go back to the homepage</Link>
    </Layout >

  )
}

export default MenuPage
