import { Link } from 'gatsby'
import React, { Fragment } from 'react'

import TrailSeparator from '../TrailSeparator'

function getCrumbs (title, trail = []) {
  return (
    <>
      {trail.map(({ href, label }) => (
        <Fragment key={href}>
          <Link to={href}>{label}</Link>
          <TrailSeparator />
        </Fragment>
      ))}
      {title}
    </>
  )
}

export default function BreadcrumbTrail ({ title, trail }) {
  if (trail === undefined) {
    return null
  }

  return <p>{getCrumbs(title, trail)}</p>
}
