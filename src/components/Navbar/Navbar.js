import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import Social from "./social"

import "../../styles/NavbarStyle.scss"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <header>
      <nav>
        <Logo />
        <div
          className="Toggle"
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <div className="Menu__Mobile">
              <div className="Hamburger__IsOpen" />
            </div>
          ) : (
            <div className="Menu__Mobile">
              <div className="Hamburger" />
            </div>
          )}
        </div>
        {navbarOpen ? (
          <div className="Navbox__isMobile">
            <NavbarLinks />
            <Social />
          </div>
        ) : null}
        <div className="Navbox">
          <NavbarLinks />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
