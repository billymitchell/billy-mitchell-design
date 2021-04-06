import React, {useState} from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../../components/layout/layout"
import { useLocation } from "@reach/router"

// Portfolio Work
import Branding from "../../components/portfolio/featured/creative-disciplines-featured/Branding"
import MotionDesign from "../../components/portfolio/featured/creative-disciplines-featured/MotionDesign"
import PrintDesign from "../../components/portfolio/featured/creative-disciplines-featured/PrintDesign"
import Illustration from "../../components/portfolio/featured/creative-disciplines-featured/Illustration"
import MuralArt from "../../components/portfolio/featured/creative-disciplines-featured/MuralArt"
import AllFeatured from "../../components/portfolio/featured/creative-disciplines-featured/AllFeatured"
import UIDesign from "../../components/portfolio/featured/creative-disciplines-featured/UIDesign"
import UXDesign from "../../components/portfolio/featured/creative-disciplines-featured/UXDesign"
import WebDevelopment from "../../components/portfolio/featured/creative-disciplines-featured/WebDevelopment"

function Portfolio () {


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
        <AllFeatured  />
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
        allAirtable(filter: {data: {Published: {eq: true}, Featured: {eq: true}}}) {
          distinct(field: data___Creative_Discipline)
        }
      }  
      `}
      render={data => (
        
        <div id="portfolio" className="bg-black">
          
          <Layout>
            <div className="outer-container">
              <div className="inner-width">
                <h1>{`Featured ${discipline} Work`}</h1>
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
                <div className="text-center padding-top-15 padding-bottom-15">
                  <Link to="/portfolio/all" >View All Other Published Portfolio Work</Link>
                </div>
              </div>
            </div>

          </Layout>
        </ div>
      )}
    />
  )
}


export default Portfolio