import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Layout from './layout'
import SEO from './seo'

function PageLayout ({ children, pageContext }) {
  const { title } = pageContext.frontmatter
  const data = useStaticQuery(graphql`
    query PageTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={title} />
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        {children}
        <pre>{JSON.stringify(data.site.siteMetadata, null, 2)}</pre>
      </article>
    </Layout>
  )
}

export default PageLayout
