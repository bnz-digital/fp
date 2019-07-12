import React from 'react'

import Layout from '../layout'

function DocLayout ({ children }) {
  return (
    <Layout>
      <article>
        <header>
          <h1>Todo: Main Title Will Go Here</h1>
        </header>
        {children}
      </article>
    </Layout>
  )
}

export default DocLayout
