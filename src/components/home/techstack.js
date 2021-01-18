import React, { useEffect, useState } from "react"
import InViewAnimation from "../../components/utilities/InViewAnimation"
import Parallax from "../../components/utilities/Parallax"
import Separator from "../../components/separator"

const TechStack = () => {
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
      <Separator className="bg-white" />
      <section id="tech-stack" className="v-h-center-100vh bg-white small-padding-top-100 small-padding-bottom-100">
        <div className="outer-container">
          <div className="inner-width-1000">
            <Parallax disabled={parallaxDisabledState}>
              <InViewAnimation
                className="init-invisible"
              >
                <h3>Tech Stack</h3>
              </InViewAnimation>
              <InViewAnimation
                delay="delay-250ms"
                className="init-invisible"
              >
                <p>
                  Here are some of the technologies and applications I use to
                  bring ideas to life.
              </p>
              </InViewAnimation>

              <div className="teck-stack-container grid-container col-7 col-gap-30 small-col-4 small-col-gap-20">
                <InViewAnimation
                  delay="delay-500ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/HTML5_logo_and_wordmark_hpthcm"
                    alt="HTML"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-550ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/CSS3_logo_and_wordmark_mkbbgs"
                    alt="CSS"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-600ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Unofficial_JavaScript_logo_2_fetebo"
                    alt="Javascript"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-650ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/React-icon_sppngx"
                    alt="React"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-700ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Gatsby-Monogram_otocnt"
                    alt="Gatsby"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-750ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/sass-1_bkguwu"
                    alt="Sass"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-800ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Git-logo-01_vzwkrs"
                    alt="Git Worflow"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-850ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/photoshop-cc_tudva9"
                    alt="Adobe PS"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-900ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Adobe_Illustrator_CC_icon_rp6dnl"
                    alt="Adobe IL"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-950ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Adobe_After_Effects_CC_icon_ej67ez"
                    alt="Adobe AE"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-1000ms"
                  className="init-invisible"
                >

                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Adobe_Premiere_Pro_Logo_ceowzq"
                    alt="Adobe PP"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-1050ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/adobe-xd-logo-svg-vector-01_zw1khl"
                    alt="Adobe XD"
                  /></InViewAnimation>
                <InViewAnimation
                  delay="delay-1100ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Figma-logo_hpsrgq"
                    alt="Figma"
                  />
                </InViewAnimation>
                <InViewAnimation
                  delay="delay-1150ms"
                  className="init-invisible"
                >
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/wordpress"
                    alt="Wordpress"
                  />
                </InViewAnimation>
              </div>

            </Parallax>
          </div>
        </div>
      </section>
    </>
  )
}

export default TechStack

