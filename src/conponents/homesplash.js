import React from "react"
import styled, { keyframes } from "styled-components"
import gifBG from "../../static/ezgif-1-4acdfd5cf4.gif"
import videoBG from "../../static/Billy-Mitchell-Design-Home-Video.mp4"
import downArrow from "../../static/Scrolldown-white.gif"
import InViewAnimation from "../conponents/InViewAnimation"

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
    width: 100%;
    overflow: hidden;
    position: relative;
    display: block;
    background-image: url(${gifBG});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .homepage-video-file {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    animation: ${fadein} 2.5s;
    background-color: #ffffff00;
  }
  .overlay-content {
    top: 50%;
    left: 50%;
    width: 100vw;
    position: absolute;
    transform: translate(-50%, -35%);
    color: #fff;
  }
  .scroll-down-overlay {
    position: absolute;
    background: linear-gradient(
      0deg,
      rgba(15, 15, 15, 1) 0%,
      rgba(15, 15, 15, 0) 75%
    );
    width: 100%;
    bottom: 0;
    height: 75px;
    display: flex;
    justify-content: center;
  }
  .scroll-down-overlay img {
    position: absolute;
    width: 30px;
  }
  lottie-player {
    position: absolute;
    width: 1920px;
    height: 1080px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -56.5%) scale(0.75);
  }
`

const Homesplash = () => {
  return (
    <HomesplashStyle>
      <div className="video-wrapper-home">
        <video
          className="homepage-video-file"
          crossOrigin="anonymous"
          autoPlay
          muted
          loop
          id="homepage-video-file"
        >
          <source src={videoBG} type="video/mp4"></source>
        </video>
        <lottie-player
          src="https://assets4.lottiefiles.com/private_files/lf30_xRpJ98.json"
          background="transparent"
          speed="1"
          autoplay
        ></lottie-player>
        <div className="overlay-content">
          <div className="main-container-width">
            {/* <InViewWrapper
              animation="fade-in-up"
              duration="time-1000ms"
              delay="delay-0ms"
              fillmode="forwards"
              easing="ease-in-out-quad"
              iteration="loop-1"
            >
              <h1 className="text-center">Billy Mitchell</h1>
            </InViewWrapper>
            <InViewWrapper
              animation="fade-in-up"
              duration="time-1000ms"
              delay="delay-500ms"
              fillmode="forwards"
              easing="ease-in-out-quad"
              iteration="loop-1"
            >
              <h2 className="text-center">full-stack design</h2>
            </InViewWrapper> */}
            <InViewAnimation
              animation="fade-in-up"
              duration="time-1000ms"
              delay="delay-0ms"
              fillmode="forwards"
              easing="ease-in-out-quad"
              iteration="loop-1"
            >
              <h1 className="text-center">Billy Mitchell</h1>
            </InViewAnimation>
            <InViewAnimation
              animation="fade-in-up"
              duration="time-1000ms"
              delay="delay-250ms"
              fillmode="forwards"
              easing="ease-in-out-quad"
              iteration="loop-1"
            >
              <h2 className="text-center">Full-Stack Design</h2>
            </InViewAnimation>
          </div>
        </div>
        <div className="scroll-down-overlay">
          <img alt="down arrow" className="scroll-down" src={downArrow}></img>
        </div>
      </div>
    </HomesplashStyle>
  )
}
export default Homesplash
