exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
  {
    allAirtable(filter: { data: { Project_Title: { ne: null }}}) {
      edges {
        node {
          data {
            Project_Title
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
      path: `/portfolio/${edges.node.data.Project_Title.toLowerCase().replace('&', 'and').replace("/","").replace(/\s/gi, '-')}`,
      component: require.resolve(
        `./src/templates/portfolio-item-page-query.js`
      ),
      context: {
        Project_Title: edges.node.data.Project_Title,
      },
    })
  })
}
