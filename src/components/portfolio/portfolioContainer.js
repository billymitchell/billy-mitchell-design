import React from "react"
import All from "../../components/portfolio/All"
import Branding from "../../components/portfolio/Branding"
import Development from "../../components/portfolio/Development"
import Illustration from "../../components/portfolio/Illustration"
import Publication from "../../components/portfolio/Publication"
import UiDesign from "../../components/portfolio/UiDesign"
import VideoProduction from "../../components/portfolio/Video-Production"

const portfolioContainer = ({ clickedValue }) => {
  if (clickedValue === "all") {
    return <All />
  }
  if (clickedValue === "branding") {
    return <Branding />
  }
  if (clickedValue === "development") {
    return <Development />
  }
  if (clickedValue === "illustration") {
    return <Illustration />
  }
  if (clickedValue === "publication") {
    return <Publication />
  }
  if (clickedValue === "ui-design") {
    return <UiDesign />
  }
  if (clickedValue === "Video-Production") {
    return <VideoProduction />
  }
}
export default portfolioContainer
