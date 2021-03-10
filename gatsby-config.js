require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.billymitchell.design`,
    title: "Billy Mitchell Design",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: "nma0fhb4tf2r",
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
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
          {
            baseId: `appvr5KrgKiJo1E7M`,
            tableName: `Services`,
          },
        ],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-179560174-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
