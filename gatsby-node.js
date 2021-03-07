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
      allContentfulBlog {
        nodes {
          slug
          contentful_id
        }
      }
    }
    `)

    if (result.errors) {
        reporter.panic("Error!", JSON.stringify(result.errors))
    }

    // Generate Portfolio Items
    result.data.allAirtable.edges.forEach(edges => {
        actions.createPage({
            path: `/portfolio/${edges.node.data.Project_Title.toLowerCase().replace('&', 'and').replace("/", "").replace(/\s/gi, '-')}`,
            component: require.resolve(
                `./src/templates/portfolio-item-page-query.js`
            ),
            context: {
                Project_Title: edges.node.data.Project_Title,
            },
        })
    })

    // Generate Blog Items
    result.data.allContentfulBlog.nodes.forEach(blog => {
        actions.createPage({
            path: `/blog/${blog.slug}`,
            component: require.resolve(
                `./src/templates/blog.js`
            ),
            context: {
                contentful_id: blog.contentful_id,
            }
        })
    })

}
