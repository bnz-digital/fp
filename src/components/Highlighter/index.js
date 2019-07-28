import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  solarizedDark,
  solarizedLight
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Highlighter ({
  code = '',
  language = 'javascript',
  showLineNumbers = true,
  startingLineNumber = 1,
  theme = 'light',
  warn = () => null
}) {
  return (
    <>
      {warn()}
      <SyntaxHighlighter
        language={language}
        style={theme === 'light' ? solarizedLight : solarizedDark}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
      >
        {code}
      </SyntaxHighlighter>
    </>
  )
}
