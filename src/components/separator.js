import React from "react"
import styled from "styled-components"
import Parallax from "../components/utilities/Parallax"

const StyledSeparator = styled.div`
  position: relative;
  #skewed {
    position: absolute;
    top: -6vh;
    height: 12vh;
    width: 100%;
    transform: skewY(-2deg);
    transform-origin: center center;
  }
  @media only screen and (max-width: 1500px) {
    #skewed {
      top: -4vh;
      height: 8vh;
    }
  }
`
const Separator = ({ className }) => {
  return (
    <StyledSeparator className="bg-transparent">
      <Parallax>
        <div id="skewed" className={className}></div>
      </Parallax>
    </StyledSeparator>
  )
}

export default Separator
