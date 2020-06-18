import React from "react"
import morty from "../../../static/Morty-cut.png"
import InViewAnimation from "../utilities/InViewAnimation"
import Parallax from "../utilities/Parallax"

const FullStack = () => {
  return (
    <section id="full-stack" className="v-h-center-100vh">
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
              <h3>What is heck is "full-stack design"?</h3>
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
                broad skill set to do everything from pre-project planning, to
                user-inferface design and front-end development. Some people
                refer to them as unicorns{" "}
                <span role="img" aria-label="unicorn">
                  🦄
                </span>
                considering their rarity.
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
              <img src={morty} alt="morty" className="fluid"></img>

              <figcaption>
                Image From:{" "}
                <a href="https://uxdesign.cc/why-i-believe-in-full-stack-designers-a4a154f6bac2">
                  Why I believe in full stack designers by Damian Horn
                </a>
              </figcaption>
            </InViewAnimation>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default FullStack