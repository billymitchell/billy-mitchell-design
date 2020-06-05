import React from "react"
import { InView } from "react-intersection-observer"

const InViewAnimation = ({
  animation,
  duration,
  delay,
  fillmode,
  easing,
  iteration,
  className,
  children,
}) => {
  return (
    <InView
      onChange={(inView, entry) => {
        if (entry.isIntersecting === true) {
          if (entry.target.classList.length !== 6) {
            if (entry.target.attributes[0]) {
              entry.target.classList.add(entry.target.attributes[0].value)
            }
            if (entry.target.attributes[1]) {
              entry.target.classList.add(entry.target.attributes[1].value)
            }
            if (entry.target.attributes[2]) {
              entry.target.classList.add(entry.target.attributes[2].value)
            }
            if (entry.target.attributes[3]) {
              entry.target.classList.add(entry.target.attributes[3].value)
            }
            if (entry.target.attributes[4]) {
              entry.target.classList.add(entry.target.attributes[4].value)
            }
            if (entry.target.attributes[5]) {
              entry.target.classList.add(entry.target.attributes[5].value)
            }
          }
        }
      }}
    >
      {({ inView, ref, entry }) => (
        <div
          animation={animation}
          duration={duration}
          dealy={delay}
          fillmode={fillmode}
          easing={easing}
          iteration={iteration}
          className={className}
          ref={ref}
        >
          {children}
        </div>
      )}
    </InView>
  )
}

export default InViewAnimation
