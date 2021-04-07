import React from "react"
import Navbar from "./Navbar/Navbar"

import Landing from "../pages/landing"

import "../styles/GlobalStyle.scss"

const Layout = ({ isHomePage }) => {
  return (
    <>
      <Navbar />
      {isHomePage ? <Landing /> : null}
    </>
  )
}

export default Layout
