const code = `const calculateArea = radius => Math.PI * radius * radius
const calculateCircumference = radius => Math.PI * radius * 2

function getAreaAndCircumferenceFromRadius (radius) {
  // We can also return an object
  return {
    area: calculateArea(radius),
    circumference: calculateCircumference(radius)
  }
}

const { area, circumference } = getAreaAndCircumferenceFromRadius(1)

console.log(\`The area is \${area}\`)
console.log(\`The circumference is \${circumference}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
