let startingBalance = 1; // 1 
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5; // 5
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10; 
console.log(totalPayable(chicken, chickenQuantity)); // 45

/*
	This code outputs 40 and 45 for each function call, respectively. This is because the totalPayable
	function references the startingBalance global variable in its body and adds it to the item * quantity
	expression, and returns that result.

	before each call, startingBalance is reassigned. on line 9, it is reassigned to 5 and on line 12
	it is reassigned to 10. This demonstrates scoping rules in javascript, that global variables
	are available inside of any function and can be referenced or reassigned inside.

	it also demonstrates that functions act as closures, as the totalPayable function keeps track
		of the reference startingBalance, then retrieves the value during invocation, demonstrating
		the different results of the different calls.
*/