import React from "react"
import { Link } from "gatsby"
import GoogleMap from "../components/layouts/GoogleMap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ShowHideElement } from '../components/animations'

const SecondPage = ({ location }) => (
  <Layout location={location} stick="stick" headerTitle="Find us">
    <SEO title="Find us" />
    <ShowHideElement>
      <GoogleMap />
    </ShowHideElement>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
