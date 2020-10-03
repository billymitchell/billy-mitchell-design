import React from "react"
import ContactFrom from "../home/contact-form"
import Parallax from "../utilities/Parallax"

const FullStack = () => {
  return (
    <section id="contact" className="v-h-center-100vh ">
      <Parallax>
        <div className="outer-container">
          <div className="inner-text-width">
            <h3>Contact</h3>
            <p>
              Please contact me if your organization genuinely values design as
              a core strategy in all aspects of business growth.
            </p>
            <ContactFrom />
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default FullStack
