import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../../../styles/global.scss"
import { Helmet } from "react-helmet"
import favicon from "../../../../static/favicon.ico"

export default function HeaderScripts() {
  return (
    <StaticQuery
      query={graphql`
        query data {
          site {
            siteMetadata {
              title
              authour
            }
          }
        }
      `}
      render={data => (
        <Helmet>
          {/* Lottie Animation Loader */}
          <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
          {/* Smooth Scrolling */}
          <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"></script>
          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          ></link> */}

          {/* Icons */}
          <script
            src="https://kit.fontawesome.com/da815149ed.js"
            SameSite="None"
            Secure
            crossorigin="anonymous"
          ></script>
          {/* Site Metadata */}
          <link rel="icon" href={favicon} />
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
      )}
    />
  )
}
