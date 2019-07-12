import React from 'react'

const code = `const R = require('ramda')\\n\\nconst nums = [1, 2, 3, 4, 5]\\n\\nR.map(Math.sqrt, nums)`

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
      <div id='grizmo'>hi</div>
      <script>{script}</script>
    </>
  )
}
