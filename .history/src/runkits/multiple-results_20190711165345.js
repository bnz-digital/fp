const code = `function getAreaAndCircumferenceFromRadius (radius) {
  const area = Math.PI * radius * radius
  const circumference = Math.PI * radius * 2

  return [area, circumference]
}

const [area, circumference] = getAreaAndCircumferenceFromRadius(1)

console.log(\`The area is \${area}\`)
console.log(\`The circumference is \${circumference}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
