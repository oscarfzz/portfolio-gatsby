import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

import Hero from "../components/Landing/Hero/hero"
import About from "../components/Landing/About/about"
import Portfolio from "../components/Landing/Portfolio/portfolio"
import Contact from "../components/Landing/Contact/contact"

const Landing = ({ data }) => {
  const { wpPage, wpUser } = useStaticQuery(
    graphql`
      query {
        wpPage(isFrontPage: { eq: true }) {
          seo {
            canonical
            metaDesc
            metaRobotsNofollow
            metaRobotsNoindex
            title
            opengraphImage {
              localFile {
                childImageSharp {
                  resolutions {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <main>
      <SEO
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        canonical={wpPage.seo.canonical}
        OGimage={
          wpPage.seo.opengraphImage.localFile.childImageSharp.resolutions.src
        }
        robots={wpPage.seo.metaRobotsNoindex
          .concat(", ")
          .concat(wpPage.seo.metaRobotsNofollow)
          .toUpperCase()}
      />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Landing
