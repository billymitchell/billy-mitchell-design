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
            tableName: `Companies`,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `portfolio`,
    //     path: `${__dirname}/src/pages/portfolio`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/src/pages/blog`,
    //   },
    // },
    // `gatsby-plugin-mdx`,
  ],
}
