import React from "react"
import FeaturedWork from "../../components/portfolio/Featured-Work"
import Branding from "../../components/portfolio/Branding"
import UIDesignAndDevelopment from "../../components/portfolio/UIDesignAndDevelopment"
import Illustration from "../../components/portfolio/Illustration"
import PrintDesign from "../../components/portfolio/PrintDesign"
import VideoProduction from "../../components/portfolio/Video-Production"
import MuralArt from "../../components/portfolio/MuralArt"

const portfolioContainer = ({ clickedValue }) => {
  if (clickedValue === "featured-work") {
    return <FeaturedWork />
  }
  if (clickedValue === "branding") {
    return <Branding />
  }
  if (clickedValue === "ui-design-and-development") {
    return <UIDesignAndDevelopment />
  }
  if (clickedValue === "illustration") {
    return <Illustration />
  }
  if (clickedValue === "print-design") {
    return <PrintDesign />
  }
  if (clickedValue === "video-production") {
    return <VideoProduction />
  }
  if (clickedValue === "mural-art") {
    return <MuralArt />
  }
}
export default portfolioContainer
