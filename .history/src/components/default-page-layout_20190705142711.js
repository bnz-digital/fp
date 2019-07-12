import React from 'react'
import Helmet from 'react-helmet'

import Layout from './layout'

function DefaultPageLayout ({ children, pageContext }) {
  const { title, author, date } = pageContext.frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        {children}
      </article>
    </Layout>
  )
}

export default DefaultPageLayout
