import { Link } from 'gatsby'
import React from 'react'

export default function BreadcrumbTrail ({ title }) {
  return title ? (
    <p>
      <Link to='/'>Home</Link>
      {` > `}
      {title}
    </p>
  ) : null
}
