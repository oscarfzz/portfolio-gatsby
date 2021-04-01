import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Navbar from "./Navbar/Navbar"
import GlobalStyle from "../styles/GlobalStyle"

import Landing from "../pages/landing"

const Layout = ({ isHomePage }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {isHomePage ? <Landing /> : null}
    </>
  )
}

export default Layout
