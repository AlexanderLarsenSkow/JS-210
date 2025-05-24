// test returns true or false based on match

/b/.test('bobcat') // true

// Similar to ruby match? except the method is called on the expression and the string
// is passed in as an argument.

// match returns matching characters. Called on the string of course LOL

console.log('bobcat'.match('x')) // null since there is no match
console.log('bobcat'.match(/[bct]/g)) // ['b', 'b', 'c', 't'] returns array

// because match returns undefined if no match, it is also useful in conditionals.