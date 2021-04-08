import React, { useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import One from "../../../../assets/seo/one.svg"
import Two from "../../../../assets/seo/two.svg"
import Three from "../../../../assets/seo/three.svg"
import Four from "../../../../assets/seo/four.svg"
import Five from "../../../../assets/seo/five.svg"

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

const SEOProjects = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const getImages = [
    `${process.env.WEBSITE_URL.concat(One.toString())}`,
    `${process.env.WEBSITE_URL.concat(Two.toString())}`,
    `${process.env.WEBSITE_URL.concat(Three.toString())}`,
    `${process.env.WEBSITE_URL.concat(Four.toString())}`,
    `${process.env.WEBSITE_URL.concat(Five.toString())}`,
  ]

  const renderImages = () => {
    return getImages.map((post, indx) => {
      return (
        <div key={indx} className="Portfolio__Hover">
          <ul>
            <li>
              <div
                className="magic-wall_item"
                style={{
                  backgroundImage: "url(" + post + ")",
                }}
              >
                <div className="hover-content"></div>
                <span
                  className="colorbox"
                  onClick={() => {
                    setIsOpen(true)
                  }}
                  onKeyDown={() => {
                    setIsOpen(true)
                  }}
                ></span>
              </div>
            </li>
          </ul>
        </div>
      )
    })
  }

  return (
    <>
      <Carousel responsive={responsive} className="mr-auto ml-auto">
        {renderImages()}
      </Carousel>
      {isOpen && (
        <Lightbox
          mainSrc={getImages[photoIndex]}
          nextSrc={getImages[(photoIndex + 1) % getImages.length]}
          prevSrc={
            getImages[(photoIndex + getImages.length - 1) % getImages.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + getImages.length - 1) % getImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % getImages.length)
          }
        />
      )}
    </>
  )
}

export default SEOProjects
