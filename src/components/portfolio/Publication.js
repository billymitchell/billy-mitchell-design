import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Masonry from "react-masonry-css"

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allAirtable(
          filter: {
            table: { eq: "Project" }
            data: {
              Creative_Discipline: { eq: "Publication" }
              Published: { eq: true }
            }
          }
        ) {
          nodes {
            recordId
            data {
              Project_Title
              Featured_Image_URL

              End_Date(formatString: "MM-YYYY")
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <div className="portfolio-item-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.allAirtable.nodes.map(node => (
            <div
              key={node.recordId}
              id={node.recordId}
              className="portfolio-item"
            >
              <Link to={`/portfolio/project/${node.data.slug}`}>
                <img
                  className="fluid"
                  id={node.recordId}
                  src={`https://res.cloudinary.com/billymitchell/image/upload/c_scale,q_auto:best,w_600/${node.data.Featured_Image_URL}`}
                  alt={node.data.Project_Title}
                />
                <p className="title">
                  <strong>{node.data.Project_Title}</strong>
                </p>
              </Link>
            </div>
          ))}
        </Masonry>
      </div>
    )}
  />
)
