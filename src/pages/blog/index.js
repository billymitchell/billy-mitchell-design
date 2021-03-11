import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from 'gatsby'
import { Link } from 'gatsby'


export const query = graphql`
{
  allContentfulBlog(sort: {order: DESC, fields: createdAt}) {
    nodes {
      title
      slug
      featuredImage {
        file {
          url
        }
        title
      }
      createdAt(formatString: "MM/DD/YYYY")
    }
  }
}
`

const renderBlog = (data) => {
  return (
    data.allContentfulBlog.nodes.map(blog => (
      <div className="blog-item" >
        <Link to={`${blog.slug}`}>
          <div className="blog-container">
            <div className="blog-image-container">
              {renderImage(blog)}
            </div>
            <div className="info">
              <h4 className="title" style={titleStyle(blog)}>
                {blog.title}
              </h4>
              <div className="date">{blog.createdAt}</div>
            </div>
          </div>
        </Link>
      </div>
    ))
  )
}

const titleStyle = (blog) => {
  // if no image
  if (blog.featuredImage === null) {
    return (
      { marginTop: "0px", }
    )
  } else {
    return (
      null
    )
  }
}


const renderImage = (blog) => {
  // if no image
  if (blog.featuredImage === null) {
    return (
      <>
        <div className="default-img">
        </div>
      </>
    )
  } else {
    return (
      <img className="fluid" src={blog.featuredImage.file.url} alt={blog.featuredImage.title} />
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