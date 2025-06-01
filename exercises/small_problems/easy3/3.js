// Retire

let age = prompt('What is your age?');
let retirementAge = prompt('At what age would you like to retire?');

let years = retirementAge - age;

const thisYear = new Date().getFullYear();

console.log(`The year is ${thisYear}. You will retire in ${thisYear + years}`);
console.log(`You only have ${years} years left to go!`)