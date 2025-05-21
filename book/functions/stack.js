function first() {
	console.log('first function');
}

function second() {
	first();
	console.log('second function');
}

second();

// Call Stack: second() gets called on line 10. then first() is called inside the function
// declaration on line 6, which jumps to line 1 then outputs the result of console.log('first function')
// Afterwards, it jumps back to line 7 with console.log('second function').