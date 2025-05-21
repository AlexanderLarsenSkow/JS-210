function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

let sum = add(10, 20);
console.log(sum);

let difference = subtract(80, 60);
console.log(difference);

function multiply(a, b) {
	return a * b;
}

console.log(multiply(add(10, 20), subtract(80, 50))); // 30 * 30 => 900