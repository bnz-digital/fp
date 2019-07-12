const code = `const asc = (a, b) => a - b
const desc = (a, b) => b - a

const getFirstCap = s => s.match(/[A-Z]/).charCodeAt(0)

const firstCapAsc = (a, b) => getFirstCap(a) - getFirstCap(b)
const firstCapDesc = (a, b) => getFirstCap(b) - getFirstCap(a)

console.log('Sort [3, 5, 1] ascending:', [3, 5, 1].sort())
console.log('Sort [3, 5, 1] ascending:', [3, 5, 1].sort(asc))
console.log('Sort [3, 5, 1] descending:', [3, 5, 1].sort(desc))

const strs = ['stRinG', 'nuMber', 'Boolean',  'arraY']

console.log('Sort strings ascending:', strs.sort(firstCapAsc))
console.log('Sort strings descending:', strs.sort(firstCapDesc))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
