import React from "react"
import styled, { keyframes } from "styled-components"
import homepagevideo from "../media/Billy-Mitchell-Design-Home-Video.mp4"

const fadein = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`

const HomesplashStyle = styled.div`
  .video-wrapper-home {
    height: 100vh;
    /* links to javascript file that fixes mobiel height issue */
    height: calc(var(--vh, 1vh) * 100);
    position: relative;
    display: block;
    overflow: hidden;
    background-image: url("https://billymitchell.design/wp-content/uploads/2018/06/ezgif-1-4acdfd5cf4.gif");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .video-container-home {
    position: absolute;
    width: 100%;
    height: 100vh;
    /* links to javascript file that fixes mobiel height issue */
    height: calc(var(--vh, 1vh) * 100);
    overflow: hidden;
  }
  .video-container-home #homepage-video-file {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    pointer-events: none;
    animation: ${fadein} 2.5s;
    background-color: #ffffff00;
  }

  @media (max-aspect-ratio: 16/9) {
    .video-container-home {
      width: 300%;
      left: -100%;
      transform: scale(1.2);
    }
  }
  @media (min-aspect-ratio: 16/9) {
    .video-container-home {
      height: 300%;
      top: -100%;
      transform: scale(1.2);
    }
  }
  @media only screen and (max-width: 900px) {
    .video-container-home {
      display: none;
    }
  }
  .overlay-content {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    color: #fff;
    pointer-events: none;
  }
  .scroll-down-overlay {
    position: absolute;
    opacity: 0.75;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 75%
    );
    width: 100%;
    bottom: 0;
    height: 30px;
    display: flex;
    justify-content: center;
  }
  .scroll-down-overlay img {
    position: absolute;
    width: 30px;
  }
`

const Homesplash = () => {
  return (
    <HomesplashStyle>
      <div className="video-wrapper-home">
        <div className="video-container-home">
          <video
            crossOrigin="anonymous"
            autoPlay
            muted
            loop
            id="homepage-video-file"
          >
            <source src={homepagevideo} type="video/mp4"></source>
          </video>
        </div>
        <div className="overlay-content"></div>
        <div className="scroll-down-overlay">
          <img
            alt="down arrow"
            className="scroll-down"
            src="https://billymitchell.design/wp-content/uploads/2018/11/Scrolldown-white.gif"
          ></img>
        </div>
      </div>
    </HomesplashStyle>
  )
}
export default Homesplash
