/*	
	Write a function that logs the integers from 1 to 100 (inclusive) that are either multiples of 3
		or 5. If the number is divisble by 3 AND 5, append a ! to it.

	log it as a string.

	if multiple of 3 or 5, log it. convert

	if multiple of 3 and 5, log it with ! convert

	algo:
		for loop, starting at 3. continue until you hit 100. Add 1 each time.

*/
function multiplesOfThreeAndFive() {
	for (let count = 3; count <= 100; count++) {
		if (count % 3 === 0 && count % 5 === 0) {
			console.log(`"${count}!"`);
		} 
		else if (count % 3 === 0 || count % 5 === 0) {
			console.log(`"${count}"`);
		}
	}
}

// multiplesOfThreeAndFive();

// range of numbers

function multiplesWithRange(start, end) {
	for (let count = start; count <= end; count++) {
		if (count % 3 === 0 && count % 5 === 0) {
			console.log(`"${count}!"`);
		} 
		else if (count % 3 === 0 || count % 5 === 0) {
			console.log(`"${count}"`);
		}	
	}
}

multiplesWithRange(3, 30);