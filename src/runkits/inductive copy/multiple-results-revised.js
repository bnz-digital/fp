const code = `const calculateArea = radius => Math.PI * radius * radius
const calculateCircumference = radius => Math.PI * radius * 2

function getAreaAndCircumferenceFromRadius (radius) {
  // We could return an object instead
  return {
    circumference: calculateCircumference(radius),
    area: calculateArea(radius)
  }
}

// When destructuring an object, the order is unimportant
// but you must use the key for your variable name
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
