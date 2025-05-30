// the arguments array was the old way of handling infinite arguments.

// Now, you can use rest parameters.

// This function takes any number of number arguments and adds them together, summing them.

function sum(...numbers) {
	return numbers.reduce((total, number) => total + number, 0);
}

// rest paramters take the arguments at that position and place them at the end.
// They should always be used as the last parameter in the function.

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(100, 200, 300)); // 600
console.log(sum(0, 0, 0, 0, 1, 0, 0)); //1
console.log(sum(10, 2)); // 12
console.log(sum(1000, 1, 3)); // 1004