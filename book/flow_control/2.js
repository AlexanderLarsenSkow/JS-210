function evenOrOdd(number) {
	if (!Number.isInteger(number)) {
		console.log('Please enter an integer.');
		return;
	}

	switch(number % 2) {
		case 0:
			console.log(`${number} is even!`);
			break;
		default:
			console.log(`${number} is odd! Kill it with fire!`)
			break;
	}
}

evenOrOdd(2);
evenOrOdd(9);
evenOrOdd(10)
evenOrOdd(1.5)