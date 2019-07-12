import React from 'react'
import Embed from 'react-runkit'

export default function VariableScope () {
  return window && window.Runkit ? (
    <Embed source={`console.log('Variable scope!')`} />
  ) : (
    <span>oops</span>
  )
}
