	// Tip Calculator.

	// prompt for bill and tip percentage.

	let bill = Number(prompt('What is the bill?'));
	console.log(bill);

	let tipPercentage = Number(prompt('What is the tip percentage?'));
	console.log(tipPercentage);

	function calculateTip(bill, percent) {
		return (percent / 100) * bill;
	}

	const tip = calculateTip(bill, tipPercentage);

	console.log(`The tip is $${tip.toFixed(2)}`);
	console.log(`The total is $${(bill + tip).toFixed(2)}`);