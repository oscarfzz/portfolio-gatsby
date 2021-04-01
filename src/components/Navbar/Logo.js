import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  width: 60px;
  height: 50px;
  background-color: transparent;

  @media (max-width: 768px) and (orientation: landscape) {
    min-width: 24px;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        name: { eq: "full-stack-freelance-seo-logo" }
        extension: { eq: "png" }
      ) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <Img
        imgStyle={{ objectFit: "contain" }}
        fixed={data.file.childImageSharp.fixed}
        alt="logo"
      />
    </LogoWrap>
  )
}

export default Logo
