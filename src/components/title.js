import React, { Fragment } from "react"
import PropTypes from "prop-types"

const Title = props => {
  const title = Array.from(props.name)
  const addAnimation = e => {
    e.preventDefault()
    if (
      e.currentTarget.classList.contains("rubberBand") &&
      !e.currentTarget.classList.contains("animated")
    ) {
      e.currentTarget.classList.add("animated")
    }
  }

  const removeAnimation = e => {
    e.preventDefault()
    if (
      e.currentTarget.classList.contains("rubberBand") &&
      e.currentTarget.classList.contains("animated")
    ) {
      e.currentTarget.classList.remove("animated")
    }
  }

  const CreateTitle = () => {
    return title.map((item, index) => {
      return (
        <Fragment key={index}>
          <span
            onMouseEnter={addAnimation}
            onAnimationEnd={removeAnimation}
            className="rubberBand"
            aria-hidden="true"
          >
            {item}
          </span>
          {item === " " ? " " : null}
          {index === props.addBR ? <br></br> : null}
        </Fragment>
      )
    })
  }

  return (
    <>
      <props.TitleType aria-label="Hi, I'm Óscar Fernández">
        {CreateTitle()}
      </props.TitleType>
    </>
  )
}

export default Title

Title.propTypes = {
  title: PropTypes.string,
  addBR: PropTypes.any,
  TitleType: PropTypes.any,
}
