import React, { useState } from "react"
import Layout from "../../components/layout/layout"
import { ParallaxProvider } from "react-scroll-parallax"
import PortfolioContainer from "../../components/portfolio/portfolioContainer"

export default function Portfolio() {
  //Set default portfolio query to featured-work
  const [clickedValue, setClickedValue] = useState("featured-work")

  //on btn click, set value = to button value
  const onButtonClick = event => {
    setClickedValue(event.target.value)
  }

  return (
    <div id="portfolio" className="bg-black">
      <ParallaxProvider>
        <Layout>
          <div className="outer-container">
            <div className="inner-width">
              <h1>Portfolio</h1>

              <div className="button-container">
                <button value="featured-work" onClick={onButtonClick}>
                  Featured Work
                </button>
                <button value="branding" onClick={onButtonClick}>
                  Branding
                </button>
                <button
                  value="ui-design-and-development"
                  onClick={onButtonClick}
                >
                  UI Design & Development
                </button>
                <button value="illustration" onClick={onButtonClick}>
                  Illustration
                </button>
                <button value="print-design" onClick={onButtonClick}>
                  Print Design
                </button>
                <button value="video-production" onClick={onButtonClick}>
                  Video Production
                </button>
                <button value="mural-art" onClick={onButtonClick}>
                  Mural Art
                </button>
              </div>
              {/* pass clicked value to portfolio */}
              <PortfolioContainer clickedValue={clickedValue} />
            </div>
          </div>
        </Layout>
      </ParallaxProvider>
    </div>
  )
}
