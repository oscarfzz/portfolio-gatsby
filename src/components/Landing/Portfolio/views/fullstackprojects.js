import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import "../Portfolio.scss"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const FullStackProjects = () => {
  const {
    github: {
      search: { edges },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          search(query: "user:oscarfzz is:public", type: REPOSITORY, last: 20) {
            edges {
              node {
                ... on GitHub_Repository {
                  id
                  name
                  url
                  languages(last: 4) {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }
                  forkCount
                  stargazerCount
                }
              }
            }
          }
        }
      }
    `
  )

  const getRepositories = () => {
    return edges.map(({ node }) => (
      <div className="github__card" key={node.id} as="a">
        <div className="title">
          <h4>{node.name}</h4>
          <p>{node.description}</p>
        </div>
        <div className="technology">
          <div className="content">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"
                ></path>
              </svg>
              <span>{node.stargazerCount}</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M6.5 7.75v1A2.25 2.25 0 008.75 11h6.5a2.25 2.25 0 002.25-2.25v-1H19v1a3.75 3.75 0 01-3.75 3.75h-6.5A3.75 3.75 0 015 8.75v-1h1.5z"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M11.25 16.25v-5h1.5v5h-1.5z"
                ></path>
              </svg>
              <span>{node.forkCount}</span>
            </div>
          </div>
          <div className="content">
            <div className="stack">
              {node.languages.edges.map((item, index) => (
                <span key={index}>{item.node.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <>
      <Carousel responsive={responsive} className="mr-auto ml-auto">
        {getRepositories()}
      </Carousel>
    </>
  )
}

export default FullStackProjects
