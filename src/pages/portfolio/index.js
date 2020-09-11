import React, { useState } from "react"
import Layout from "../../components/layout/layout"
import { ParallaxProvider } from "react-scroll-parallax"
import PortfolioContainer from "../../components/portfolio/portfolioContainer"

export default function Portfolio() {
  //Set default portfolio query to all
  const [clickedValue, setClickedValue] = useState("all")

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
              <p>
                Please be aware, this portfolio is still in development so not
                all links will work.
              </p>
              <div className="button-container">
                <button value="all" onClick={onButtonClick}>
                  All
                </button>
                <button value="branding" onClick={onButtonClick}>
                  Branding
                </button>
                <button value="development" onClick={onButtonClick}>
                  Development
                </button>
                <button value="illustration" onClick={onButtonClick}>
                  Illustration
                </button>
                <button value="publication" onClick={onButtonClick}>
                  Publication
                </button>
                <button value="ui-design" onClick={onButtonClick}>
                  UI Design
                </button>
                <button value="Video-Production" onClick={onButtonClick}>
                  Video Production
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
