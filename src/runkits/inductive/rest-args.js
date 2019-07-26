const code = `// The rest syntax can collect arguments to a function
// Note that it must always be the last destructured variable

function oneAttaTime (x, ...xs) {
  console.log('The value of x is', x)
  console.log('The value of xs is', xs)
}

oneAttaTime('first', 'second', 'third')`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
