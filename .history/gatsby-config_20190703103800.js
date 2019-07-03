module.exports = {
  siteMetadata: {
    title: `FP Tutorials`,
    description: `A simple, brief functional JavaScript tutorial for those familiar with OOP.`,
    author: `@chasm`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fp`,
        short_name: `fp`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/fp.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
