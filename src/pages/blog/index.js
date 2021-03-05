import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from 'gatsby'
import { Link } from 'gatsby'


export const query = graphql`
{
  allContentfulBlog {
    nodes {
      title
      slug
      featuredImage {
        file {
          url
        }
        title
      }
    }
  }
}
`

const renderBlog = (data) => {
  data.allContentfulBlog.nodes.forEach(blog => {
    console.log(blog)
    return (
      <div className="blog-item">
        <Link to={`blog/${blog.slug}`}>
          <div className="title">
            {blog.title}
          </div>
        </Link>
        <div className="image-container">
          {renderImage(blog)}
        </div>
      </div>
    )
  })
}

const renderImage = (blog) => {
  // if no image
  if (blog.featuredImage === null) {
    return (
      <div className="default-img">
      </div>
    )
  } else {
    return (
      <img src={blog.featuredImage.file.url} alt={blog.featuredImage.title} />
    )
  }
}

const Blog = ({ data }) => {
  return (
    <div id="blog" >
      <Layout>
        <div className="outer-container">
          <div className="inner-width-1000">
            <h1>Blog</h1>
            {renderBlog(data)}
          </div>
        </div>
      </Layout>
    </div >
  )
}

export default Blog;