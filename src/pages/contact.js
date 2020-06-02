import React from "react"
import Layout from "../conponents/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <textarea type="text" placeholder="message" />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}
export default ContactPage
