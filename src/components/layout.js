import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar/Navbar"

const Layout = ({ isHomePage }) => {
  return (
    <>
      <Navbar />
      {isHomePage ? <div>holi</div> : null}
    </>
  )
}

export default Layout
