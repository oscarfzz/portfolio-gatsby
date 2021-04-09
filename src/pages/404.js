import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button/button"

import "./404Style.scss"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} noHeader noFooter>
      <SEO title="404: Not Found" />
      <div className="wrapper_404">
        <div className="text-anim" title="404">
          404
        </div>
        <Button url={"/"} content={"Go Home"} />
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
