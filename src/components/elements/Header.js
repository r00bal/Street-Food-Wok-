import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

export const Header = styled.header`
  min-height: calc(100vh);
  background-color: black;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
    url(${props => props.image}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`





