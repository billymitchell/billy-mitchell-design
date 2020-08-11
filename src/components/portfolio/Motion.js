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
      {
        allAirtable(
          filter: {
            table: { eq: "Project" }
            data: { Categories: { eq: "Motion" } }
          }
        ) {
          nodes {
            recordId
            data {
              Project_Title
              Featured_Image {
                url
              }
              Portfolio_Page_URL
              Featured
              Categories
              Project_End_Date(formatString: "MM-YYYY")
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
              <Link to={node.data.Portfolio_Page_URL}>
                <img
                  className="fluid"
                  id={node.recordId}
                  src={node.data.Featured_Image[0].url}
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
