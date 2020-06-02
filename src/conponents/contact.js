import React from "react"

const Contact = () => {
  return (
    <>
      <h3>Contact Me</h3>
      <form
        className="contact"
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        enctype="application/x-www-form-urlencoded"
        data-netlify="true"
      >
        <div className="grid-container col-2 col-gap-5 small-col-1">
          <input name="name" type="text" placeholder="name" />
          <input name="email" type="email" placeholder="email" />
        </div>
        <textarea name="message" type="text" placeholder="message" />
        <p class="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit" className="primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default Contact
