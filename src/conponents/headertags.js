import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.scss"
import { Helmet } from "react-helmet"
import favicon from "../../static/favicon.ico"

export default function Headertags() {
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
          <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          ></link>
          <link rel="icon" href={favicon} />
          <title>{data.site.siteMetadata.title}</title>
          <script
            src="https://kit.fontawesome.com/da815149ed.js"
            SameSite="None"
            Secure
            crossorigin="anonymous"
          ></script>
        </Helmet>
      )}
    />
  )
}
