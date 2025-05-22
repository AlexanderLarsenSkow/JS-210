let counter = 0;

while (counter <= 1) {
	console.log(counter);
	counter ++;

	if (counter > 2) {
		break;
	}
}

// The original code broke because of the use the assignment operator `=` in the `counter = 1` 
// expression. This is a critical failure that reassigns `counter` to `1` every iteration,
// creating an infinite loop.