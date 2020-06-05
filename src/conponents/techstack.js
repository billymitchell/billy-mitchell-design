import React from "react"
import InViewAnimation from "./InViewAnimation"

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
      <div className="text-container-width">
        <InViewAnimation
          animation="fade-in-up"
          duration="time-1000ms"
          delay="delay-0ms"
          fillmode="forwards"
          easing="ease-in-out-quad"
          iteration="loop-1"
        >
          <h3>Tech Stack</h3>
          <p>I use these to bring ideas to life.</p>
        </InViewAnimation>
        <div className="teck-stack-container grid-container col-5 col-gap-30 small-col-4">
          <img class="fluid" src={HTML} alt="HTML" />
          <img class="fluid" src={CSS} alt="CSS" />
          <img class="fluid" src={Javascript} alt="Javascript" />
          <img class="fluid" src={ReactLogo} alt="React" />
          <img class="fluid" src={GatsbyLogo} alt="Gatsby" />
          <img class="fluid" src={Sass} alt="Sass" />
          <img class="fluid" src={node} alt="Node JS" />
          <img class="fluid" src={git} alt="Git Worflow" />
          <img class="fluid" src={AdobePS} alt="Adobe PS" />
          <img class="fluid" src={AdobeIL} alt="Adobe IL" />
          <img class="fluid" src={AdobeID} alt="Adobe ID" />
          <img class="fluid" src={AdobeAE} alt="Adobe AE" />
          <img class="fluid" src={AdobePP} alt="Adobe PP" />
          <img class="fluid" src={XD} alt="Adobe XD" />
          <img class="fluid" src={Figma} alt="Figma" />
        </div>
      </div>
    </section>
  )
}

export default TeckStack
