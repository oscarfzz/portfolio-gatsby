import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const NavbarLinks = () => {
  const { allWpMenuItem } = useStaticQuery(
    graphql`
      query {
        allWpMenuItem {
          edges {
            node {
              label
              path
            }
          }
        }
      }
    `
  )

  return (
    <>
      {allWpMenuItem.edges.map((item, index) => (
        <div key={index}>
          <Link className="NavItem" to={item.node.path}>
            {item.node.label}
          </Link>
        </div>
      ))}
    </>
  )
}

export default NavbarLinks
