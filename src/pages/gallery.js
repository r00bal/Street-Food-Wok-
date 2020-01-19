import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ location }) => (
  <Layout location={location} stick="stick" headerTitle="Gallery">
    <SEO title="Page two" />
    <h1>Hello from gallery</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
