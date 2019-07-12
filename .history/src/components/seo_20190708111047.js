import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

function SEO ({ lang, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={
        title
          ? `${title} | ${site.siteMetadata.title}`
          : site.siteMetadata.title
      }
    >
      <script src='https://embed.runkit.com' />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

export default SEO
