const code = `// Arrow  don't hoist!
try {
  doIt()
} catch (e) {
  console.log(e)
}

try {
  doItRight()
} catch (e) {
  console.log(e)
}

const doIt = () => console.log('do it')
function doItRight () {
  console.log('do it right')
}`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
