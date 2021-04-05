import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

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

const Projects = []

const SEOProjects = () => {
  return (
    <>
      <Carousel responsive={responsive} className="mr-auto ml-auto">
        <div className="Portfolio__Hover">
          <ul>
            <li>
              <div
                className="magic-wall_item"
                style={{
                  backgroundImage:
                    "url(" + "https://svgshare.com/i/Vpa.svg" + ")",
                }}
              >
                <div className="hover-content"></div>
                <span className="colorbox"></span>
              </div>
            </li>
          </ul>
        </div>
      </Carousel>
    </>
  )
}

export default SEOProjects
