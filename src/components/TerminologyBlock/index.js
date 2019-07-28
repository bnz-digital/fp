import React, { useState } from 'react'

export default function TerminologyBlock ({ children }) {
  const [open, setState] = useState(false)

  const toggleState = () => (open ? setState(false) : setState(true))

  return (
    <>
      <p>
        <a onClick={toggleState} style={{ cursor: 'pointer' }}>
          <strong>{open ? 'Hide ' : 'Show '} Evil Terminology</strong>
        </a>
      </p>
      {open && <blockquote>{children}</blockquote>}
    </>
  )
}
