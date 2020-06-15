import React from "react"
import InViewAnimation from "./InViewAnimation"
import { StaticQuery, graphql } from "gatsby"

export default function Companies() {
  return (
    <StaticQuery
      query={graphql`
        query CompanyData {
          allAirtable(
            filter: { table: { eq: "Companies" } }
            sort: { fields: [data___Name], order: ASC }
          ) {
            nodes {
              recordId
              data {
                Name
                URL
              }
            }
          }
        }
      `}
      render={data => (
        <section id="tech-stack" className="v-h-center-100vh bg-blue">
          <div className="text-container-width">
            <InViewAnimation
              animation="fade-in-up"
              duration="time-1000ms"
              delay="delay-0ms"
              fillmode="forwards"
              easing="ease-in-out-quad"
              iteration="loop-1"
            >
              <h3>Businesses I've Worked With</h3>
              <p>
                Here are some of the businesses I've worked with, including
                direct employment, agency work, freelance, and B2B services.
              </p>
            </InViewAnimation>
            <div className="companies-container grid-container col-4 col-gap-15 small-col-2 small-col-gap-5">
              {data.allAirtable.nodes.map(node => (
                <a href={node.data.URL} target="_blank" rel="noreferrer">
                  <small key={node.recordId}>{node.data.Name}</small>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    />
  )
}
