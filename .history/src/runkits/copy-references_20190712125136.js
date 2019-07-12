const code = `const person = {
  name: 'Bob',
  position: 'Tester'
}

function updateName (person, name) {
  person.name = name
  
  return person
}

console.log(\`updateName(person, 'Bobby') returns person.name of \${updateName(person, 'Bobby').name}\`)
console.log(\`Now look what happened to our outer person.name: \${person.name}. Not good.\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
