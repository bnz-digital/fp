import React from 'react'

import Layout from '../Layout'
import SEO from '../SEO'

function PageLayout ({ children, pageContext }) {
  const { title } = pageContext.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <BreadcrumbTrail title={title} />
      <article>{children}</article>
    </Layout>
  )
}

export default PageLayout
