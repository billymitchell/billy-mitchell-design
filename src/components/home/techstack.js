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
  }, [])
  return (
    <>
      <Separator className="bg-white" />
      <section id="tech-stack" className="v-h-center-100vh bg-white small-padding-top-100 small-padding-bottom-100">
        <div className="outer-container">
          <div className="inner-width-1000">
            <Parallax disabled={parallaxDisabledState}>
              <InViewAnimation
                animation="fade-in-up"
                duration="time-1000ms"
                delay="delay-0ms"
                fillmode="forwards"
                easing="ease-in-out-quad"
                iteration="loop-1"
                className="init-invisible"
              >
                <h3>Tech Stack</h3>
                <p>
                  Here are some of the technologies and applications I use to
                  bring ideas to life.
              </p>
              </InViewAnimation>
              <InViewAnimation
                animation="fade-in-up"
                duration="time-1000ms"
                delay="delay-500ms"
                fillmode="forwards"
                easing="ease-in-out-quad"
                iteration="loop-1"
                className="init-invisible"
              >
                <div className="teck-stack-container grid-container col-7 col-gap-30 small-col-4 small-col-gap-20">
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/HTML5_logo_and_wordmark_hpthcm"
                    alt="HTML"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/CSS3_logo_and_wordmark_mkbbgs"
                    alt="CSS"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Unofficial_JavaScript_logo_2_fetebo"
                    alt="Javascript"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/React-icon_sppngx"
                    alt="React"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Gatsby-Monogram_otocnt"
                    alt="Gatsby"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/sass-1_bkguwu"
                    alt="Sass"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Git-logo-01_vzwkrs"
                    alt="Git Worflow"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/photoshop-cc_tudva9"
                    alt="Adobe PS"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Adobe_Illustrator_CC_icon_rp6dnl"
                    alt="Adobe IL"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Adobe_After_Effects_CC_icon_ej67ez"
                    alt="Adobe AE"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Adobe_Premiere_Pro_Logo_ceowzq"
                    alt="Adobe PP"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/adobe-xd-logo-svg-vector-01_zw1khl"
                    alt="Adobe XD"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/Figma-logo_hpsrgq"
                    alt="Figma"
                  />
                  <img
                    className="fluid"
                    src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/tech-stack/wordpress"
                    alt="Wordpress"
                  />
                </div>
              </InViewAnimation>
            </Parallax>
          </div>
        </div>
      </section>
    </>
  )
}

export default TechStack

