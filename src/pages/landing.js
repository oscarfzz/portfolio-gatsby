import React, { useState, useEffect, useRef } from "react"
import Hero from "../components/Landing/Hero/hero"
import About from "../components/Landing/About/about"
import Portfolio from "../components/Landing/Portfolio/portfolio"

const Landing = () => {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
    </main>
  )
}

export default Landing
