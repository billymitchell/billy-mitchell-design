import React from "react"
import Featured from "../../components/portfolio/Featured"
import Branding from "../../components/portfolio/Branding"
import UIDesignAndDevelopment from "../../components/portfolio/UIDesignAndDevelopment"
import Illustration from "../../components/portfolio/Illustration"
import PrintDesign from "../../components/portfolio/PrintDesign"
import VideoProduction from "../../components/portfolio/Video-Production"
import MuralArt from "../../components/portfolio/MuralArt"

const portfolioContainer = ({ clickedValue }) => {
  if (clickedValue === "branding") {
    return ( <>
    <Branding clickedValue={clickedValue}/>
    </>)
  }
  if (clickedValue === "featured") {
    return (<>
      <Featured clickedValue={clickedValue}/>
      </>)
  }
  if (clickedValue === "ui-design-and-development") {
    return ( <>
    <UIDesignAndDevelopment clickedValue={clickedValue}/>
    </>)
  }
  if (clickedValue === "illustration") {
    return ( <>
    <Illustration clickedValue={clickedValue}/>
    </>)
  }
  if (clickedValue === "print-design") {
    return ( <>
    <PrintDesign clickedValue={clickedValue}/>
    </>)
  }
  if (clickedValue === "video-production") {
    return ( <>
    <VideoProduction clickedValue={clickedValue}/>
    </>)
  }
  if (clickedValue === "mural-art") {
    return ( <>
    <MuralArt clickedValue={clickedValue}/>
    </>)
  }
}
export default portfolioContainer
