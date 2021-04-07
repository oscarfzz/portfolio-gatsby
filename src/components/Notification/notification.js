import React from "react"
import PropTypes from "prop-types"

import "./NotificationStyle.scss"

const Notification = props => {
  return (
    <>
      {props.option === "success" ? (
        <div className="Notify_container success">
          <div className="icon">
            <svg
              data-name="check-mark (1)"
              height="30"
              id="check-mark_1_"
              viewbox="0 0 30 30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="Group 3" id="Group_3" transform="translate(0 0)">
                <path
                  d="M25.606,25.606a15,15,0,1,0-21.212,0A15,15,0,0,0,25.606,25.606ZM9.622,12.707,13,16.08,20.384,8.7,23,11.312l-7.383,7.383L13,21.309l-2.614-2.614L7.008,15.321Z"
                  data-name="Path 2"
                  fill="#326e41"
                  id="Path_2"
                  transform="translate(0 0)"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <p>{props.content}</p>
          </div>
        </div>
      ) : (
        <div className="Notify_container error">
          <div className="icon">
            <svg
              height="30"
              id="close"
              viewbox="0 0 30 30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.7,4.092a15,15,0,0,0-.61,21.2q.15.159.3.313A15,15,0,1,0,4.7,4.092ZM7.58,10.548l2.969-2.969L15,12.033l4.454-4.454,2.97,2.969L17.973,15l4.454,4.453-2.97,2.97L15,17.971,10.55,22.426,7.58,19.456,12.034,15Z"
                data-name="Path 4"
                fill="#723036"
                id="Path_4"
                transform="translate(-0.001 0)"
              ></path>
            </svg>
          </div>
          <div>
            <p>{props.content}</p>
          </div>
        </div>
      )}
    </>
  )
}

Notification.propTypes = {
  option: PropTypes.string,
  content: PropTypes.string,
}

export default Notification
