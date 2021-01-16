import React, { useEffect, useState } from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import { StaticQuery, graphql } from "gatsby"
import Parallax from "../utilities/Parallax"
import Separator from "../../components/separator"



export default function Companies() {
  // Set default state of parallax to enabled  
  const [parallaxDisabledState, setparallaxDisabledState] = useState(false);
  // since no .window is available until after the render, useEffect
  useEffect(() => {
    // check for small windows
    if (window.innerWidth <= 800 || window.innerHeight <= 600) {
      console.log("Parallax Disabled On Mobile")
      // Set true for small screens
      setparallaxDisabledState(true)
    } else {
      console.log("Parallax Enabled On Desktop")
    }
    // when the state changes, re-render
  }, [parallaxDisabledState])
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
        <>
          <Separator className="bg-blue" />
          <section id="companies" className="v-h-center-100vh bg-blue small-padding-top-100 small-padding-bottom-100">
            <div className="outer-container">
              <div className="inner-width-1000">
                <Parallax disabled={parallaxDisabledState}>
                  <InViewAnimation
                    animation="fade-in-up"
                    duration="time-1000ms"
                    delay="delay-0ms"
                    fillmode="forwards"
                    easing="ease-in-out-quad"
                    iteration="loop-1"
                    className="init-invisible"
                  >
                    <h3 className="margin-top-0">Businesses I've Worked With</h3>
                    <p>
                      Direct employment, agency work, contract, and B2B services.
                  </p>
                    <div className="bg-white padding-40 border-r-7 border-width-4 border-solid border-color-gray-1 small-padding-25" >
                      <div className="companies-container grid-container col-5 col-gap-40 small-col-3 small-col-gap-25">
                        {data.allAirtable.nodes.map(node => (
                          <img className="companies fluid justify-self-center align-self-center" src={`https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/${node.data.Company_Logo}`} alt={node.data.Company_Name} />
                        ))}
                      </div>
                    </div>
                  </InViewAnimation>
                </Parallax>
              </div>
            </div>
          </section>
        </>
      )}
    />
  )
}
