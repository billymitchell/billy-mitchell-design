require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Billy Mitchell Design & Development`,
    authour: `Billy Mitchell`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABEL_API_KEY,
        tables: [
          {
            baseId: `appvr5KrgKiJo1E7M`,
            tableName: `Project`,
            tableLinks: [`Made_For`],
          },
          {
            baseId: `appvr5KrgKiJo1E7M`,
            tableName: `Companies`,
          },
        ],
      },
    },
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-179560174-1",
      head: true,
      anonymize: true,
      respectDNT: true,
    },
  ],
}
