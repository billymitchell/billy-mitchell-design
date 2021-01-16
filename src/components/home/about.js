import React, { useEffect, useState } from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import Parallax from "../utilities/Parallax"
import Tilt from 'react-tilt'
// https://github.com/jonathandion/react-tilt
import Separator from "../../components/separator"




const About = () => {
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
      <Separator className="bg-gray-1" />
      <section id="about" className="v-h-center-100vh bg-gray-1 mobile-height-fluid small-padding-top-100 small-padding-bottom-100">
        <div className="outer-container">
          <div className="inner-width-700">
            <Parallax disabled={parallaxDisabledState}>
              <div className="container">
                <div className="grid-container col-1-2 col-gap-30 small-col-1">
                  <InViewAnimation
                    animation="fade-in-up"
                    duration="time-1000ms"
                    delay="delay-0ms"
                    fillmode="forwards"
                    easing="ease-in-out-quad"
                    iteration="loop-1"
                    className="init-invisible"
                  >
                    <Tilt className="Tilt"
                      options={{
                        perspective: 1000,
                        scale: 1.1,
                        speed: 1000,
                        transition: true,
                        reset: true,
                        reverse: true,
                      }}
                    >
                      <img className="border-box fluid clip-circular padding-6 border-r-full bg-gradient" src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/home/PhotoByMicahEWood-156-web.jpg" alt="billy mitchell head shot" />
                    </Tilt>
                  </InViewAnimation>
                  <InViewAnimation
                    animation="fade-in-up"
                    duration="time-1000ms"
                    delay="delay-250ms"
                    fillmode="forwards"
                    easing="ease-in-out-quad"
                    iteration="loop-1"
                    className="init-invisible"
                  >
                    <p>
                      I am a designer and developer with 7+ years of experience who operates Billy Mitchell Design in Baltimore, Maryland. I contract on an ongoing basis in addition to availability as a full-time employee. I've worked with everyone from small businesses to fortune 500 companies to apply design thinking, leverage human-centered design principles, and build solutions to complex problems. In addition to numerous web development courses, I've obtained a BFA in Design from the University of Maryland, Baltimore County.
                    </p>
                  </InViewAnimation>
                </div>
              </div>

            </Parallax>
          </div>
        </div>
      </section >
    </>
  )
}

export default About
