const code = `// DON'T DO THIS!
class Person {
  constructor(nameGiven, nameFamily) {
    this.nameGiven = nameGiven
    this.nameFamily = nameFamily
  }

  get fullName () {
    return \`\${this.nameGiven} \${this.nameFamily}\`
  }
}

class Employee extends Person {
  constructor(nameGiven, nameFamily, id) {
    super(nameGiven, nameFamily)
    
    this.id = id
  }
  
  toString () {
    return \`My name is \${this.fullName} and my employee ID is \${this.id}.\`
  }
}

const employee = new Employee('Lucy', 'Fur', 666)

// Note that \`fullName\` works even though it is in Person, not Employee
console.log(\`employee.fullName: \${employee.fullName}\`)
console.log(\`employee.toString(): \${employee.toString()}\`)
console.log('employee:', employee)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
