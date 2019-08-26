const code = `// Person factory
const createPerson = (nameGiven, nameFamily) => ({ nameGiven, nameFamily })

// Employee factory (by delegation)
const createEmployeeByDelegation = (id, person) => Object.assign(
  Object.create(person),
  { id }
)

// New Person: J.R.
const jr = createPerson('J.R.', 'Dobbs')

// Make J.R. employee #2
const employee = createEmployeeByDelegation(2, jr)

// Person properties remain in the Person (jr) and
// are not visible in the Employee object
console.log('employee:', employee)
console.log(\`employee.id: \${employee.id}\`)

// But we can still reference the Person properties
// as if they were part of the Employee object
console.log(\`employee.nameGiven: \${employee.nameGiven}\`)
console.log(\`employee.nameFamily: \${employee.nameFamily}\`)
console.log(\`employee.nickname: \${employee.nickname}\`)

// And when we update the Person, the Employee properties reflect this
console.log(\`Set jr.nickname to 'Bob'\`)
jr.nickname = 'Bob'

console.log(\`employee.nickname: \${employee.nickname}\`)

// Where is the person? In the prototype:
console.log('Object.getPrototypeOf(employee):', Object.getPrototypeOf(employee))
console.log(\`Same person? \${Object.is(Object.getPrototypeOf(employee), jr)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
