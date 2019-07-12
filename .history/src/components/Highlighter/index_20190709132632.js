import Highlight from 'prism-react-renderer'
import Prism from 'prismjs/components/prism-core'
import React from 'react'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`

export default function Highlighter () {
  console.log(
    'defaultProps',
    JSON.stringify(Object.keys(defaultProps), null, 2)
  )
  return (
    <Highlight Prism={Prism} code={exampleCode} language='jsx'>
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
