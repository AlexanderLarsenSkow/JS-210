// Pass by Reference / Pass by Value also applies to return values.

function foo(number) {
	return number;
}

let number = 1;
let newNumber = foo(number);

console.log(number); // 1
console.log(newNumber); // 1

number = 3;
console.log(number); // 3
console.log(newNumber); // 1

// no mutation, not possible.

// Array Example

function bar(array) {
	return array;
}

let array = [1, 2, 3];
let newArray = bar(array);
console.log(array === newArray); // true, they are the same object.

array.push(4);
console.log(array); // [1, 2, 3, 4]
console.log(newArray); // [1, 2, 3, 4]

// The variables point to the same object, thus the mutation affects both.