import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../../../../static/favicon.ico"

const MetaData = ({ title, description, socialimg }) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <link rel="icon" href={favicon} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={url} /> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialimg} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content={url} /> */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={socialimg} />
    </Helmet>
  )
}

export default MetaData
