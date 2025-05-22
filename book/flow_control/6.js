function bigString(str) {
	if (str.length > 10) {
		return str.toUpperCase();
	}
	else {
		return str;
	}
}

console.log(bigString('Hello'))
console.log(bigString('Hello There Friend!'))

// Ternary Solution

function bigString2(str) {
	return str.length > 10 ? str.toUpperCase() : str;
}

console.log(bigString2('Hello'))
console.log(bigString2('Hello There Friend!'))
