const code = `const obj = { foo: 'bar' }

// We can update properties of obj even though it is a const
obj.foo = 'baz'
console.log(\`After obj.foo = 'baz', obj is:\`, obj)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
