import React from "react"
import ContactFrom from "../home/contact-form"
import Parallax from "../utilities/Parallax"

const FullStack = () => {
  return (
    <section id="contact" className="v-h-center-100vh ">
      <Parallax>
        <div className="outer-container">
          <div className="inner-text-width">
            <h3>Contact Me</h3>
            <p>
              <b>Work I'm Seaking</b>
            </p>
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
            <ContactFrom />
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default FullStack
