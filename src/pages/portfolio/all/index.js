import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../../../components/layout/layout"
import PortfolioContainerAll from "../../../components/portfolio/all/portfolioContainerAll"

export default function Portfolio() {
  //Set default portfolio query to featured-work
  const [clickedValue, setClickedValue] = useState("all-work")

  //on btn click, set state value = to button value
  const onButtonClick = event => {
    setClickedValue(event.target.value)
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
                <h1>All Portfolio Work</h1>
                <div className="button-container">
                  {data.allAirtable.distinct.map(distinct => (
                    // For each category
                    <button
                      // Make all lower case
                      // Swap `&` for `and`
                      // Swap all spaces for -
                      value={distinct.toLowerCase().replace('&', 'and').replace(/\s/gi, '-')}
                      id={distinct.toLowerCase().replace('&', 'and').replace(/\s/gi, '-')}
                      onClick={onButtonClick}>{distinct}</button>
                  ))
                  }
                </div>
                {/* pass clicked value to portfolio */}
                <PortfolioContainerAll clickedValue={clickedValue} />
              </div>
            </div>
          </Layout>
        </div>
      )}
    />
  )
}
