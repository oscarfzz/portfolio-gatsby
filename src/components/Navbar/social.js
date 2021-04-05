import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Social = () => {
  return (
    <div className="SocialWrap">
      <Link to="/contact" aria-label="Contact">
        <FontAwesomeIcon icon={faEnvelopeSquare} />
      </Link>
      <a
        href="https://github.com/oscarfzz"
        rel="noopener noreferrer"
        aria-label="Github"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a
        href="https://www.linkedin.com/in/oscarfzz/"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  )
}

export default Social
