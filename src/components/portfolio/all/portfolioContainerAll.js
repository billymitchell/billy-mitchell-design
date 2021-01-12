import React from "react"
import Branding from "./creative-disciplines-all/Branding"
import UIDesignAndDevelopment from "./creative-disciplines-all/UIDesignAndDevelopment"
import VideoProduction from "./creative-disciplines-all/Video-Production"
import PrintDesign from "./creative-disciplines-all/PrintDesign"
import Illustration from "./creative-disciplines-all/Illustration"
import MuralArt from "./creative-disciplines-all/MuralArt"
import AllWork from "./creative-disciplines-all/AllWork"


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
  if (clickedValue === "ui-design-and-development") {
    return (
      <UIDesignAndDevelopment clickedValue={clickedValue} />
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
