import React from "react"
import Layout from "../../components/layout/layout"
import { ParallaxProvider } from "react-scroll-parallax"

export default function Portfolio() {
  return (
    <div id="portfolio">
      <ParallaxProvider>
        <Layout>
          <h1>Portfolio</h1>
        </Layout>
      </ParallaxProvider>
    </div>
  )
}
