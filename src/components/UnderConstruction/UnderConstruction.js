import React from "react"
import PropTypes from "prop-types"

import "./UnderConstructionStyle.scss"

const Construction = props => {
  return (
    <>
      <div class="maintenance-wrap">
        <div class="maintenance-anim"></div>
        <section class="maintenance-content">
          <h1>It is under construction! Sorry 😋</h1>
          <p>{props.content}</p>
        </section>
      </div>
    </>
  )
}

export default Construction

Construction.propTypes = {
  content: PropTypes.string,
}
