rlSync = require('readline-sync')
let firstName = rlSync.question("What is your first name? ")
let lastName = rlSync.question(`What is your last name, ${firstName}? `)

console.log(`Hello ${firstName} ${lastName}!`)