import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Highlighter ({ code = '', preamble = '' }) {
  return (
    <SyntaxHighlighter language='javascript' style={dark}>
      {preamble + code}
    </SyntaxHighlighter>
  )
}
