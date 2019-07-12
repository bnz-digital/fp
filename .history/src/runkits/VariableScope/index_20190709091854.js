import React from 'react'

const code = `const R = require('ramda'); const nums = [1, 2, 3, 4, 5]; R.map(Math.sqrt, nums)`

const script = `let notebook = RunKit.createNotebook({
  element: document.getElementById('grizmo'),
  source: "${code}"
})`

export default function VariableScope () {
  // return (
  //   <div
  //     style={{ fontFamily: '"Courier New", monospace', whiteSpace: 'pre' }}
  //     id='runkit'
  //   >
  //     {code}
  //   </div>
  // )

  return (
    <>
      <div id='grizmo'>{code}</div>
      <script>{script}</script>
    </>
  )
}
