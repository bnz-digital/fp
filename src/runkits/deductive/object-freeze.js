const code = `const obj = { x: 1, inner: { y: 2, z: 3 } }

// We can update properties of obj even though it is a const
obj.x = 5
console.log(\`After obj.x = 5, obj is:\`, obj)

// Object.freeze mutates the object, unfortunately, and
// freezes only one level deep
Object.freeze(obj)

obj.x = 9

// Unfortunately, the above fails silently
console.log(\`After freezing and obj.x = 9, obj is:\`, obj)

// But what happens when I try to set obj.inner.z?
obj.inner.z = 7

// Unfortunately, the above fails silently
console.log(\`Despite freezing and after obj.inner.z = 7, obj is:\`, obj)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
