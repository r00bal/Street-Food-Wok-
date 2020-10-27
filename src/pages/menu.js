import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { animated } from 'react-spring'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useWindowSize } from '../components/hooks/useWindowSize'
import { size, anyIsTrue, above } from '../components/utilities'
import { Button, Select, Card } from "../components/elements"
import { Checkbox } from "../components/layouts"
import Image from '../components/image'
import { SlideIn } from '../components/animations'

const menu = ['starters', 'salads', 'wok-fried', 'sides', 'deserts', 'kids', 'drinks', 'pho']
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

const StyledList = styled(animated.ul)`
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
justify-content:space-between;
margin-bottom:3rem;

`

const MenuImage = styled.div`
display:none;
max-width:300px;
width:100%;
 ${above.med`
    display:flex;
    `} 
`

const MenuButton = styled(Button)`
display:block;
margin-left: auto;
margin-right: auto;
width:100%;
max-width:500px;
margin-bottom:5rem;`


const StyledButtonList = ({ options, state, setState }) => {

  return (

    <StyledList>
      {menu.map((option) => {
        return (

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
        )
      }
      )}
    </StyledList>

  )
}

const StyledSelectList = ({ options, setState, state }) => (

  <Select css={`
    margin:0 0 2rem 0;
    `}
    onChange={(e) => {
      setState(e.target.value)
    }}
  ><option selected>{state}</option>
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
          ...GatsbyDatoCmsFluid
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
  const [menuOption, setMenuOption] = useState('starters')
  const [checkedItems, setCheckedItems] = useState({})

  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems({ ...checkedItems, [name]: isChecked })

  }
  const checkIfChecked = (string) => {
    for (const key in checkedItems) {
      if (checkedItems.hasOwnProperty(key)) {
        const element = checkedItems[key];
        if (element) {
          return string.includes(key);
        }
      }
    }
    return false
  }

  const { fluid } = allDatoCmsAsset.edges[0].node;
  const { edges } = allDatoCmsMenu;

  return (
    <Layout location={location} stick="stick" headerTitle={"Menu"}>
      <SEO title="Menu Card" />
      {windowWidth > size.med
        ?
        <StyledButtonList
          options={menu}
          state={menuOption}
          setState={setMenuOption}
        />
        : <StyledSelectList options={menu} state={menuOption} setState={setMenuOption} />}
      <MenuWrapper>

        <MenuImage>
          <SlideIn from="left" delay={400} cssProps={`
          width:100%;
          max-width:300px;
          margin: 0 2rem 0 0;
          `}>
            <Image fluid={fluid} cssProps={`
          width:100%;
          height:550px;
          `} />
          </SlideIn>

        </MenuImage>
        <SlideIn from="right" delay={400}>
          <Card css={`
            width:100%;
    `}>
            <Card.CardMenu>
              {tags.map(({ name, value }) => <Checkbox name={name} value={value} label={name} checked={checkedItems[name]} handleChange={handleCheckboxChange} />)}
            </Card.CardMenu>
            <Card.CardRow>
              {edges.map(({ node }) => {
                const { category, tag } = node;
                if (category === menuOption) {
                  return (
                    <Card.CardRowItem modifiers={anyIsTrue(checkedItems) ? !checkIfChecked(tag) && 'transparent' : ''}>
                      <Card.CardHeader modifiers={["textFont", "red", anyIsTrue(checkedItems) ? checkIfChecked(tag) && "green" : '']}>{node.name}</Card.CardHeader>
                      <Card.CardBody> {node.ingredients}</Card.CardBody>
                    </Card.CardRowItem>
                  )
                } else { return null }
              })}
            </Card.CardRow>
          </Card>
        </SlideIn>
      </MenuWrapper>
      <MenuButton>Download menu on PDF</MenuButton>
    </Layout >

  )
}

export default MenuPage
