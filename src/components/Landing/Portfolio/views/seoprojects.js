import React, { useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import Icon from "../../../../assets/view-projects.svg"

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
    `http://localhost:8000/${Icon.toString()}`,
    "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    "https://source.unsplash.com/qDkso9nvCg0/600x799",
    "https://source.unsplash.com/iecJiKe_RNg/600x799",
    "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    "https://source.unsplash.com/zh7GEuORbUw/600x799",
    "https://source.unsplash.com/PpOHJezOalU/800x599",
    "https://source.unsplash.com/I1ASdgphUH4/800x599",
  ]
  console.log(Icon.toString())
  const renderImages = () => {
    return getImages.map((post, indx) => {
      return (
        <div className="Portfolio__Hover">
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
          imageCaption={[
            <a
              class="creditLink"
              href="http://creativecommons.org/licenses/by/2.0/"
              title="Attribution License"
            >
              Some rights reserved
            </a>,
          ]}
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
