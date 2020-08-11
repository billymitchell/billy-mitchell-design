import React from "react"
import Layout from "../../components/layout/layout"
import { ParallaxProvider } from "react-scroll-parallax"
import PortfolioItems from "../../components/portfolio/portfolio-items"

export default function Portfolio() {
  return (
    <div id="portfolio" className="bg-black">
      <ParallaxProvider>
        <Layout>
          <div className="outer-container">
            <div className="inner-width">
              <h1>Portfolio</h1>
              <PortfolioItems />
            </div>
          </div>
        </Layout>
      </ParallaxProvider>
    </div>
  )
}
