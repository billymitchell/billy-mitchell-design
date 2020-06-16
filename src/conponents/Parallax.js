import React from "react"
import { Parallax } from "react-scroll-parallax"

const ParallaxImage = ({ children }) => (
  <Parallax y={[-20, 20]} tagOuter="figure">
    {children}
  </Parallax>
)

export default ParallaxImage
