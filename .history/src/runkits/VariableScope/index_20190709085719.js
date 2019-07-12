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
      <script>var notebook = RunKit.createNotebook({
    // the parent element for the new notebook
    element: document.getElementById("my-element"),
    // specify the source of the notebook
    source: "// GeoJSON!\nvar getJSON = require(\"async-get-json\");\n\nawait getJSON(\"https://storage.googleapis.com/maps-devrel/google.json\");"
})</script>
    </>
  )
}
