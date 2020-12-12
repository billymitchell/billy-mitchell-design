import React from "react"
import AllWork from "../../../components/portfolio/AllWork"
import Layout from "../../../components/layout/layout"

export default function Portfolio() {
  return (
      <div id="portfolio" className="bg-black">
          <Layout>
            <div className="outer-container">
              <div className="inner-width">
                <h1>Portfolio</h1>
                <h3>All Works</h3>
                <AllWork/>
              </div>
            </div>
          </Layout>
      </div>
    )
  }
  