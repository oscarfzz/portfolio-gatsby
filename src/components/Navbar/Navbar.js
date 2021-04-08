import React, { useState, useEffect } from "react"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import Social from "./social"

import "./NavbarStyle.scss"

const Navbar = () => {
  const [navbaropen, setNavbarOpen] = useState(false)

  useEffect(() => {
    if (navbaropen) {
      document.body.classList.add("navBarMobile")
    } else {
      document.body.classList.remove("navBarMobile")
    }
  }, [navbaropen])

  return (
    <header>
      <nav>
        <Logo />
        <div
          className="Toggle"
          navbaropen={navbaropen.toString()}
          onClick={() => setNavbarOpen(!navbaropen)}
          onKeyDown={() => setNavbarOpen(!navbaropen)}
        >
          {navbaropen ? (
            <div className="Menu__Mobile">
              <div className="Hamburger__IsOpen" />
            </div>
          ) : (
            <div className="Menu__Mobile">
              <div className="Hamburger" />
            </div>
          )}
        </div>
        {navbaropen ? (
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
