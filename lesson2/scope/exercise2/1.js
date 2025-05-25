function say() {
	if(false) {
		var a = 'hello from inside the block';
	}

	console.log(a); // undefined
}

say(); // undefined

// undefined is output a single time when say() is invoked on line 9.
	// That is because the variable a has scope local to the function but its value is never 
	// assigned as the code in the block for the if statement never runs.
	// However, the program recognizes that a has been initialized and has function scope.