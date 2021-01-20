import React from "react"
import { Parallax } from "react-scroll-parallax"

const ParallaxImage = ({ children, disabled }) => (
  <Parallax
    disabled={disabled}
    y={[-30, 30]}
    tagOuter="figure"
  >
    {children}
  </Parallax>
)

export default ParallaxImage
