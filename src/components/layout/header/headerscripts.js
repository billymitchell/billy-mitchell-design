import React from "react"
import { Helmet } from "react-helmet"
import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true, 
  debug: false,
};
ReactPixel.init('650102202342493', options);

export default function HeaderScripts() {
  return (
    <Helmet>
      {ReactPixel.pageView()}
      {/* Lottie Animation Loader */}
      <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
      {/* Smooth Scrolling */}
      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"></script>
      {/* Icons */}
      <script
        src="https://kit.fontawesome.com/da815149ed.js"
        SameSite="None"
        Secure
        crossorigin="anonymous"
      ></script>
      {/* <link rel="stylesheet" href="../../../styles/prism/prism.css"></link> */}
      
    </Helmet>
  )
}