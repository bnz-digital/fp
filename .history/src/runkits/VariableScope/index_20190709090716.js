import React from 'react'

const code = `const R = require('ramda');\nconst nums = [1, 2, 3, 4, 5];\nR.map(Math.sqrt, nums);`

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
      <div id='grizmo' />
      <script>
        const notebook = RunKit.createNotebook(
        {`{
          element: document.getElementById("grizmo"),
          source: "${code}"
        }`}
        )
      </script>
    </>
  )
}
