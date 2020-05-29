import React from "react"
import { Link } from "gatsby"
import { Card } from "../components/elements"
import styled, { css } from 'styled-components'
import { above } from '../components/utilities'
import { ShowHideElement } from '../components/animations'
import Layout from "../components/layout"
import SEO from "../components/seo"

const OrderMargin = css`
margin:0 0 4rem 0;
  `


const SecondPage = ({ location }) => (
  <Layout location={location} stick="stick" headerTitle="Make your order">
    <SEO title="Page two" />
    <ShowHideElement cssProps={`
max-width: 800px;
margin: 0 0 4rem 0;
align-self: center;
`}>
      <Card>
        <Card.CardHeader css={OrderMargin}>
          Don’t have a time to visit us?
    </Card.CardHeader>
        <Card.CardBody css={OrderMargin}>
          Make an order and we will delivery
          your favourite dishes right into your place
    </Card.CardBody>

        <Card.CardLinkButton modifiers="wide" href="https://wolt.com/pl/">
          ORDER
    </Card.CardLinkButton>
      </Card>
    </ShowHideElement>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
