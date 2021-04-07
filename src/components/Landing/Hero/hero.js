import React from "react"

import Title from "../../Title/title"
import Button from "../../Button/button"
import TypeWriter from "../../Typewriter/typewriter"

import DrifterStars from "@devil7softwares/react-drifter-stars"
import "@devil7softwares/react-drifter-stars/dist/styles.css"

import "./HeroStyle.scss"
import Lateral from "../../Lateral/lateral"

const Hero = () => {
  return (
    <>
      <div className="Hero-animation">
        <DrifterStars />
        <div className="Container">
          <div className="Hero">
            <div className="title">
              <Title
                name={"Hi, I’m Oscar Fernandez"}
                addBR={3}
                TitleType={"h1"}
              />
            </div>
            <div className="description">
              <TypeWriter content={"Full Stack Developer & Technical SEO"} />
            </div>
            <div className="actions">
              <Button url={"/contact"} content={"Get In Touch"} />
            </div>
          </div>
        </div>
      </div>
      <Lateral />
    </>
  )
}

export default Hero
