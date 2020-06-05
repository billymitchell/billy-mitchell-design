import React from "react"
import ContactFrom from "../conponents/contact-form"

const FullStack = () => {
  return (
    <section className="v-h-center-100vh bg-blue-5">
      <div className="text-container-width">
        <h3>Contact Me</h3>
        <p>
          <b>Work I'm Seaking</b>
          <ul>
            <li>Full-time, Part-time or Extended Contract</li>
            <li>Remote or Partially Remote</li>
            <li>Design Agencies or In-House Design Teams</li>
            <li>Development Teams (Front-end)</li>
            <li>
              Organizations that genuinely value design as a core strategy to
              grow the business
            </li>
          </ul>
        </p>
        <ContactFrom />
      </div>
    </section>
  )
}

export default FullStack
