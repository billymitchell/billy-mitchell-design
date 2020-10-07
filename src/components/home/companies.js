import React from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import { StaticQuery, graphql } from "gatsby"
import Parallax from "../utilities/Parallax"

export default function Companies() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allAirtable(
            filter: {
              data: {
                Company_Name: { ne: null }
                Featured_Project: { ne: null }
                Feature: { eq: true }
              }
            }
            sort: { fields: data___Company_Name, order: ASC }
          ) {
            nodes {
              recordId
              data {
                Company_Name
                URL
                Featured_Project
              }
            }
          }
        }
      `}
      render={data => (
        <section id="companies" className="v-h-center-100vh bg-blue">
          <Parallax>
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
                  <h3>Businesses I've Worked With</h3>
                  <p>
                    Here are some of the businesses I've worked with, including
                    direct employment, agency work, freelance, and B2B services.
                  </p>
                </InViewAnimation>
                <div className="companies-container grid-container col-4 col-gap-15 small-col-2 small-col-gap-5">
                  {data.allAirtable.nodes.map(node => (
                    <a
                      key={node.recordId}
                      href={`/portfolio/project/${node.data.Featured_Project[0]}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <small>{node.data.Company_Name}</small>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Parallax>
        </section>
      )}
    />
  )
}
