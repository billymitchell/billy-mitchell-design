import React from "react"
import InViewAnimation from "../../components/utilities/InViewAnimation"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allAirtable(filter: { table: { eq: "Project" } }) {
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
`

const Portfolio = ({ data }) => {
  console.log(data.allAirtable.nodes.map(node => node.data.Featured_Image))
  return (
    <section id="portfolio" className="v-h-center-100vh bg-blue">
      <div className="outer-container">
        <div className="inner-text-width">
          <InViewAnimation
            animation="fade-in-up"
            duration="time-1000ms"
            delay="delay-0ms"
            fillmode="forwards"
            easing="ease-in-out-quad"
            iteration="loop-1"
            className="init-invisible"
          >
            <h3>Portfolio</h3>
          </InViewAnimation>
          <div className="companies-container grid-container col-4 col-gap-15 small-col-2 small-col-gap-5">
            {data.allAirtable.nodes.map(node => (
              <div className="portfolio-item">
                <a
                  key={node.recordId}
                  href={node.data.Portfolio_Page_URL}
                  target="_same"
                  rel="noreferrer"
                >
                  <img
                    className="fluid"
                    src={node.data.Featured_Image[0].url}
                    alt={node.data.Project_Title}
                  ></img>
                  <small>{node.data.Project_Title}</small>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
