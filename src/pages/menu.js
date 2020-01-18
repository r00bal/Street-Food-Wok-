import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ location }) => (
  <Layout location={location} stick="stick">
    <SEO title="Page two" />
    <h1>Hello from menu</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
