let multiply = (left, right) => left * right;

function getNumber(prompt) {
	return parseFloat(question(prompt));
}

let left = getNumber('Enter the first Number: ');
let right = getNumber('Enter the second number: ')

console.log(`${left} * ${right} = ${multiply(left, right)}`)

// Variables: multiply(), then result in multiply, getNumber, prompt, left, right parameters,
// then left and right in the global scope.

// all function names all parameters all variables.

// multiply: global
// product: local
// left, right: local to multiply()
// getNumber() global
// prompt: local to getNumber()
// ParseFloat(): global
// left, right on 7 and 8: global
// question: global
// console: global

// the left and right variables on 7 and 8 are different from the ones in the declaration.
// The variables in the declaration for multiply() are parameters, and are locally scoped to that
// function whereas left and right on 7 and 8 are globally scoped.