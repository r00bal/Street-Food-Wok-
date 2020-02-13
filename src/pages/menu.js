import React, { useState } from "react"
import { Link } from "gatsby"
import { AccessibleFocusOutlineElement } from '../components/hooks/AccessibleFocusOutlineElement'
import { Button, Select } from "../components/elements"
import { above } from '../components/utilities'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { size } from '../components/utilities'
import { useWindowSize } from '../components/hooks/useWindowSize'
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
const StyledButtonList = ({ options, state, setState }) => (
  <StyledList>
    {options.map((option) => (
      <li id="menu">
        <AccessibleFocusOutlineElement>
          <Button modifiers="D3"
            value={option}
            active={option === state}
            onClick={(e) => {
              e.preventDefault();
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

const StyledSelectList = ({ options }) => (
  <AccessibleFocusOutlineElement>
    <Select>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </Select>
  </AccessibleFocusOutlineElement>
)

const MenuPage = ({ location }) => {
  const windowWidth = useWindowSize().width;
  const [menuOption, setMenuOption] = useState(null)
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
        : <StyledSelectList options={menu} />}
      <Link to="/">Go back to the homepage</Link>
    </Layout >
  )
}

export default MenuPage
