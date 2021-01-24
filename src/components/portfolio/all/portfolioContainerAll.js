import React from "react"
import Branding from "./creative-disciplines-all/Branding"
// import UIDesignAndDevelopment from "./creative-disciplines-all/UIDesignAndDevelopment"
import VideoProduction from "./creative-disciplines-all/Video-Production"
import PrintDesign from "./creative-disciplines-all/PrintDesign"
import Illustration from "./creative-disciplines-all/Illustration"
import MuralArt from "./creative-disciplines-all/MuralArt"
import AllWork from "./creative-disciplines-all/AllWork"
import UIDesign from "././creative-disciplines-all/UIDesign"
import UXDesign from "././creative-disciplines-all/UXDesign"
import WebDevelopment from "././creative-disciplines-all/WebDevelopment"


const portfolioContainer = ({ clickedValue }) => {
  if (clickedValue === "all-work") {
    return (
      <AllWork clickedValue={clickedValue} />
    )
  }
  if (clickedValue === "branding") {
    return (
      <Branding clickedValue={clickedValue} />
    )
  }
  if (clickedValue === "ui-design") {
    return (
      <UIDesign clickedValue={clickedValue} />
    )
  }
  if (clickedValue === "ux-design") {
    return (
      <UXDesign clickedValue={clickedValue} />
    )
  }
  if (clickedValue === "web-development") {
    return (
      <WebDevelopment clickedValue={clickedValue} />
    )
  }
  if (clickedValue === "print-design") {
    return (
      <PrintDesign clickedValue={clickedValue} />
    )
  }
  if (clickedValue === "video-production") {
    return (
      <VideoProduction clickedValue={clickedValue} />
    )
  }
  if (clickedValue === "illustration") {
    return (
      <Illustration clickedValue={clickedValue} />
    )
  }
  if (clickedValue === "mural-art") {
    return (
      <MuralArt clickedValue={clickedValue} />
    )
  }
}

export default portfolioContainer
