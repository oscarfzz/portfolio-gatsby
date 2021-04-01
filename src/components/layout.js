import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Navbar from "./Navbar/Navbar"
import GlobalStyle from "../styles/GlobalStyle"

const Layout = ({ isHomePage }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {isHomePage ? <div>holi</div> : null}
    </>
  )
}

export default Layout
