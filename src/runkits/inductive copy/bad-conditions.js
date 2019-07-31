const code = `// DO NOT DO THIS!
function getColourTheBadWay (a, b) {
  let colour

  if (a && b) {
    colour = 'red'
  } else if (a) {
    colour = 'yellow'
  } else if (b) {
    colour = 'orange'
  } else {
    colour = 'black'
  }

  return colour
}

console.log(\`getColourTheBadWay(true, true) is \${getColourTheBadWay(true, true)}\`)
console.log(\`getColourTheBadWay(true, false) is \${getColourTheBadWay(true, false)}\`)
console.log(\`getColourTheBadWay(false, true) is \${getColourTheBadWay(false, true)}\`)
console.log(\`getColourTheBadWay(false, false) is \${getColourTheBadWay(false, false)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
