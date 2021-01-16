import React from "react"
import ContactFrom from "../home/contact-form"
import Parallax from "../utilities/Parallax"
import Separator from "../../components/separator"

const DisableParallaxMobile = () => {
  if (window.innerWidth <= 800 || window.innerHeight <= 600) {
    console.log("Parallax Disabled On Mobile");
    return true
  } else {
    console.log("Parallax Enabled On Desktop");
    return false
  }
}

const FullStack = () => {
  return (
    <>
      <Separator className="bg-black" />
      <section id="contact" className="v-h-center-100vh small-padding-top-100 small-padding-bottom-100">
        <div className="outer-container">
          <div className="inner-width-600">
            <Parallax disabled={DisableParallaxMobile()}>
              <h3>Contact</h3>
              <p>
                Please contact me and I'll get back to you as soon as I can.
            </p>
              <ContactFrom />
            </Parallax>
          </div>
        </div>
      </section>
    </>
  )
}

export default FullStack
