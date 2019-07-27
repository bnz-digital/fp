const code = `const add = x => y => x + y

// Now we can partially apply add:
const addTen = add(10)

// And then use it
console.log('addTen(15) is:', addTen(15))

// We can still pass both arguments at once, but as two calls:
console.log('add(10)(5) is:', add(10)(5))

// But we can't use the function normally:
console.log('add(10, 5) is:', add(10, 5))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
