import React, { useState, useEffect, useRef } from "react"
import { useFormik } from "formik"
import axios from "axios"

import Title from "../../Title/title"
import ProgressBar from "../../Progress/progress"
import Notification from "../../Notification/notification"

import "./ContactStyle.scss"

const Contact = () => {
  const WEBSITE_URL = process.env.ADM_PANEL_URL
  const FORM_ID = process.env.CONTACT_ID
  const [token, setToken] = useState("")
  const [isSuccessMessage, setIsSuccessMessage] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  useEffect(() => {
    axios({
      method: "post",
      url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
      data: {
        username: process.env.WP_USER_SUSCRIPTER,
        password: process.env.WP_USER_SUSCRIPTER_PASSWORD,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        setToken(response.data.token)
      })
      .catch(error => console.error("Error", error))
  }, [])

  const { handleChange, isSubmitting, values, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (
      { name, email, subject, message },
      { setSubmitting, resetForm }
    ) => {
      setSubmitting(true)
      const bodyFormData = new FormData()
      bodyFormData.set("your-name", name)
      bodyFormData.set("your-email", email)
      bodyFormData.set("your-subject", subject)
      bodyFormData.set("your-message", message)

      axios({
        method: "post",
        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
        data: bodyFormData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
        .then(response => {
          resetForm()
          setSubmitting(false)
          setMessageSent(true)
          setIsSuccessMessage(true)
        })
        .catch(error => {
          setSubmitting(false)
          setMessageSent(true)
          setIsSuccessMessage(false)
        })
    },
  })

  useEffect(() => {
    setTimeout(() => {
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 3000)
  }, [isSuccessMessage, messageSent])

  return (
    <>
      <div className="Container__Content">
        <Title name={"Get In Touch"} TitleType={"h2"} />
        <ProgressBar />
        <div className="contact-form">
          <form id="contact" onSubmit={handleSubmit}>
            <ul>
              <li className="half animated">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input__field input__field--hoshi"
                  onChange={handleChange}
                  value={values.name}
                  required
                />
                <label className="input__label input__label--hoshi input__label--hoshi-color-2" />
              </li>
              <li className="half animated">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input__field input__field--hoshi"
                  onChange={handleChange}
                  value={values.email}
                  required
                />
                <label className="input__label input__label--hoshi input__label--hoshi-color-2" />
              </li>
              <li className="animated">
                <input
                  id="subject"
                  name="subject"
                  className="input__field input__field--hoshi"
                  placeholder="Subject"
                  type="text"
                  onChange={handleChange}
                  value={values.subject}
                  required
                />
                <label className="input__label input__label--hoshi input__label--hoshi-color-2" />
              </li>
              <li className="animated">
                <textarea
                  className="input__field input__field--hoshi"
                  placeholder="Message"
                  id="message"
                  name="message"
                  type="text"
                  onChange={handleChange}
                  value={values.message}
                  required
                />
                <label className="input__label input__label--hoshi input__label--hoshi-color-2" />
              </li>
            </ul>
            {messageSent && isSuccessMessage && (
              <Notification
                option={"success"}
                content={"Message sent successfully! Thank you."}
              />
            )}
            {messageSent && !isSuccessMessage && (
              <Notification
                option={"error"}
                content={"Something went wrong please try again."}
              />
            )}
            <button
              type="submit"
              value="Send Message"
              disabled={isSubmitting}
              className="flat-button submit-form"
            >
              <div className="submit-div">
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">Send message!</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
