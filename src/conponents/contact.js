import React from "react"

const Contact = () => {
  return (
    <>
      <h3>Contact Me</h3>
      <form
        className="contact"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <div className="grid-container col-2 col-gap-5 small-col-1">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
        </div>
        <textarea type="text" placeholder="message" />
        <button type="submit" className="primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default Contact
