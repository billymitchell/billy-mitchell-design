import React from "react"
import Layout from "../../components/layout/layout"
import { ParallaxProvider } from "react-scroll-parallax"
import MetaData from "../../components/layout/header/mettadata"

export default function Portfolio({ title, description, url, socialimg }) {
  return (
    <>
      <MetaData
        title="This is a Test Project"
        description="This is a test description"
        url="URL"
        socialimg="social image"
      />
      <div id="portfolio">
        <ParallaxProvider>
          <Layout>
            <h1>Test Project</h1>
          </Layout>
        </ParallaxProvider>
      </div>
    </>
  )
}
