let phrase = prompt('Please enter a phrase:')
console.log(phrase)

// removes spaces.

// let noSpaces = phrase.replaceAll(' ', '')
// console.log(`There are ${noSpaces.length} characters in "${phrase}".`)

// only includes alphabetic characters.

let onlyAlphabet = phrase.replaceAll(/[^a-zA-Z]/g, '')

console.log(`There are ${onlyAlphabet.length} characters in "${phrase}".`)
