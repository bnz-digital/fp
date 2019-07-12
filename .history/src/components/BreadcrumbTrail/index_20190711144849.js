import { Link } from 'gatsby'
import React from 'react'

export default function BreadcrumbTrail ({ title }) {
  return title === 'Home' ? null : (
    <p>
      <Link to='/'>Home</Link>
      {` > `}
      {title}
    </p>
  )
}
