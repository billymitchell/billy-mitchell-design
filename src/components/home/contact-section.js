import React, { useEffect, useState } from "react"
import ContactFrom from "../home/contact-form"
import Parallax from "../utilities/Parallax"
import Separator from "../../components/separator"



const FullStack = () => {
  // Set default state of parallax to enabled  
  const [parallaxDisabledState, setparallaxDisabledState] = useState(false);
  // since no .window is available until after the render, useEffect
  useEffect(() => {
    // check for small windows
    if (window.innerWidth <= 800 || window.innerHeight <= 600) {
      console.log("Parallax Disabled On Mobile")
      // Set true for small screens
      setparallaxDisabledState(true)
    } else {
      console.log("Parallax Enabled On Desktop")
    }
    // when the state changes, re-render
  }, [parallaxDisabledState])
  return (
    <>
      <Separator className="bg-black" />
      <section id="contact" className="v-h-center-100vh small-padding-top-100 small-padding-bottom-100">
        <div className="outer-container">
          <div className="inner-width-600">
            <Parallax disabled={parallaxDisabledState}>
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
