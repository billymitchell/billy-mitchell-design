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
              Please contact me and I'll get back to you as soon as I can.
            </p>
            <ContactFrom />

          </div>

        </div>
      </Parallax>

    </section>
  )
}

export default FullStack
