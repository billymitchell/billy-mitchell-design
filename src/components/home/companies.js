import React from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import { StaticQuery, graphql } from "gatsby"
import Parallax from "../utilities/Parallax"


export default function Companies() {
  return (
    <StaticQuery
      query={graphql`
      {
        allAirtable(filter: {data: {Feature: {eq: true}}}, sort: {fields: data___Company_Name, order: ASC}) {
          nodes {
            recordId
            data {
              Company_Name
              Company_Logo
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
                  <div className="bg-white padding-25 border-r-7 border-width-7 border-solid border-color-gray-1" >
                    <h3 className="margin-top-0">Businesses I've Worked With</h3>
                    <p>
                      Direct employment, agency work, contract, and B2B services.
                  </p>

                    <div className="companies-container grid-container col-5 col-gap-25 small-col-2 small-col-gap-25">
                      {data.allAirtable.nodes.map(node => (
                        <img className="companies fluid justify-self-center align-self-center" src={`https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/${node.data.Company_Logo}`} alt={node.data.Company_Name} />
                      ))}
                    </div>
                  </div>
                </InViewAnimation>
              </div>
            </div>
          </Parallax>
        </section>
      )}
    />
  )
}
