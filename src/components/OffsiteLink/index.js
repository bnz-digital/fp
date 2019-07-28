import React from 'react'

export default function OffsiteLink ({ children, href }) {
  return (
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
  )
}
