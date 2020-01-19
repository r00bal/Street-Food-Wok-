import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ location }) => (
  <Layout location={location} stick="stick" headerTitle="Find us">
    <SEO title="Page two" />
    <h1>Hello from find us</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
