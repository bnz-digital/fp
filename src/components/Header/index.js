import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { Location } from '@reach/router'

function DefaultLinks () {
  return (
    <>
      <Link
        to='/inductive'
        style={{
          color: `white`,
          textDecoration: `none`,
          textTransform: 'lowercase',
          display: 'inline-block',
          padding: '0 0.5rem'
        }}
      >
        Bottom-up
      </Link>
      <Link
        to='/deductive'
        style={{
          color: `white`,
          textDecoration: `none`,
          textTransform: 'lowercase',
          display: 'inline-block',
          padding: '0 0.5rem'
        }}
      >
        Top-down
      </Link>
      <Link
        to='/cypress'
        style={{
          color: `white`,
          textDecoration: `none`,
          textTransform: 'lowercase',
          display: 'inline-block',
          padding: '0 0.5rem'
        }}
      >
        Cypress
      </Link>
    </>
  )
}

function InductiveLinks () {
  return (
    <>
      <Link
        to='/inductive/reusability'
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
        to='/inductive/immutability'
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
        to='/inductive/iteration'
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
        to='/inductive/composition'
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
    </>
  )
}

function DeductiveLinks () {
  return (
    <>
      <Link
        to='/deductive/pure-functions/'
        style={{
          color: `white`,
          textDecoration: `none`,
          textTransform: 'lowercase',
          display: 'inline-block',
          padding: '0 0.5rem'
        }}
      >
        Pure functions
      </Link>
      <Link
        to='/deductive/more-fp-concepts'
        style={{
          color: `white`,
          textDecoration: `none`,
          textTransform: 'lowercase',
          display: 'inline-block',
          padding: '0 0.5rem'
        }}
      >
        More FP concepts
      </Link>
    </>
  )
}

function NavLinks ({ location }) {
  console.log(`location: ${location}`)
  switch (location.pathname.split('/')[1]) {
    case 'inductive':
      return <InductiveLinks />
    case 'deductive':
      return <DeductiveLinks />
    default:
      return <DefaultLinks />
  }
}

function getColour (location) {
  switch (location.pathname.split('/')[1]) {
    case 'inductive':
      return 'ForestGreen'
    case 'deductive':
      return 'MediumBlue'
    case 'cypress':
      return 'Maroon'
    default:
      return 'RebeccaPurple'
  }
}

const Header = ({ siteTitle, location }) => {
  const backgroundColour = getColour(location)

  return (
    <header
      style={{
        background: backgroundColour,
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
          <NavLinks location={location} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default function HeaderWrapper (props) {
  return (
    <Location>
      {locationProps => <Header {...locationProps} {...props} />}
    </Location>
  )
}
