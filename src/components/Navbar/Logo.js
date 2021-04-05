import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        name: { eq: "oscar-fernandez-full-stack-seo" }
        extension: { eq: "png" }
      ) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="LogoWrap">
      <Link to="/">
        <Img
          imgStyle={{ objectFit: "contain" }}
          fixed={data.file.childImageSharp.fixed}
          alt="logo"
        />
      </Link>
    </div>
  )
}

export default Logo
