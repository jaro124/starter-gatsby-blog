const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
 
  const blogListTemplate = path.resolve(`./src/templates/page-list-blog-template.js`)

    const { createPage } = actions;
    
    const result = await graphql(`
    query MyQuery {
      allMdx (sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            internal {
              contentFilePath
            }
            id
          }
        }
      }
    }
    `);

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX result', result.errors)
    }
  
    const posts = result.data.allMdx.edges

    // Create blog-list pages
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: `${blogListTemplate}`,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
};