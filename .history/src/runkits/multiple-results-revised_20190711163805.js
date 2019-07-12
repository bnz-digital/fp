const code = `const area = radius => Math.PI * radius * radius
const circumference = radius => Math.PI * radius * 2

function getAreaAndCircumference (radius) {
  // We can also return an object
  return {
    area: area(radius),
    circumference: circumference(radius)
  }
}

const { area, circumference } = getAreaAndCircumference(1)

console.log(\`The area is \${area}\`)
console.log(\`The circumference is \${circumference}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
