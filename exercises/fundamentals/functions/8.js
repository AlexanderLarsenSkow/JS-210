let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7; // reassignment addition and mutation of the array
}

myValue(a); // mutates the array in place
console.log(a); // [1, 2, 10]

/*
	This is an example of pass by reference and mutation in JS. Unlike the previous examples, this
	code snippet involves passing an array into a mutating function. Here, global variable `a` references
	an array `[1, 2, 3]`, which is then passed into the myValue() function on line 7. Because arrays
	are objects and not primitive values, in this case the exact reference is used inside the function
	body.

	So, when the code `b[2] += 7` is executed, the element at index 2 is reassigned, mutating the array
	from `[1, 2, 3]` to `[1, 2, 10]`. That is the result of outputting the array on line 8.

	This demonstrates the different passing strategies in JavaScript: sometimes pass by value (always
	for primitive values and sometimes for objects) and often pass by reference for objects.
*/