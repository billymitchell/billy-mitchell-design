import React from "react"
import Layout from "../../conponents/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <form>
        <input placeholder="name"></input>
        <input placeholder="email"></input>
        <input placeholder="message"></input>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}
export default ContactPage
