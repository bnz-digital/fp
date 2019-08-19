const code = `// Person factory
const createPerson = (nameGiven, nameFamily) => ({ nameGiven, nameFamily })

// Employee factory (by concatenation)
const createEmployeeByConcatenation = (id, person) => ({
  id,
  ...person
})

// New Person: Marsh
const marsh = createPerson('Marsh', 'Dobbs')

// Make Marsh employee #3
const employee = createEmployeeByConcatenation(3, marsh)

// We've copied all the properties into a new object so all are visible
console.log('employee:', employee)
console.log(\`employee.id: \${employee.id}\`)
console.log(\`employee.nameGiven: \${employee.nameGiven}\`)
console.log(\`employee.nameFamily: \${employee.nameFamily}\`)
console.log(\`employee.nickname: \${employee.nickname}\`)

// However, we are no longer connected to our Person (marsh)
// so when we update \`marsh\`, we do not update \`employee\`
console.log(\`Set marsh.nickname to 'Connie'\`)
marsh.nickname = 'Connie'

// That said, if we are maintaining immutability, then we will
// never update the Person, so this won't matter
console.log(\`employee.nickname: \${employee.nickname}\`, '')`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
