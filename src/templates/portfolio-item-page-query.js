import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import MetaData from "../components/layout/header/mettadata"

const IfLiveURL = function (data) {
  if (data.allAirtable.nodes[0].data.Live_Web_Project_URL) {
    return (
      <div>
        <span>
          <b>Live Project URL:</b>{" "}
        </span>
        <a href={data.allAirtable.nodes[0].data.Live_Web_Project_URL}>
          {data.allAirtable.nodes[0].data.Live_Web_Project_URL}
        </a>
      </div>
    )
  }
}

const IfPosition = function (data) {
  if (data.allAirtable.nodes[0].data.Position_on_Project) {
    return (
      <div>
        <span>
          <b>Position:</b>{" "}
        </span>
        {data.allAirtable.nodes[0].data.Position_on_Project}
      </div>
    )
  }
}

const renderHeader = function (data) {
  console.log(data.allAirtable.nodes[0].data.Hide_Featured_Image_In_Body)
  // If  custom html header, show header
  if (data.allAirtable.nodes[0].data.Custom_HTML) {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: data.allAirtable.nodes[0].data.Custom_HTML,
        }}
      ></span>
    )
  } else if (
    // if no html header & hide featured image is true
    data.allAirtable.nodes[0].data.Hide_Featured_Image_In_Body === true
  ) {
    return <></>
  } else {
    // if condition 1 & 2 are false
    return (
      <>
        <img
          className="fetched-header"
          src={`https://res.cloudinary.com/billymitchell/image/upload/dpr_auto,f_auto,q_auto:best/${data.allAirtable.nodes[0].data.Featured_Image_URL}`}
          alt={data.allAirtable.nodes[0].data.Project_Title}
        ></img>
      </>
    )
  }
}

const ifCustomBodyHTML = function (data) {
  if (data.allAirtable.nodes[0].data.Body_Text) {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: data.allAirtable.nodes[0].data.Body_Text,
        }}
      ></span>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    allAirtable(
      filter: { table: { eq: "Project" }, data: { slug: { eq: $slug } } }
    ) {
      nodes {
        data {
          Project_Title
          End_Date(formatString: "MMMM DD, YYYY")
          Live_Web_Project_URL
          Creative_Discipline
          Job_Type
          Made_For {
            recordId
            data {
              Company_Name
            }
          }
          Position_on_Project
          Featured_Image_URL
          Body_Text
          Custom_HTML
          Hide_Featured_Image_In_Body
        }
      }
    }
  }
`

const Portfolio = ({ data }) => (
  <>
    <div id="portfolio">
      <MetaData
        title={data.allAirtable.nodes[0].data.Project_Title}
        description={data.allAirtable.nodes[0].data.Made_For.map(item => (
          <>
            <span className="Company"> | {item.data.Company_Name}</span>
          </>
        ))}
        url={`/portfolio/project/${data.allAirtable.nodes[0].data.slug}`}
        socialimg={data.allAirtable.nodes[0].data.Featured_Image_URL}
      />
      <Layout>
        <div className="portfolio-header-container">
          <div className="image-container">
            <img
              className="portfolio-header"
              src={`https://res.cloudinary.com/billymitchell/image/upload/${data.allAirtable.nodes[0].data.Featured_Image_URL}`}
              alt={data.allAirtable.nodes[0].data.Project_Title}
            ></img>
          </div>
          <h2>{data.allAirtable.nodes[0].data.Project_Title}</h2>
        </div>
        <div className="outer-container-body">
          <div className="inner-text-width">
            <div className="portfolio-meta-data">
              <p>
                <div>
                  <b>Completed:</b> {data.allAirtable.nodes[0].data.End_Date}
                </div>
                <div>{IfLiveURL(data)}</div>
                <div>
                  <b>Creative Discipline:</b>{" "}
                  {data.allAirtable.nodes[0].data.Creative_Discipline}
                </div>
                <div>
                  <b>Job Type:</b> {data.allAirtable.nodes[0].data.Job_Type}
                </div>
                <div>
                  <b>Made for:</b>{" "}
                  {data.allAirtable.nodes[0].data.Made_For.map(item => (
                    <>
                      <span className="Company">
                        {" "}
                        | {item.data.Company_Name}
                      </span>
                    </>
                  ))}
                </div>
                <div>
                  <div>{IfPosition(data)}</div>
                </div>
              </p>
            </div>
          </div>
          <div className="inner-width">{renderHeader(data)}</div>
          <div className="inner-text-width imported-text">
            {ifCustomBodyHTML(data)}
          </div>
        </div>
      </Layout>
    </div>
  </>
)

export default Portfolio
