const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const tutorialTemplate = path.resolve(`src/templates/tutorial.js`)
}
