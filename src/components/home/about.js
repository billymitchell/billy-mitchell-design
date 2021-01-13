import React from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import Parallax from "../utilities/Parallax"

const FullStack = () => {
  return (
    <section id="about" className="v-h-center-100vh bg-gray-1 mobile-height-fluid">
      <Parallax>
        <div className="outer-container">
          <div className="inner-text-width">
            <InViewAnimation
              animation="fade-in-up"
              duration="time-1000ms"
              delay="delay-250ms"
              fillmode="forwards"
              easing="ease-in-out-quad"
              iteration="loop-1"
              className="init-invisible"
            >
              <div className="container">
                <div className="grid-container col-1-2 col-gap-30 small-col-1">
                  <img className="border-box fluid clip-circular padding-8 border-r-full bg-gradient" src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/home/PhotoByMicahEWood-156-web.jpg" />
                  <p>
                    I am a designer and developer with 7+ years of experience who operates Billy Mitchell Design in Baltimore, Maryland. I contract on an ongoing basis in addition to availability as a full-time employee. I've worked with everyone from small businesses to fortune 500 companies to apply design thinking, leverage human-centered design principles, and build solutions to complex problems. In addition to numerous web development courses, I've obtained a BFA in Design from the University of Maryland, Baltimore County.
                  </p>
                </div>
              </div>

            </InViewAnimation>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default FullStack
