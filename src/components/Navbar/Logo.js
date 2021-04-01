import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  width: 80px;
  height: 60px;
  background-color: var(--primary-color);

  @media (max-width: 768px) and (orientation: landscape) {
    min-width: 24px;
  }
`
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
