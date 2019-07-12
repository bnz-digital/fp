import React from 'react'

const code = `const R = require('ramda')

const nums = [1, 2, 3, 4, 5]

R.map(Math.sqrt, nums)`

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
      <div id='runkit'></div>
      <script>
        const notebook = RunKit.createNotebook(`{
          element: document.getElementById("my-element"),
          source: ${code}
        }`)
      </script>
    </>
  )
}
