const code = `const asc = (a, b) => a - b
const desc = (a, b) => b - a // Reverse the ordering

// String.match returns an array, the first item of which is the string matched
// In this instance, that will be the first uppercase letter
// Then charCodeAt(0) extracts that letter from the string and converts it
// to its character code, between 65 (A) and 90 (Z)
const getFirstCapCharCode = s => s.match(/[A-Z]/)[0].charCodeAt(0)

const firstCapAsc = (a, b) => getFirstCapCharCode(a) - getFirstCapCharCode(b)
const firstCapDesc = (a, b) => getFirstCapCharCode(b) - getFirstCapCharCode(a)

console.log('Sort [3, 5, 1] ascending:', [3, 5, 1].sort()) // Defaults to ascending
console.log('Sort [3, 5, 1] ascending:', [3, 5, 1].sort(asc))
console.log('Sort [3, 5, 1] descending:', [3, 5, 1].sort(desc))

const strs = ['stRinG', 'nuMber', 'Boolean',  'arraY']

// The default string sort will sort uppercase before lowercase
// as it uses the character codes (A-Z is 65-90, a-z is 97-122)
console.log('Default string sort:', strs.sort())
console.log('Sort strings ascending:', strs.sort(firstCapAsc))
console.log('Sort strings descending:', strs.sort(firstCapDesc))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
