const code = `const person = {
  name: 'Bob',
  position: 'Tester'
}

function updateName (person, name) {
  person.name = name
  
  return person
}

console.log(\`updateName(person, 'Bobby') yields \${JSON.stringify(updateName(person, 'Bobby'))}\`)
console.log(\`Now look what happened to our outer person: \${JSON.stringify(person)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
