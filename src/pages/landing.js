import React, { useState, useEffect, useRef } from "react"
import NET from "vanta/dist/vanta.net.min.js"
import { Helmet } from "react-helmet"
import * as THREE from "three"

import Title from "../components/title"

import { LandingStyle } from "../styles/LandingStyle"

const Landing = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 9.0,
          maxDistance: 25.0,
          spacing: 17.0,
          color: 0xc7cedb,
          backgroundColor: 0x1d1d1d,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  useEffect(() => {
    let showLetters = setTimeout(() => setShow(true), 300)
    return () => {
      clearTimeout(showLetters)
    }
  }, [])

  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.net.min.js"></script>
      </Helmet>
      <LandingStyle ref={myRef}>
        <div>
          {/* <Fade show={show}> */}
          <Title
            name={"Hi, I’m Oscar Fernandez"}
            addBR={3}
            TitleType={"h1"}
            className="holi"
          />
          <p className="line">Full Stack Developer & Technical SEO</p>{" "}
          <a rel="contact" href="/contact/" className="flat-button">
            <div>
              {" "}
              <span className="bg"></span> <span className="base"></span>{" "}
              <span className="text">Get In Touch</span>
            </div>{" "}
          </a>
          {/* </Fade> */}
        </div>
      </LandingStyle>
    </>
  )
}

export default Landing
