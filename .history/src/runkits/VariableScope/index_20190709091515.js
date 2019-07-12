import React from 'react'

const code = `const R = require('ramda')\\n\\nconst nums = [1, 2, 3, 4, 5]\\n\\nR.map(Math.sqrt, nums)`

const script = `const notebook = RunKit.createNotebook({
  element: document.getElementById('runkit'),
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
      <div id='runkit' />
      <div>{script}</div>
    </>
  )
}
