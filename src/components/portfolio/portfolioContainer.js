import React from "react"
import PortfolioDisplayAll from "../../components/portfolio/PortfolioDisplayAll"
import FeaturedWork from "../../components/portfolio/Featured-Work"
import Branding from "../../components/portfolio/Branding"
import UIDesignAndDevelopment from "../../components/portfolio/UIDesignAndDevelopment"
import Illustration from "../../components/portfolio/Illustration"
import PrintDesign from "../../components/portfolio/PrintDesign"
import VideoProduction from "../../components/portfolio/Video-Production"
import MuralArt from "../../components/portfolio/MuralArt"

const portfolioContainer = ({ clickedValue }) => {
  if (clickedValue === "featured-work") {
    return (
      <>
      {/* <PortfolioDisplayAll clickedValue={clickedValue}/> */}
    <FeaturedWork clickedValue={clickedValue}/>
      </>
    
    )
  }
  if (clickedValue === "branding") {
    return ( <>
    {/* <PortfolioDisplayAll clickedValue={clickedValue}/> */}
    <Branding clickedValue={clickedValue}/>
    </>)
  }
  if (clickedValue === "ui-design-and-development") {
    return ( <>
    {/* <PortfolioDisplayAll clickedValue={clickedValue}/> */}
    <UIDesignAndDevelopment clickedValue={clickedValue}/>
    </>)
  }
  if (clickedValue === "illustration") {
    return ( <>
    {/* <PortfolioDisplayAll clickedValue={clickedValue}/> */}
    <Illustration clickedValue={clickedValue}/>
    </>)
  }
  if (clickedValue === "print-design") {
    return ( <>
    {/* <PortfolioDisplayAll clickedValue={clickedValue}/> */}
    <PrintDesign clickedValue={clickedValue}/>
    </>)
  }
  if (clickedValue === "video-production") {
    return ( <>
    {/* <PortfolioDisplayAll clickedValue={clickedValue}/> */}
    <VideoProduction clickedValue={clickedValue}/>
    </>)
  }
  if (clickedValue === "mural-art") {
    return ( <>
    {/* <PortfolioDisplayAll clickedValue={clickedValue}/> */}
    <MuralArt clickedValue={clickedValue}/>
    </>)
  }
}
export default portfolioContainer
