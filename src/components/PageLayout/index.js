import React from 'react'

import BreadcrumbTrail from '../BreadcrumbTrail'
import Layout from '../Layout'
import SEO from '../SEO'

function PageLayout ({ children, pageContext }) {
  const { title, trail } = pageContext.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <BreadcrumbTrail title={title} trail={trail} />
      <article>{children}</article>
    </Layout>
  )
}

export default PageLayout
