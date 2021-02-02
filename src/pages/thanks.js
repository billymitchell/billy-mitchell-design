import React from "react"
import "../styles/global.scss"
import InViewAnimationTwo from "../components/utilities/InViewAnimationTwo"

export default function Thanks() {
  return (
    <div className="main-container-width v-h-center-100vh">
      <InViewAnimationTwo
        animate="fade-in-up"
        delay="delay-500ms"
        easing="ease-in-out"
      >
        <video
          className="inline-video"
          width="100%"
          height="auto"
          crossOrigin="anonymous"
          autoPlay="true"
          muted="true"
          loop="true"
          playsinline="true"
        >
          <source
            src="https://res.cloudinary.com/billymitchell/video/upload/v1600977044/form-submit/thanks_tsj4ng.mp4"
            type="video/mp4"
          ></source>
        </video>
      </InViewAnimationTwo>
    </div>
  )
}
