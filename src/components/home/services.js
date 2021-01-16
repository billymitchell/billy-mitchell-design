import React from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import { StaticQuery, graphql } from "gatsby"
import Parallax from "../utilities/Parallax"
import Separator from "../../components/separator"


const DisableParallaxMobile = () => {
  if (window.innerWidth <= 800 || window.innerHeight <= 600) {
    console.log("Parallax Disabled On Mobile");
    return true
  } else {
    console.log("Parallax Enabled On Desktop");
    return false
  }
}


export default function Companies() {
  return (
    <StaticQuery
      query={graphql`
      {
        allAirtable(filter: {data: {Services_Name: {ne: null}}}, sort: {fields: data___Services_Order}) {
          nodes {
            data {
              Services_Image
              Services_Name
            }
          }
        }
      }
      
      `}
      render={data => (
        <>
          <Separator className="bg-green-dark-3" />
          <section id="services" className="v-h-center-100vh bg-green-dark-3 small-padding-top-100 small-padding-bottom-100">
            <div className="outer-container">
              <div className="inner-width-800">
                <Parallax disabled={DisableParallaxMobile()}>
                  <InViewAnimation
                    animation="fade-in-up"
                    duration="time-1000ms"
                    delay="delay-0ms"
                    fillmode="forwards"
                    easing="ease-in-out-quad"
                    iteration="loop-1"
                    className="init-invisible"
                  >
                    <h3>Services Offered</h3>
                  </InViewAnimation>
                  <InViewAnimation
                    animation="fade-in-up"
                    duration="time-1000ms"
                    delay="delay-500ms"
                    fillmode="forwards"
                    easing="ease-in-out-quad"
                    iteration="loop-1"
                    className="init-invisible"
                  >
                    <div className="services-container grid-container col-5 small-col-2">
                      {data.allAirtable.nodes.map(service => (
                        <div className="block service padding-top-30 padding-bottom-30 padding-left-20 padding-right-20 border border-solid border-width-1 border-color-white bg-green-dark-4 small-padding-top-20 mall-padding-bottom-20 small-padding-left-18 small-padding-right-18">
                          <img className="block center w-25" src={`https://res.cloudinary.com/billymitchell/image/upload/q_auto:best/${service.data["Services_Image"]}`} alt={service.data["Services_Name"]}></img>
                          <small className="text-center block margin-bottom-0 margin-top-20">{service.data["Services_Name"]}</small>
                        </div>
                      ))}
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

