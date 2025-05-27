/*
	Write a function that iterates over integers from 1 to 100.
		for multiples of 3, log "Fizz"
		for multiples of 5, log "Buzz"
		for multiples of both, log "FizzBuzz"
		for all other numbers, log the number.
*/

function fizzbuzz() {
	for (let count = 1; count <= 100; count++) {
		let message = count;

		if (count % 3 === 0 && count % 5 === 0) {
			message = 'FizzBuzz'
		}
		else if (count % 3 === 0) {
			message = 'Fizz';
		}
		else if (count % 5 === 0) {
			message = 'Buzz';
		}
		
		console.log(message);
	}
}

// fizzbuzz();

let tripBuzz = () => {
	for (let count = 1; count <= 100; count++) {
		let message = '';

		if (count % 3 === 0) {
			message += 'Fizz';
		}
		else if (count % 5 === 0) {
			message += 'Buzz';
		}

		console.log(message || count);
	}
}

tripBuzz();