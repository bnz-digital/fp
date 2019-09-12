import React from 'react'
import styled from 'styled-components'

import { FiExternalLink } from 'react-icons/fi'

const Link = styled.span`
  .react-icon {
    color: LightSlateGray;
    display: inline-block;
    padding-left: 0.3rem;
    vertical-align: text-top;
  }
`

export default function OffsiteLink ({ children, href }) {
  return (
    <Link>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Offsite link: opens in new window'
        className='offsite-link'
        title='Offsite link: opens in a new window'
      >
        {children}
      </a>
      <FiExternalLink className='react-icon' size='1.3rem' />
    </Link>
  )
}
