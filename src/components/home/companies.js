import React, { useEffect, useState } from "react"
import InViewAnimationTwo from "../utilities/InViewAnimationTwo"
import { StaticQuery, graphql } from "gatsby"
import { Parallax } from "react-scroll-parallax"
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
          <SeparatorTop className="bg-blue" />
          <section id="companies" className="home-page-section bg-blue small-padding-top-50 small-padding-bottom-50 midsize-padding-bottom-100 midsize-padding-top-100">
            <div className="outer-container">
              <div className="inner-width-1000">
                <Parallax disabled={parallaxDisabledState} y={[-30, 30]} x={[0, 0]}>
                  <InViewAnimationTwo
                    rootMargin="-25% 0%"
                    className="init-invisible"
                  >
                    <h3 className="margin-top-0">Businesses I've Worked With</h3>
                  </InViewAnimationTwo>
                  <InViewAnimationTwo
                    rootMargin="-25% 0%"
                    className="init-invisible"
                    animationdelay="delay-250ms"
                  >
                    <p>
                      Direct employment, agency work, contract, and B2B services.
                  </p>
                  </InViewAnimationTwo>
                  <InViewAnimationTwo
                    rootMargin="-25% 0%"
                    animationdelay="delay-500ms"
                    className="init-invisible"
                  >
                    <div className="bg-white padding-40 border-r-7 border-width-4 border-solid border-color-gray-1 small-padding-25" >
                      <div className="companies-container grid-container col-5 col-gap-60 small-col-3 small-col-gap-25">
                        {data.allAirtable.nodes.map(node => (
                          <img key={node.recordId} className={`companies fluid justify-self-center align-self-center ${node.data.Company_Name.toLowerCase().replace('&', 'and').replace(/\s/gi, '-')}`} src={`https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,fl_lossy,q_auto/${node.data.Company_Logo}`} alt={node.data.Company_Name} />
                        ))}
                      </div>
                    </div>
                  </InViewAnimationTwo>
                </Parallax>
              </div>
            </div>
          </section>
          <SeparatorBottom className="bg-blue" />
        </>
      )}
    />
  )
}
