import React, { useState } from "react"

import Title from "../../Title/title"
import ProgressBar from "../../Progress/progress"
import Button from "../../Button/button"
import SEOProjects from "./views/seoprojects"

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

  const FullStackProjects = () => {
    return (
      <>
        <Title name={"Full Stack Portfolio"} TitleType={"h2"} />
        <ProgressBar />
        <Button
          content={"Back"}
          click={() => {
            setShowSelect(true)
            setShowFullStack(false)
          }}
        />
      </>
    )
  }

  return (
    <>
      {showSelect ? (
        <div className="Container">
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
                        backgroundImage:
                          "url(" + "https://svgshare.com/i/VpN.svg" + ")",
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
                          "url(" + "https://svgshare.com/i/Vor.svg" + ")",
                      }}
                    >
                      <div className="hover-content"></div>
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
          </div>
        </div>
      ) : showSEO ? (
        SEOprojects()
      ) : (
        FullStackProjects()
      )}
    </>
  )
}

export default Portfolio
