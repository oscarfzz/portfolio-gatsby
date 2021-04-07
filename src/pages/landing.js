import React from "react"
import Hero from "../components/Landing/Hero/hero"
import About from "../components/Landing/About/about"
import Portfolio from "../components/Landing/Portfolio/portfolio"
import Contact from "../components/Landing/Contact/contact"

const Landing = () => {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Landing
