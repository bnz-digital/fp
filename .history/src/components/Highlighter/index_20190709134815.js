import React from 'react'
import js from 'react-syntax-highlighter/dist/esm/languages/prism/js'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter/prism-light'

SyntaxHighlighter.registerLanguage('javascript', js)

export default function Highlighter ({ code = '', preamble = '' }) {
  return <SyntaxHighlighter>{preamble + code}</SyntaxHighlighter>
}
