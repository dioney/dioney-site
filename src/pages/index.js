import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Showcase from "../components/showcase"
import Services from "../components/services"
import Works from "../components/works"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Showcase />
    <Services />
    <Works />
  </Layout>
)

export default IndexPage
