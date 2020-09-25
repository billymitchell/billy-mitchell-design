// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allAirtable {
        edges {
          node {
            data {
              slug
            }
          }
        }
      }
    }
  `)
  data.allAirtable.edges.forEach(edge => {
    const slug = edge.node.data.slug
    actions.createPage({
      path: `/portfolio/${slug}`,
      component: require.resolve(`./src/templates/portfolio-item.js`),
      context: {
        slug: slug,
      },
    })
  })
}
