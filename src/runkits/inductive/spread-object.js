const code = `// The spread syntax works with objects as well:
const rgb = {
  red: 'f00',
  green: '0f0',
  blue: '00f'
}
const cmyk = {
  cyan: '0ff',
  magenta: 'f0f',
  yellow: 'ff0',
  black: '000'
}

// No overlap here
console.log(\`{ ...rgb, ...cmyk } is\`, { ...rgb, ...cmyk })

// We can overwrite individual values
console.log(\`{ ...cmyk, cyan: '0FF', yellow:  'FF0' }\`, { ...cmyk, cyan: '0FF', yellow:  'FF0' })

// Ordering is important!
console.log(\`{ cyan: '0FF', ...cmyk, yellow:  'FF0' }\`, { cyan: '0FF', ...cmyk, yellow:  'FF0' })

// We're making copies!
console.log(\`rgb is not changed:\`, rgb)
console.log(\`cmyk is not changed:\`, cmyk)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
