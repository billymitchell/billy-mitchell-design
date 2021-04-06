import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../../../components/layout/layout"
import { useLocation } from "@reach/router"

// Portfolio Work
import Branding from "../../../components/portfolio/all/creative-disciplines-all/Branding"
import MotionDesign from "../../../components/portfolio/all/creative-disciplines-all/MotionDesign"
import PrintDesign from "../../../components/portfolio/all/creative-disciplines-all/PrintDesign"
import Illustration from "../../../components/portfolio/all/creative-disciplines-all/Illustration"
import MuralArt from "../../../components/portfolio/all/creative-disciplines-all/MuralArt"
import All from "../../../components/portfolio/all/creative-disciplines-all/AllWork"
import UIDesign from "../../../components/portfolio/all/creative-disciplines-all/UIDesign"
import UXDesign from "../../../components/portfolio/all/creative-disciplines-all/UXDesign"
import WebDevelopment from "../../../components/portfolio/all/creative-disciplines-all/WebDevelopment"

function Portfolio() {

  let currentSearchTerm = useLocation().search

   //Set default portfolio query 
   const [discipline, setDiscipline] = useState("")

   function onButtonClick (event)  {
    setDiscipline(event.target.attributes.discipline.value)
  }

  const renderPortfolio = () => {
    if (currentSearchTerm === "") {
      setDiscipline("")
      return (
        <All  />
      )
    }
    if (currentSearchTerm === "?branding") {
      setDiscipline("Branding")
      return (
        <Branding  />
      ) 
    } 
    if (currentSearchTerm === "?ui-design") {
      setDiscipline("UI Design")
      return (
        <UIDesign  />
      )
    }
    if (currentSearchTerm === "?ux-design") {
      setDiscipline("UX Design")
      return (
        <UXDesign  />
      )
    }
    if (currentSearchTerm === "?web-development") {
      setDiscipline("Web Development")
      return (
        <WebDevelopment  />
      )
    }
    if (currentSearchTerm === "?print-design") {
      setDiscipline("Print Design")
      return (
        <PrintDesign  />
      )
    }
    if (currentSearchTerm === "?motion-design") {
      setDiscipline("Motion Design")
      return (
        <MotionDesign  />
      )
    }
    if (currentSearchTerm === "?illustration") {
      setDiscipline("Illustration")
      return (
        <Illustration  />
      )
    }
    if (currentSearchTerm === "?mural-art") {
      setDiscipline("Mural Art")
      return (
        <MuralArt  />
      )
    }
  }

  return (
    <StaticQuery
      // Get distinct catagories 
      query={graphql`
      {
        allAirtable(filter: {data: {Published: {eq: true}}}) {
          distinct(field: data___Creative_Discipline)
        }
      }     
      `}
      render={data => (
        <div id="portfolio" className="bg-black">
          <Layout>
            <div className="outer-container">
              <div className="inner-width">
                <h1>{`All Other ${discipline} Work`}</h1>
                <p>This work may not contain compleat supporting documentation to help you understand the background of the project. If you would like more information about the work you see here, please request it. </p>
                <div className="button-container">
                {data.allAirtable.distinct.map(Creative_Discipline => (
                      // For each category
                      // Make all lower case
                      // Swap `&` for `and`
                      // Swap all spaces for -
                    <Link
                      onClick={onButtonClick}
                      to={`?${Creative_Discipline.toLowerCase().replace('&', 'and').replace(/\s/gi, '-')}`}
                      className="button"
                      discipline={Creative_Discipline}
                      >
                          {Creative_Discipline}
                    </Link>
                  ))
                  }
                </div>
              </div>
            </div>
            <div className="outer-container">
              <div className="inner-width-full">
              {renderPortfolio()}
              </div>
            </div>
          </Layout>
        </ div>
      )}
    />
  )
}


export default Portfolio