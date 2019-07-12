const code = `const person = {
  name: 'Bob',
  position: 'Tester'
}

function updateName (person, name) {
  person.name = name
  
  return person
}

console.log(\`updateName(person, 'Bobby') yields \${updateName(person, 'Bobby').name}\`)
console.log(\`Now look what happened to our outer person: \${person.name}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
