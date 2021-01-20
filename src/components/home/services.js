import React, { useEffect, useState } from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import { StaticQuery, graphql } from "gatsby"
import Parallax from "../utilities/Parallax"
// import Separator from "../../components/separator"
import SeparatorTop from "../../components/separator-top"
import SeparatorBottom from "../../components/separator-bottom"


export default function Companies() {

  // Set default state of parallax to enabled / not disabled
  const [parallaxDisabledState, setparallaxDisabledState] = useState(false);

  // .window is not available until after the render - useEffect needed
  useEffect(() => {

    function handleResize() {
      // check for small windows
      if (window.innerWidth <= 800 || window.innerHeight <= 600) {
        // Set true for small screens
        setparallaxDisabledState(true)
        // log state
        console.log("Parallax Disabled", parallaxDisabledState)
      } else {
        // log state
        console.log("Parallax Disabled", parallaxDisabledState)
      }
    }

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // When the window resizes, call handleResize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);

  }, [parallaxDisabledState])
  return (
    <StaticQuery
      query={graphql`
      {
        allAirtable(filter: {data: {Services_Name: {ne: null}}}, sort: {fields: data___Services_Order}) {
          nodes {
            data {
              Services_Image
              Services_Name
              Services_Order
            }
          }
        }
      }      
      `}

      render={data => (
        <>
          <SeparatorTop className="bg-green-dark-3" />

          <section id="services" className="home-page-section bg-green-dark-3 small-padding-top-50 small-padding-bottom-50">
            <div className="outer-container">
              <div className="inner-width-1000">
                <Parallax disabled={parallaxDisabledState}>
                  <InViewAnimation
                    delay="delay-0ms"
                    className="init-invisible"
                  >
                    <h3>Services Offered</h3>
                  </InViewAnimation>

                  <div className="services-container grid-container col-5 small-col-2">
                    {data.allAirtable.nodes.map((service, index) => (
                      <div key={service.data["Services_Order"]}>
                        <InViewAnimation
                          delay={`delay-${(index * 50) + 200}ms`}
                          className="init-invisible"
                        >
                          <div className="block service padding-top-30 padding-bottom-30 padding-left-20 padding-right-20 border border-solid border-width-1 border-color-white bg-green-dark-4 small-padding-top-20 mall-padding-bottom-20 small-padding-left-18 small-padding-right-18">
                            <img className="block center w-25" src={`https://res.cloudinary.com/billymitchell/image/upload/q_auto:best/${service.data["Services_Image"]}`} alt={service.data["Services_Name"]}></img>
                            <small className="text-center block margin-bottom-0 margin-top-20">{service.data["Services_Name"]}</small>
                          </div>
                        </InViewAnimation>
                      </div>
                    ))}
                  </div>

                </Parallax>
              </div>
            </div>
          </section>

          <SeparatorBottom className="bg-green-dark-3" />
        </>
      )}
    />
  )
}

