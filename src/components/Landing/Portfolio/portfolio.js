import React, { useState } from "react"

import Title from "../../Title/title"
import ProgressBar from "../../Progress/progress"
import Button from "../../Button/button"
import SEOProjects from "./views/seoprojects"
import FullStackProjects from "./views/fullstackprojects"
import SEOsvg from "../../../assets/seo-logo.svg"
import FullStackSVG from "../../../assets/full-stack-logo.svg"

import "./Portfolio.scss"

const Portfolio = () => {
  const [showSelect, setShowSelect] = useState(true)
  const [showSEO, setShowSEO] = useState(false)
  const [showFullStack, setShowFullStack] = useState(false)

  const SEOprojects = () => {
    return (
      <>
        <div className="Container">
          <Title name={"SEO Portfolio"} TitleType={"h2"} />
          <ProgressBar />
          <SEOProjects />
          <div className="disclaimer">
            <p>
              ⚠️Warning!: I don't add more information about the projects
              because I don't have permission and it's not something I like to
              do.
            </p>
          </div>
          <Button
            content={"Back"}
            click={() => {
              setShowSelect(true)
              setShowSEO(false)
            }}
          />
        </div>
      </>
    )
  }

  const StackProjects = () => {
    return (
      <>
        <div className="github__container">
          <FullStackProjects />
          <div className="disclaimer">
            <p>
              ⚠️Warning!: This section is in beta version as some works are
              missing such as developments in PHP, AMP, Angular, etc...
            </p>
          </div>
          <Button
            content={"Back"}
            click={() => {
              setShowSelect(true)
              setShowFullStack(false)
            }}
          />
        </div>
      </>
    )
  }

  return (
    <>
      {showSelect ? (
        <div className="Container__Content" id="portfolio">
          <Title name={"Portfolio"} TitleType={"h2"} />
          <ProgressBar />
          <div className="Portfolio ml-auto mr-auto">
            <div className="SEO">
              <div className="Portfolio__Hover">
                <ul>
                  <li>
                    <div
                      className="magic-wall_item lazyloaded"
                      style={{
                        backgroundImage: "url(" + `${SEOsvg.toString()}` + ")",
                      }}
                    >
                      <div className="hover-content vcenter"></div>
                      <span
                        className="colorbox"
                        onClick={() => {
                          setShowSelect(false)
                          setShowSEO(true)
                        }}
                      ></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Developer">
              <div className="Portfolio__Hover">
                <ul>
                  <li>
                    <div
                      className="magic-wall_item"
                      style={{
                        backgroundImage:
                          "url(" + `${FullStackSVG.toString()}` + ")",
                      }}
                    >
                      <div className="hover-content"></div>
                      <span
                        className="colorbox"
                        onClick={() => {
                          setShowSelect(false)
                          setShowFullStack(true)
                        }}
                      ></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : showSEO ? (
        SEOprojects()
      ) : (
        StackProjects()
      )}
    </>
  )
}

export default Portfolio
