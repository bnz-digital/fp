const code = `const person = {
  name: 'Bob',
  position: 'Tester'
}

function updateName (person, name) {
  person.name = name
  
  return person
}

console.log(\`\\\`updateName(person, 'Bobby')\\\` returns \\\`person.name\\\` of '\${updateName(person, 'Bobby').name}'\`)
console.log(\`Now our outer \\\`person.name\\\` is... wait for it... '\${person.name}'.\`)
console.log(\`That's just not right.\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
