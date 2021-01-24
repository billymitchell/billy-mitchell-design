import React from "react"
import Branding from "./creative-disciplines-featured/Branding"
// import UIDesignAndDevelopment from "./creative-disciplines-featured/UIDesignAndDevelopment"
import MotionDesign from "./creative-disciplines-featured/MotionDesign"
import PrintDesign from "./creative-disciplines-featured/PrintDesign"
import Illustration from "./creative-disciplines-featured/Illustration"
import MuralArt from "./creative-disciplines-featured/MuralArt"
import AllFeatured from "./creative-disciplines-featured/AllFeatured"
import UIDesign from "././creative-disciplines-featured/UIDesign"
import UXDesign from "././creative-disciplines-featured/UXDesign"
import WebDevelopment from "././creative-disciplines-featured/WebDevelopment"


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
  if (clickedValue === "motion-design") {
    return (
      <MotionDesign clickedValue={clickedValue} />
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
