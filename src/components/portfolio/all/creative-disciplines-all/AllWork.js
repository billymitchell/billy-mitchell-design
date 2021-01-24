import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Masonry from "react-masonry-css"
import InViewAnimation from "../../../../components/utilities/InViewAnimation"


const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
}

//Return an image if there is one, else just the title
const IfFeaturedImage = function (node) {
  if (node.data.Featured_Image_URL) {
    return (
      <>
        <img
          className="fluid"
          id={node.recordId}
          src={`https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,f_auto,q_auto:good/portfolio/${node.data.Featured_Image_URL}`}
          alt={node.data.Project_Title}
        />
        <p className="title">
          <strong>{node.data.Project_Title}</strong>
        </p>
      </>
    )
  } else {
    return (
      <p className="title-no-featured-image">
        <strong>{node.data.Project_Title}</strong>
      </p>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    {
      allAirtable(filter: {table: {eq: "Project"}, data: {Published: {eq: true}, Featured: {ne: true}}}, sort: {order: DESC, fields: data___End_Date}) {
        nodes {
          recordId
          data {
            Project_Title
            Featured_Image_URL
            End_Date(formatString: "MM-YYYY")
            Featured
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
          {data.allAirtable.nodes.map((node, index) => (
            <InViewAnimation
              delay={`delay-${((index * 50) + 200)}ms`}
              className="init-invisible"
            >
              <div
                key={node.recordId}
                id={node.recordId}
                className="portfolio-item"
              >
                <Link to={`/portfolio/${node.data.Project_Title.toLowerCase().replace('&', 'and').replace(/\s/gi, '-').replace("/", "").replace(" / ", "")}`}>
                  {IfFeaturedImage(node)}
                </Link>
              </div>
            </InViewAnimation>
          ))}
        </Masonry>
      </div>
    )}
  />
)
