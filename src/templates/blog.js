import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import MetaData from "../components/layout/header/mettadata"


export const query = graphql`
query ($contentful_id: String!) {
  allContentfulBlog (filter: {contentful_id: {eq: $contentful_id}}){
    nodes {
      title
      
      slug
      contentful_id
      body {
        raw
      }
      featuredImage {
        description
        title
        file {
          url
        }
      }
    }
  }
}
`

const renderHeader = function ({ data }) {
  if (data.featuredImage.file.url) {
    return (
      <>
        <img
          className="fetched-header"
          src={data.featuredImage.file.url}
          alt={data.featuredImage.title}
        ></img>
        <h2>{data.title}</h2>
      </>
    )
  } else {
    <div>

    </div>
  }
}


const renderBody = function (data) {
  if (data.allAirtable.nodes[0].data.Body_Text) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: data.allAirtable.nodes[0].data.Body_Text,
        }}
      ></div>
    )
  }
}

const Blog = ({ data }) => (
  <div id="blog" className="bg-black">
    <MetaData
      title={data.title}
      description={data.title}
      url={`/blog/${data.slug}`}
      // socialimg={data.featuredImage.file.url}
    />
    <Layout>
      <div className="portfolio-header-container">
        <div className="image-container">
          {renderHeader(data)}
        </div>
      </div>
      <div className="outer-container-body">
        <div className="inner-text-width imported-text">
          {renderBody(data)}
        </div>
      </div>
    </Layout>
  </div>
)

export default Blog
