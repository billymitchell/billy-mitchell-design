import React from "react"
import styled from "styled-components"

const StyledVideo = styled.div`
  /*(Height / Width) * 100 (Video Aspect Ratio)*/
  padding-bottom: calc(
    (${props => props.ARheight} / ${props => props.ARwidth}) * 100%
  );
`
const Video = ({ ARwidth, ARheight, children }) => {
  return (
    <StyledVideo
      className="embed-container"
      ARwidth={ARwidth}
      ARheight={ARheight}
    >
      {children}
    </StyledVideo>
  )
}

export default Video
