import React from "react"
import styled from "@emotion/styled"
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
        <NavItem activeStyle={{ color: "var(--textLink" }} to={item.node.path}>
          {item.node.label}
        </NavItem>
      ))}
    </>
  )
}

export default NavbarLinks

const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 13px;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--textLink);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: var(--textLink);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    margin: 3% 0;
    font-size: 13px;
    z-index: 6;
  }
`
