const code = `// NOT WHAT YOU MIGHT EXPECT

const obj = Object.freeze({
  name: 'Bob',
  nicknames: ['J.R.', 'Dobbs'],
  favourites: {
    colour: 'blue',
    number: 7,
    value: 'slack'
  }
})

obj.name = 'Sam'
console.log(\`Name changed to Sam? Name: '\${obj.name}'. No. Good!\`)

obj.nicknames[2] = 'Bobby'
console.log(\`Append Bobby to the nicknames? Nicknames: '\${obj.nicknames.join(', ')}'. Well, crap.\`)

obj.favourites.colour = 'purple'
console.log(\`Change favourite colour to purple? '\${obj.favourites.colour}'. Sob...\`)`

const imports = ``

const requires = ``

const theme = 'dark'

export default {
  code,
  imports,
  requires,
  theme
}
