const code = `const Tuple = Array // Just for fun

function getAreaAndCircumferenceFromRadius (radius) {
  const area = Math.PI * radius * radius
  const circumference = Math.PI * radius * 2

  return new Tuple(area, circumference)
}

const circleProperties = getAreaAndCircumferenceFromRadius(1)
const [area, circumference] = circleProperties // Ordering is important!

console.log(\`The area is \${area}\`)
console.log(\`The circumference is \${circumference}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
