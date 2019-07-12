import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0, display: 'inline-block', flexGrow: 1 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ flexShrink: 1 }}>
        <Link
          to='/reusability'
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: 'lowercase',
            display: 'inline-block',
            padding: '0 0.5rem'
          }}
        >
          Reusability
        </Link>
        <Link
          to='/immutability'
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: 'lowercase',
            display: 'inline-block',
            padding: '0 0.5rem'
          }}
        >
          Variables
        </Link>
        <Link
          to='/iteration'
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: 'lowercase',
            display: 'inline-block',
            padding: '0 0.5rem'
          }}
        >
          Looping
        </Link>
        <Link
          to='/composition'
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: 'lowercase',
            display: 'inline-block',
            padding: '0 0.5rem'
          }}
        >
          Pipelines
        </Link>
        <Link
          to='/patterns-antipatterns'
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: 'lowercase',
            display: 'inline-block',
            padding: '0 0.5rem'
          }}
        >
          Patterns
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
