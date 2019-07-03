import React from 'react'
import { Helmet } from 'react-helmet'

export default function Template ({ data }) {
  const { markdownRemark: tutorial } = data

  return (
    <div className='tutorial-container'>
      <Helmet title={`FP Tutorial - ${tutorial.frontmatter.title}`} />
      <div className='tutorial'>
        <h1>{tutorial.frontmatter.title}</h1>
        <div
          className='tutorial-content'
          dangerouslySetInnerHTML={{ __html: tutorial.html }}
        />
      </div>
    </div>
  )
}
