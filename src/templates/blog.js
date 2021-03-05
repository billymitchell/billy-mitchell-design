import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"


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



const Blog = ({ data }) => (
  <div id="blog" className="bg-black">
    <Layout>
      <div className="outer-container-body">
        <div className="inner-text-width">
          {data.title}
        </div>
      </div>
    </Layout>
  </div>
)

export default Blog
