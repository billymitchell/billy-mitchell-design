import React from "react"
import Branding from "./creative-disciplines-featured/Branding"
import UIDesignAndDevelopment from "./creative-disciplines-featured/UIDesignAndDevelopment"
import VideoProduction from "./creative-disciplines-featured/Video-Production"
import PrintDesign from "./creative-disciplines-featured/PrintDesign"
import Illustration from "./creative-disciplines-featured/Illustration"
import MuralArt from "./creative-disciplines-featured/MuralArt"
import AllFeatured from "./creative-disciplines-featured/AllFeatured"


const portfolioContainer = ({ clickedValue }) => {
  if (clickedValue === "all-featured") {
    return (
      <AllFeatured clickedValue={clickedValue} />
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
