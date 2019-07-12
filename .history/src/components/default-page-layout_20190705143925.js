import React from 'react'
import Helmet from 'react-helmet'

function Layout ({ children, pageContext }) {
  const { title } = pageContext.frontmatter

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

export default Layout
