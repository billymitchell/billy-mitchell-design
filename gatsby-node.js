exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
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

  if (result.errors) {
    reporter.panic("Error!", reporter.errors)
  }

  result.data.allAirtable.edges.forEach(edges => {
    actions.createPage({
      path: `/portfolio/${edges.node.data.slug}`,
      component: require.resolve(
        `./src/templates/portfolio-item-page-query.js`
      ),
      context: {
        slug: `${edges.node.data.slug}`,
      },
    })
  })
}
