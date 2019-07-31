const code = `const { otherwise, pick, pipe, then } = require('ramda')

const makeQuery = email => ({ query: email })
const useDefault = () => ({
  nameGiven: 'Aleister',
  nameFamily: 'Crowley',
  email: 'aleister@goldendawn.com'
})

// Use setTimeout to simulate an asynchronous process
const fetchProfile = options => new Promise((resolve, reject) => {
  options.query === 'bob@slack.com'
    ? setTimeout(() => resolve({
        nameGiven: 'Bob',
        nameFamily: 'Dobbs',
        email: 'bob@slack.com'
      }), 3000)
    : setTimeout(() => reject({
        error: 'Bad email address'
      }), 6000)
})

// Returns a promise
const getProfleFromEmail = pipe(
  makeQuery,                               // convert email to query
  fetchProfile,                            // use query to fetch profile
  otherwise(useDefault),                   // default profile if fetch fails
  then(pick(['nameGiven', 'nameFamily']))  // extract just the names from the profile
)

// The first of these fails and gets the default profile
// The second passes and retrieves the profile for bob@slack.com
// Note the delay and the order of output
console.log('Wait for it!')
getProfleFromEmail('joe@chicago.com').then(console.log) // resolves in 6 seconds
getProfleFromEmail('bob@slack.com').then(console.log)   // resolves in 3 seconds
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
