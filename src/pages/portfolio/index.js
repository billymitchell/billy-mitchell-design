import React, { useState } from "react"
import { StaticQuery, graphql, Link  } from "gatsby"
import Layout from "../../components/layout/layout"
import { ParallaxProvider } from "react-scroll-parallax"
import PortfolioContainer from "../../components/portfolio/portfolioContainer"

export default function Portfolio() {
  //Set default portfolio query to featured-work
  const [clickedValue, setClickedValue] = useState("featured")

  //on btn click, set state value = to button value
  const onButtonClick = event => {
    setClickedValue(event.target.value)
  }

  return (
    <StaticQuery
      // Get distinct catagories 
      query={graphql`
      query categories {
        allAirtable(filter: {data: {Published: {eq: true}, Job_Type: {ne: "Educational"}}}) {
          distinct(field: data___Creative_Discipline)
        }
      }     
      `}
      render={data => (
      <div id="portfolio" className="bg-black">
        <ParallaxProvider>
          <Layout>
            <div className="outer-container">
              <div className="inner-width">
                <h1>Portfolio</h1>
                <h3>Selected Works</h3>
                <div className="button-container">
                {data.allAirtable.distinct.map(distinct => (
                  // For each category
                  <button 
                    // Make all lower case
                    // Swap `&` for `and`
                    // Swap all spaces for -
                  value={distinct.toLowerCase().replace('&', 'and').replace(/\s/gi, '-')}
                  onClick={onButtonClick}>{distinct}</button>
                ))
                }
                </div>
                {/* pass clicked value to portfolio */}
                <PortfolioContainer clickedValue={clickedValue} />
                <div className="text-center">
                <Link to="/portfolio/all" >View All Works</Link>
                </div>
              </div>
            </div>
          </Layout>
        </ParallaxProvider>
      </div>
      )}
      />
    )
  }
  