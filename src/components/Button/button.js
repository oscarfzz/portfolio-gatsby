import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./ButtonStyle.scss"

const Button = props => {
  return (
    <div onClick={props.click}>
      <Link to={props.url} className="flat-button">
        <span className="bg"></span> <span className="base"></span>
        <span className="text">{props.content}</span>
      </Link>
    </div>
  )
}

export default Button

Button.propTypes = {
  url: PropTypes.string,
  content: PropTypes.string,
  click: PropTypes.func,
}
