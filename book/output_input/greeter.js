rlSync = require('readline-sync')


let firstName = () => rlSync.question("What is your first name? ")
let name = firstName();

let lastName = () => rlSync.question(`What is your last name, ${name}? `)

console.log(`Hello ${name} ${lastName()}!`)