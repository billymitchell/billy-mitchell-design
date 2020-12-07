import React, { useState } from "react"
import Layout from "../../components/layout/layout"
import { ParallaxProvider } from "react-scroll-parallax"
import PortfolioContainer from "../../components/portfolio/portfolioContainer"

const categories = [
  "Featured Work",
  "Branding",
  "UI Design & Development",
  // "Illustration",
  "Print Design",
  "Video Production",
  // "Mural Art",
]

const slugify = (category) => {
  // Make all lower case
  // Swap `&` for `and`
  // Swap all spaces for -
  return (category.toLowerCase().replace('&', 'and').replace(/\s/gi, '-') )
}



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
              {categories.map(category => (
                <button value={slugify(category)} onClick={onButtonClick}>{category}</button>
              ))
              }
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
