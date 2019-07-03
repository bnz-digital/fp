const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const tutorialTemplate = path.resolve(`src/templates/tutorial.js`)

  return graphql(`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`
).then(result => {
  if (result.errors) {
    return Promise.reject(result.errors)
  }
})
}
}
