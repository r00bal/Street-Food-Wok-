import React from "react"
import GoogleMap from "../components/layouts/GoogleMap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ location }) => (
  <Layout location={location} stick="stick" headerTitle="Find us">
    <SEO title="Find us" />
    <GoogleMap />
  </Layout>
)

export default SecondPage
