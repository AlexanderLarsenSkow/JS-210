/* Create a start pattern with numbers
	Working with a string here.

	The code runs n times. n is what is passed in.
	The first time, we want to add 1 to the string with a bunch of stars repeated n - (iterationCount)
		iterate again up to the current number. Add each number to the string.
	Do this til you get to the end of the pattern. Only log everything when it is completed.

	inner loop that goes until the end.

	How to account for 1 2 * * * * *?
	1******
	12*****
	123****
	1234***
	12345**
*/

let generatePattern = (number) => {
	for (let count = 1; count <= number; count++) {
		let pattern = '';
		let starCount = number - count;

		for (let i = 1; i <= count; i++) {
			pattern += String(i);
		}
		
		pattern += '*'.repeat(starCount);
		console.log(pattern);
	}
}

generatePattern(11);

// console output
/*
1******
12*****
123****
1234***
12345**
123456*
1234567
*/

generatePattern(3);

/*
	1**
	12*
	123
*/