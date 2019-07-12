import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import Prism from 'prismjs/components/prism-core'
import React from 'react'

export default function Highlighter ({ preamble, code }) {
  return (
    <Highlight
      Prism={Prism}
      theme={defaultProps.theme}
      code={preamble + code}
      language='jsx'
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
