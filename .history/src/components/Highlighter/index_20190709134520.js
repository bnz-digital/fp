import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('javascript', js)

export default function Highlighter ({ code = '', preamble = '' }) {
  return <SyntaxHighlighter style={dark}>{preamble + code}</SyntaxHighlighter>
}
