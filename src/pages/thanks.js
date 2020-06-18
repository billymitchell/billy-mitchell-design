import React from "react"
import "../styles/global.scss"
import ThanksVideo from "../../static/thanks.mp4"
import InViewAnimation from "../components/utilities/InViewAnimation"

export default function Thanks() {
  return (
    <div className="main-container-width v-h-center-100vh">
      <InViewAnimation
        animate="fade-in-up"
        delay="delay-500ms"
        easing="ease-in-out"
      >
        <video
          className="inline-video"
          autoPlay
          muted
          loop
          width="100%"
          height="auto"
        >
          <source src={ThanksVideo} type="video/mp4"></source>
        </video>
      </InViewAnimation>
    </div>
  )
}
