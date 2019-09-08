const code = `import { curry } from 'ramda'

const fetchData = curry((method, url, data) => {
  console.log(\`Sending a \${method} request to \${url} with query \${data}.\`)
})

const postRequest = fetchData('POST')
const postUser = postRequest('/users')
const postPet = postRequest('/pets')

postUser(JSON.stringify({ nameGiven: 'Bob', nameFamily: 'Dobbs' }))
postUser(JSON.stringify({ nameGiven: 'Bob', nameFamily: 'Dole' }))

postPet(JSON.stringify({ name: 'Bob', species: 'dog' }))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
