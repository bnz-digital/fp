import React from 'react'
import Helmet from 'react-helmet'

import Layout from './layout'
import SEO from './seo'

function PageLayout ({ children, pageContext }) {
  const { title } = pageContext.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        {children}
      </article>
    </Layout>
  )
}

export default PageLayout
