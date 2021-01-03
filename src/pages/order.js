import React from "react"
import { Card } from "../components/elements"
import { css } from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const OrderMargin = css`
margin:0 0 4rem 0;
  `


const SecondPage = ({ location }) => (
  <Layout location={location} stick="stick" headerTitle="Make your order">
    <SEO title="Page two" />

    <Card css={`
max-width: 800px;
margin: 0 0 4rem 0;
align-self: center;
`}>
      <Card.CardHeader css={OrderMargin}>
        Don’t have a time to visit us?
    </Card.CardHeader>
      <Card.CardBody css={OrderMargin}>
        Make an order and we will delivery
        your favourite dishes right into your place
    </Card.CardBody>
      <Card.CardLinkButton modifiers="wide" to="https://wolt.com/pl/">
        ORDER
    </Card.CardLinkButton>
    </Card>

  </Layout>
)

export default SecondPage
