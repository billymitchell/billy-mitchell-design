import React, { useEffect, useState } from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import Parallax from "../utilities/Parallax"
import SeparatorBottom from "../../components/separator-bottom"



const FullStack = () => {
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
      <section id="full-stack" className="home-page-section bg-black mobile-height-fluid small-padding-top-100 small-padding-bottom-100">
        <div className="outer-container">
          <div className="inner-width-1000">
            <Parallax disabled={parallaxDisabledState}>
              <InViewAnimation
                className="init-invisible"
              >
                <h3>What is Full Stack Design?</h3>
              </InViewAnimation>
              <InViewAnimation
                delay="delay-250ms"
                className="init-invisible"
              >
                <p>
                  Full Stack design is an emerging term for a set of skills that include User-experience Design, User-interface Design, Front-end Development and more.
              </p>
              </InViewAnimation>
              <InViewAnimation
                delay="delay-500ms"
                className="init-invisible"
              >
                {/* <img srcSet="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/home/home-graph-mobile-01_v121wc"
                  className="fluid mobile center"
                  alt="full-stack design"
                >
                </img>
                <img src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/home/home-graph-desktop-01_rdrqma"
                  className="fluid desktop"
                  alt="full-stack design">
                </img> */}


                <div className="fullstack-container">
                  <div className="ux">
                    <div className="l-bar"></div>
                    <h4>
                      UX Design
                      </h4>
                    <p>
                      Strategy<br />
                          Research<br />
                            Testing
                          </p>
                    <div className="b-bar"></div>
                  </div>
                  <div className="ui">
                    <div className="l-bar"></div>
                    <h4>
                      UI Design
                          </h4>
                    <p>
                      Visuals<br />
                              Prototypes<br />
                                Design Systems
                              </p>
                    <div className="b-bar"></div>
                  </div>
                  <div className="front-end-dev">
                    <div className="l-bar"></div>
                    <h4>
                      Front End Development
                              </h4>
                    <p>
                      HTML<br />
                                  CSS<br />
                                    Javascript
                              </p>
                    <div className="b-bar"></div>
                  </div>
                </div>

              </InViewAnimation>
            </Parallax>
          </div>
        </div>
      </section>
      <SeparatorBottom className="bg-black" />
    </>
  )
}

export default FullStack
