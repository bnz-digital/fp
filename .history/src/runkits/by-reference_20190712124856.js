const code = `const person = {
  name: 'Bob',
  position: 'Tester'
}

function updateName (person, name) {
  person.name = name
  
  return person
}

console.log(\`updateName(person, 'Bobby') yields \${updateName(person, 'Bobby')}\`)
console.log(\`Now look what happened to our outer person: \${person}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
