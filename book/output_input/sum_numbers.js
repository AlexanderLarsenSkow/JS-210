let rlSync = require('readline-sync');

let number1 = rlSync.question("Enter the first number.\n")
let number2 = rlSync.question("Enter the second number.\n")

let sum = Number(number1) + Number(number2)

console.log(`The sum of ${number1} and ${number2} is ${sum}.`)
