const code = `const person = {
  name: 'Bob',
  position: 'Tester'
}

function updateNameCorrectly (person, name) {
  return {
    ...person, // copies all of the key-value pairs in person to a new object
    name // overwrites the name value in the new object
  }
}

console.log(\`updateName(person, 'Bobby') returns person.name of '\${updateNameCorrectly(person, 'Bobby').name}'\`)
console.log(\`Now look what happened to our outer person.name: '\${person.name}'.\`)
console.log(\`No change! Hooray! We're GENIUSES! Big pay rise? No? Rats.\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
