import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutBlog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About KLean Plate Club" />
        <h1>About KLean Plate Club</h1>
        <p>KLean Plate Club is a pop-up blog and coding side project by Tina TM. This blog documents the time spent eating our way through Kuala Lumpur in July 2019.</p>
        <p>This blog is built with Gatsby and React as a way to brush up on coding skills when I return to work in October.</p>
        <p>Questions? Comments? Food recs? <a style={{
          boxShadow: `none`,
          textDecoration: `none`,
          backgroundImage: `none`,
        }} href="mailto:tinatrenkner@gmail.com">Email me</a>.</p>
        <Link style={{
          boxShadow: `none`,
          textDecoration: `none`,
          backgroundImage: `none`,
        }} to={`/`}>Go back home.</Link>
      </Layout>

    )
  }
}

export default AboutBlog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
