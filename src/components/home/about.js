import React, { useEffect, useState } from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import Parallax from "../utilities/Parallax"
import Tilt from 'react-tilt'
// https://github.com/jonathandion/react-tilt
// import Separator from "../../components/separator"
import SeparatorTop from "../../components/separator-top"
import SeparatorBottom from "../../components/separator-bottom"



const About = () => {
  // Set default state of parallax to enabled / not disabled
  const [parallaxDisabledState, setparallaxDisabledState] = useState(false);

  // .window is not available until after the render - useEffect needed
  useEffect(() => {

    function handleResize() {
      // check for small windows
      if (window.innerWidth <= 800 || window.innerHeight <= 600) {
        // Set true for small screens
        setparallaxDisabledState(true)
        // log state
        console.log("Parallax Disabled", parallaxDisabledState)
      } else {
        // log state
        console.log("Parallax Disabled", parallaxDisabledState)
      }
    }

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // When the window resizes, call handleResize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);

  }, [parallaxDisabledState])
  return (
    <>
      <SeparatorTop className="bg-gray-1" />
      <section id="about" className="home-page-section bg-gray-1 mobile-height-fluid small-padding-top-50 small-padding-bottom-50">
        <div className="outer-container">
          <div className="inner-width-800">
            <Parallax disabled={parallaxDisabledState}>
              <div className="container">
                <div className="grid-container col-1-2 col-gap-30 small-col-1">
                  <div className="align-self-center">
                    <InViewAnimation
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
                        <img className="border-box fluid clip-circular padding-6 border-r-full bg-gradient max-width-60vw center" src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/home/PhotoByMicahEWood-156-web.jpg" alt="billy mitchell head shot" />
                      </Tilt>
                    </InViewAnimation>
                  </div>
                  <InViewAnimation
                    delay="delay-500ms"
                    className="init-invisible"
                  >
                    <p>
                      I am a designer and developer with 7+ years of experience who operates the agency Billy Mitchell Design in Baltimore, Maryland. I contract on an ongoing basis in addition to availability as a full-time employee. I've worked with everyone from small businesses to fortune 500 companies. I apply design thinking, leverage human-centered design principles, and build solutions to complex problems. In addition to numerous web development courses, I've obtained a BFA in Design from the University of Maryland, Baltimore County.<br />
                      <br />
                      Accomplishments Include:<br />
                      Publication of the Baltimore Love Project Book<br />
                      Illustration published in the Baltimore City Paper<br />
                      Obtaining the Baltimore Midtown Development Award
                    </p>
                  </InViewAnimation>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section >
      <SeparatorBottom className="bg-gray-1" />
    </>
  )
}

export default About
