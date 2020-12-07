import React from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import Parallax from "../utilities/Parallax"

const FullStack = () => {
  return (
    <section id="full-stack" className="v-h-center-100vh bg-black mobile-height-fluid">
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
              <h3>What the **** is a "full-stack designer"?</h3>
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
                A full-stack designer is an emerging term for someone who has a
                broad skill set to do Product Design, User-inferface Design, Front-end Development and more. Some people
                refer to them as a{" "}
                <span role="img" aria-label="unicorn">
                  🦄
                </span>
                considering the rarity.
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
              <img srcset="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/home/home-graph-mobile-01_v121wc"
              className="fluid mobile max-width-300 center"
              alt="full-stack design"
              >
              </img>
              <img src="https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/home/home-graph-desktop-01_rdrqma"
              className="fluid desktop"
              alt="full-stack design">
              </img>
            </InViewAnimation>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default FullStack
