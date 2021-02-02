import React from "react"
// Intersection Observer 
import { InView, useInView } from "react-intersection-observer"

const Defaults = {
  animation: "fade-in-up",
  duration: "time-1000ms",
  animationDelay: "delay-0ms",
  fillmode: "forwards",
  easing: "ease-in-out-quad",
  iteration: "loop-1",
}

const InViewAnimation = ({
  className,
  // 6 Animation Attributes
  animation,
  duration,
  animationDelay,
  fillmode,
  easing,
  iteration,
  // percent visible before event triggers
  threshold,
  // Contents within
  children,

}) => {
  // const [ref, inView, entry] = useInView({ trackVisibility: true, delay: 100 });
  return (
    // react-intersection-observer component 
    <InView
      // Animation Props
      className={className}
      animation={animation}
      duration={duration}
      animationDelay={animationDelay}
      fillmode={fillmode}
      easing={easing}
      iteration={iteration}
      // inView Props
      // What % in view before onChange event 0 - 1
      threshold={threshold}
      onChange={(inView, entry) => {
        // When in view
        if (entry.isIntersecting === true) {
          // if custom animation values are passed 
          if (entry.target.attributes["animation"] !== undefined) {
            // add them to the class 
            entry.target.classList.add(entry.target.attributes["animation"].value)
          } else {
            // use default values
            entry.target.classList.add(Defaults["animation"])
          }
          if (entry.target.attributes["duration"] !== undefined) {
            entry.target.classList.add(entry.target.attributes["duration"].value)
          } else {
            entry.target.classList.add(Defaults["duration"])
          }
          if (entry.target.attributes["delay"] !== undefined) {
            entry.target.classList.add(entry.target.attributes["delay"].value)
          } else {
            entry.target.classList.add(Defaults["delay"])
          }
          if (entry.target.attributes["fillmode"] !== undefined) {
            entry.target.classList.add(entry.target.attributes["fillmode"].value)
          } else {
            entry.target.classList.add(Defaults["fillmode"])
          }
          if (entry.target.attributes["easing"] !== undefined) {
            entry.target.classList.add(entry.target.attributes["easing"].value)
          } else {
            entry.target.classList.add(Defaults["easing"])
          }
          if (entry.target.attributes["iteration"] !== undefined) {
            entry.target.classList.add(entry.target.attributes["iteration"].value)
          } else {
            entry.target.classList.add(Defaults["iteration"])
          }
          if (entry.target.attributes["iteration"] !== undefined) {
            entry.target.classList.add(entry.target.attributes["iteration"].value)
          } else {
            entry.target.classList.add(Defaults["iteration"])
          }
        }
      }
      }
    // end onChange div
    >
      {children}
    </InView>
  )
}

export default InViewAnimation
