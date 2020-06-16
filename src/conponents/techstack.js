import React from "react"
import InViewAnimation from "./InViewAnimation"
import Parallax from "./Parallax"

import AdobeAE from "../../static/tech-stack/Adobe_After_Effects_CC_icon.svg"
import AdobePS from "../../static/tech-stack/photoshop-cc.svg"
import AdobeIL from "../../static/tech-stack/Adobe_Illustrator_CC_icon.svg"
import AdobeID from "../../static/tech-stack/Adobe_InDesign_CC_icon.svg"
import AdobePP from "../../static/tech-stack/Adobe_Premiere_Pro_Logo.svg"
import XD from "../../static/tech-stack/adobe-xd-logo-svg-vector-01.svg"
import Figma from "../../static/tech-stack/Figma-logo.svg"
import ReactLogo from "../../static/tech-stack/React-icon.svg"
import HTML from "../../static/tech-stack/HTML5_logo_and_wordmark.svg"
import GatsbyLogo from "../../static/tech-stack/Gatsby-Monogram.svg"
import CSS from "../../static/tech-stack/CSS3_logo_and_wordmark.svg"
import Javascript from "../../static/tech-stack/Unofficial_JavaScript_logo_2.svg"
import Sass from "../../static/tech-stack/sass-1.svg"
import node from "../../static/tech-stack/nodejs-new-pantone-black.svg"
import git from "../../static/tech-stack/Git-logo-01.svg"

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
            >
              <h3>Tech Stack</h3>
              <p>
                I use these technologies and applications to bring ideas to
                life.
              </p>
            </InViewAnimation>

            <div className="teck-stack-container grid-container col-5 col-gap-30 small-col-4 small-col-gap-">
              <img className="fluid" src={HTML} alt="HTML" />
              <img className="fluid" src={CSS} alt="CSS" />
              <img className="fluid" src={Javascript} alt="Javascript" />
              <img className="fluid" src={ReactLogo} alt="React" />
              <img className="fluid" src={GatsbyLogo} alt="Gatsby" />
              <img className="fluid" src={Sass} alt="Sass" />
              <img className="fluid" src={node} alt="Node JS" />
              <img className="fluid" src={git} alt="Git Worflow" />
              <img className="fluid" src={AdobePS} alt="Adobe PS" />
              <img className="fluid" src={AdobeIL} alt="Adobe IL" />
              <img className="fluid" src={AdobeID} alt="Adobe ID" />
              <img className="fluid" src={AdobeAE} alt="Adobe AE" />
              <img className="fluid" src={AdobePP} alt="Adobe PP" />
              <img className="fluid" src={XD} alt="Adobe XD" />
              <img className="fluid" src={Figma} alt="Figma" />
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default TeckStack
