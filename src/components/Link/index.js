import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

import { navigate } from '@reach/router'

const pattern = /#|\?/g

const makeOnClick = to => () => navigate(to)

export default function Link ({ children, to, ...props }) {
  return pattern.test(to) ? (
    <a onClick={makeOnClick(to)} {...props}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  )
}
