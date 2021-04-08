import React from "react"
import Navbar from "./Navbar/Navbar"

import Landing from "../pages/landing"

import "../styles/GlobalStyle.scss"

const Layout = ({ isHomePage, children }) => {
  return (
    <>
      <Navbar />
      {isHomePage ? <Landing /> : children}
    </>
  )
}

export default Layout
