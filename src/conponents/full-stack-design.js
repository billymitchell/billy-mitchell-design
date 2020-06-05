import React from "react"
import morty from "../../static/Morty.png"
import InViewAnimation from "../conponents/InViewAnimation"

const FullStack = () => {
  return (
    <section id="full-stack" className="v-h-center-100vh">
      <div className="text-container-width">
        <InViewAnimation
          animation="fade-in-up"
          duration="time-1000ms"
          delay="delay-0ms"
          fillmode="forwards"
          easing="ease-in-out-quad"
          iteration="loop-1"
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
        >
          <p>
            A full-stack designer is an emerging term for someone who has a
            broad skill set to do everything from pre-project planning, to
            user-inferface design and front-end development. Some people refer
            to them as unicorns{" "}
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
        >
          <img src={morty} alt="morty" className="fluid"></img>
          <caption>
            Image From:{" "}
            <a href="https://uxdesign.cc/why-i-believe-in-full-stack-designers-a4a154f6bac2">
              Why I believe in full stack designers by Damian Horn
            </a>
          </caption>
        </InViewAnimation>
      </div>
    </section>
  )
}

export default FullStack
