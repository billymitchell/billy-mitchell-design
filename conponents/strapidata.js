import React from "react"
import { graphql } from "gatsby"

const Strapidata = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allStrapiResumes {
      nodes {
        title
        startdate
        currentemployer
        logo {
          relativePath
        }
      }
    }
  }
`

export default Strapidata
