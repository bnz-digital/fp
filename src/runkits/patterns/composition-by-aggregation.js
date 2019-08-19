const code = `// Person factory
const createPerson = (nameGiven, nameFamily) => ({ nameGiven, nameFamily })

// Employee factory (by aggregation)
const createEmployeeByAggregation = (id, person) => ({
  id,
  person
})

// New Person: Jane
const jane = createPerson('Jane', 'Dobbs')

// Make Jane employee #1
const employee = createEmployeeByAggregation(1, jane)

console.log('employee:', employee)
console.log(\`employee.id: \${employee.id}\`)

// To access the properties of the Person we have to reach into employee.person:
console.log(\`employee.person.nameGiven: \${employee.person.nameGiven}\`)
console.log(\`employee.person.nameFamily: \${employee.person.nameFamily}\`)
console.log(\`employee.person.nickname: \${employee.person.nickname}\`)

console.log(\`Set jane.nickname to 'Mom'\`)
jane.nickname = 'Mom'

// We can see the new nickname property because our Employee
// simply points to the Person object
console.log(\`employee.person.nickname: \${employee.person.nickname}\`)

// We can also extract the Person object from the Employee
console.log('Here is our employee.person:', employee.person)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
