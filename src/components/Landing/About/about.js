import React, { useState, useEffect, useRef } from "react"

import Title from "../../Title/title"
import ProgressBar from "../../Progress/progress"

import { useWindowWidth } from "@react-hook/window-size"
import "./AboutStyle.scss"

const TagCloud = require("TagCloud")
const About = () => {
  const [radius, setRadius] = useState(false)
  const [showCloud, setShowCloud] = useState(false)
  const [changeTag, setChangeTag] = useState(0)
  const width = useWindowWidth()
  const container = ".editor"
  const texts = [
    "Python",
    "GatsbyJS",
    "ReactJS",
    "JavaScript",
    "JQuery",
    "BEM",
    "JSON",
    "CSS3",
    "API REST",
    "SQL",
    "SQL",
    "PHP",
    "NodeJS",
    "WordPress",
    "Elementor",
    "Divi Builder",
    "SEO",
    "Ahrefs",
    "SemRush",
    "MySQL",
    "Git",
    "ES5/ES6+",
    "Shopify",
    "SaSS",
    "Bootstrap",
    "Foundation",
    "PostgresSQL",
  ]

  const options = {
    radius: radius,
    initSpeed: "slow",
  }
  const removeDiv = () => {
    document.querySelectorAll(".tagcloud").forEach(function (a) {
      a.remove()
    })
    return setChangeTag(2)
  }

  useEffect(() => {
    setShowCloud(true)
  }, [])

  useEffect(() => {
    if (showCloud && width < 500) {
      setRadius(150)
      removeDiv()
    }
    if (showCloud && width > 500) {
      setRadius(210)
      removeDiv()
    }
    if (showCloud && width < 340) {
      setRadius(120)
      removeDiv()
    }
  }, [showCloud, width])

  useEffect(() => {
    if (radius != false && changeTag === 2) {
      TagCloud(container, texts, options)
      setChangeTag(1)
    }
  }, [radius, changeTag])

  return (
    <>
      {showCloud ? (
        <div className="Container">
          <div className="About">
            <div className="description">
              <Title name={"About Me"} TitleType={"h2"} />
              <ProgressBar />
              <p>
                Hello 👋! My name is &Oacute;scar Fern&aacute;ndez Morel and I
                have been a technology addict from a very early age.&nbsp;
              </p>
              <p>
                My professional experience begins in 2017 when I decided to
                start as a Freelance SEO, getting to work for sites as big as{" "}
                <a
                  href="https://www.appinformatica.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  APPInformatica
                </a>
                ,{" "}
                <a
                  href="https://www.yucatan.com.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diario de Yucatan
                </a>
                , where I made complete SEO strategies.
              </p>
              <p>
                Also, I consider myself a Full Stack developer working mainly
                with technologies such as PHP, AMP, ReactJS, VueJS, NodeJS &amp;
                Python. I am currently focused on creating accessible and
                inclusive digital products and experiences for diverse clients.
              </p>
              <p>
                I'm not afraid to learn new things, as I love to keep evolving
                and overcoming new challenges 😎.
              </p>
              <p>
                Scroll down to learn more about the projects I've worked on as a
                Web Developer or SEO Technician 🚀.
              </p>
              <p>&nbsp;</p>
            </div>
            <div className="editor mr-auto ml-auto"></div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default About
