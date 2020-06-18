import React from "react"
import Layout from "../../components/layout/layout"
import { ParallaxProvider } from "react-scroll-parallax"

export default function Blog() {
  return (
    <div id="blog">
      <ParallaxProvider>
        <Layout>
          <h1>Blog</h1>
        </Layout>
      </ParallaxProvider>
    </div>
  )
}
