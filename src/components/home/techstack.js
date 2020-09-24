import React from "react"
import InViewAnimation from "../../components/utilities/InViewAnimation"
import Parallax from "../../components/utilities/Parallax"

const TeckStack = () => {
  return (
    <section id="tech-stack" className="v-h-center-100vh bg-white">
      <Parallax>
        <div className="outer-container">
          <div className="inner-text-width">
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
                I use these technologies and applications to bring ideas to
                life.
              </p>
            </InViewAnimation>

            <div className="teck-stack-container grid-container col-5 col-gap-30 small-col-4 small-col-gap-">
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977118/tech-stack/HTML5_logo_and_wordmark_hpthcm.svg"
                alt="HTML"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977113/tech-stack/CSS3_logo_and_wordmark_mkbbgs.svg"
                alt="CSS"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977113/tech-stack/Unofficial_JavaScript_logo_2_fetebo.svg"
                alt="Javascript"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977116/tech-stack/React-icon_sppngx.svg"
                alt="React"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977116/tech-stack/Gatsby-Monogram_otocnt.svg"
                alt="Gatsby"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977113/tech-stack/sass-1_bkguwu.svg"
                alt="Sass"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977113/tech-stack/nodejs-new-pantone-black_hbhgnd.svg"
                alt="Node JS"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977117/tech-stack/Git-logo-01_vzwkrs.svg"
                alt="Git Worflow"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977114/tech-stack/photoshop-cc_tudva9.svg"
                alt="Adobe PS"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977113/tech-stack/Adobe_Illustrator_CC_icon_rp6dnl.svg"
                alt="Adobe IL"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977118/tech-stack/adobe-xd-logo-svg-vector-01_zw1khl.svg"
                alt="Adobe ID"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977117/tech-stack/Adobe_After_Effects_CC_icon_ej67ez.svg"
                alt="Adobe AE"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977119/tech-stack/Adobe_Premiere_Pro_Logo_ceowzq.svg"
                alt="Adobe PP"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977118/tech-stack/adobe-xd-logo-svg-vector-01_zw1khl.svg"
                alt="Adobe XD"
              />
              <img
                className="fluid"
                src="https://res.cloudinary.com/billymitchell/image/upload/v1600977118/tech-stack/Figma-logo_hpsrgq.svg"
                alt="Figma"
              />
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default TeckStack
