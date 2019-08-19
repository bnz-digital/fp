const code = `// Person factory
const createPerson = (nameGiven, nameFamily) => ({ nameGiven, nameFamily })

// Employee factory (by concatenation)
const createEmployee = (id, person) => ({
  id,
  ...person
})

// Our fullName utility function is effectively polymorphic
// It will work with *any* object that has nameGiven and nameFamily properties
const fullName = ({ nameGiven, nameFamily }) => (\`\${nameGiven} \${nameFamily}\`)

// New Person: Marsh
const marsh = createPerson('Marsh', 'Dobbs')

// Make Marsh employee #3
const employee = createEmployee(3, marsh)

// We've copied all the properties into a new object so all are visible
console.log('marsh:', marsh)
console.log(\`fullName(marsh): \${fullName(marsh)}\`)
console.log('employee:', employee)
console.log(\`employee.id: \${employee.id}\`)
console.log(\`fullName(employee): \${fullName(employee)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
