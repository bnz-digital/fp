import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

import { navigate } from '@reach/router'

const pattern = /#|\?/g

const makeOnClick = to => e => {
  e.preventDefault

  navigate(to)
}

export default function Link ({ children, to, ...props }) {
  const useAnchor = pattern.test(to)

  return useAnchor ? (
    <a onClick={makeOnClick(to)} href={to} {...props}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  )
}
