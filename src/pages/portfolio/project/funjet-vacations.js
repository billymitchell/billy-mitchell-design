import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../../../components/layout/layout"
import MetaData from "../../../components/layout/header/mettadata"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allAirtable(
          filter: {
            table: { eq: "Project" }
            data: { slug: { eq: "funjet-vacations" } }
          }
        ) {
          nodes {
            data {
              Project_Title
              End_Date
              Live_Web_Project_URL
              Body_Text
              Creative_Discipline
              Job_Type
              Made_For {
                recordId
                data {
                  Company_Name
                }
              }
              Position_on_Project
              Featured_Image {
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div id="portfolio">
          <MetaData
            title={data.allAirtable.nodes[0].data.Project_Title}
            description={data.allAirtable.nodes[0].data.SEO_Description}
            url={`/portfolio/project/${data.allAirtable.nodes[0].data.slug}`}
            socialimg={data.allAirtable.nodes[0].data.Featured_Image[0].url}
          />
          <Layout>
            <div className="portfolio-header-container">
              <div className="image-container">
                <img
                  className="portfolio-header"
                  src={data.allAirtable.nodes[0].data.Featured_Image[0].url}
                  alt={data.allAirtable.nodes[0].data.Project_Title}
                ></img>
              </div>
              <h1>{data.allAirtable.nodes[0].data.Project_Title}</h1>
            </div>
            <div className="outer-container-body">
              <div className="inner-text-width">
                <div className="portfolio-meta-data">
                  <div>End Date: {data.allAirtable.nodes[0].data.End_Date}</div>
                  <div>
                    Live Project URL:{" "}
                    <a
                      href={data.allAirtable.nodes[0].data.Live_Web_Project_URL}
                    >
                      {data.allAirtable.nodes[0].data.Live_Web_Project_URL}
                    </a>
                  </div>
                  <div>
                    Creative Discipline:{" "}
                    {data.allAirtable.nodes[0].data.Creative_Discipline}
                  </div>
                  <div>Job Type: {data.allAirtable.nodes[0].data.Job_Type}</div>
                  <div>
                    Companies:
                    <div>
                      {data.allAirtable.nodes[0].data.Made_For.map(item => (
                        <>
                          <span className="Company">
                            {item.data.Company_Name}
                          </span>
                          <span> </span>
                        </>
                      ))}
                    </div>
                  </div>
                  <div>
                    Position on Project:{" "}
                    {data.allAirtable.nodes[0].data.Position_on_Project}
                  </div>
                </div>
              </div>
              <div className="inner-width">
                <img
                  className="fluid inline-max-content center"
                  src={data.allAirtable.nodes[0].data.Featured_Image[0].url}
                  alt={data.allAirtable.nodes[0].data.Project_Title}
                ></img>
                <div className="inner-text-width">
                  <p>{data.allAirtable.nodes[0].data.Body_Text}</p>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </>
    )}
  />
)
