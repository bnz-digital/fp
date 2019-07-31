const code = `// Object.freeze stupidly mutates in place instead of returning a copy. Doh!
function freezeRecursively (obj) {
  Object.freeze(obj)
  
  Object.getOwnPropertyNames(obj).map(
    prop => {
      if (typeof obj[prop] === 'object') {
        freezeRecursively(obj[prop]) // here the function calls itself
      }
    }
  )
}

// So we will make a copy and freeze that using our above function
function freeze (obj) {
  const out = { ...obj }
  
  freezeRecursively(out)
  
  return out
}

// Allowing us to use it like this
const obj = freeze({
  name: 'Bob',
  nicknames: ['J.R.', 'Dobbs'],
  favourites: {
    colour: 'blue',
    number: 7,
    value: 'slack'
  }
})

obj.name = 'Tom'
console.log(\`obj.name !== 'Tom': Still '\${obj.name}'.\`)

obj.nicknames[2] = 'Bobby'
console.log(\`obj.nicknames does not include 'Bobby': Still '\${obj.nicknames.join(', ')}'.\`)

obj.favourites.colour = 'red'
console.log(\`obj.favourites.colour !== 'red': Still '\${obj.favourites.colour}'. Yay!\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
