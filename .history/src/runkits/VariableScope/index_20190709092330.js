import React from 'react'

const code = `const nums = [1, 4, 9, 16, 25]; map(Math.sqrt, nums)`

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
      <div id='runkit' data-preamble='const { map } = require("ramda")'>
        {code}
      </div>
    </>
  )
}
