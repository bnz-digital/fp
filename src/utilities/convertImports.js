export default function convertImports (str) {
  return str.replace(
    /import (.+) from '(.+)'/g,
    (a, b, c) => `// ${a}\nconst ${b} = require('${c}')`
  )
}
