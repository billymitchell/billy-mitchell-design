import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../../components/layout/layout"
import PortfolioContainerFeatured from "../../components/portfolio/featured/portfolioContainerFeatured"

export default function Portfolio() {
  //Set default portfolio query to featured-work
  const [clickedValue, setClickedValue] = useState("all-featured")

  //on btn click, set state value = to button value
  const onButtonClick = event => {
    setClickedValue(event.target.value)
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
                <h1>Featured Work</h1>
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
              </div>
            </div>
            <div className="outer-container">
              <div className="inner-width-full">
                {/* pass clicked value to portfolio */}
                <PortfolioContainerFeatured clickedValue={clickedValue} />
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
