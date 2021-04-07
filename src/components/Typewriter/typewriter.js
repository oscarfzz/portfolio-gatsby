import React from "react"
import PropTypes from "prop-types"

import "./TypewriterStyle.scss"

const TypeWriter = props => {
  return <p className="line">{props.content}</p>
}

export default TypeWriter

TypeWriter.propTypes = {
  content: PropTypes.string,
}
