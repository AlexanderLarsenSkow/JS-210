/*
	Write a program to determine a student's grade based on the average of 3 scores given by 
		the user.

		Scores: 90 ^ : 'A'
		80 ^: 'B'
		50 to 70 ^: 'C'
		below 50: 'F'

		prompt for all 3 scores, compute average (all 3 divided by 3)
		logical flow for determinations.
		make sure to convert all strings to numbers.
*/

function determineGrade(average) {
	let grade = '';

	if (average >= 90) {
		grade = 'A';
	}
	else if (average >= 80) {
		grade = 'B';
	}
	else if (average >= 50) {
		grade = 'C';
	} else {
		grade = 'F';
	}

	console.log(`Based on these results, your computed score is a ${grade}!`)
}

function studentGrade() {
	let grade1 = Number(prompt('What was your first score?'));
	let grade2 = Number(prompt('What was your second score?'));
	let grade3 = Number(prompt('What was your third score?'))

	const average = Math.floor((grade1 + grade2 + grade3) / 3);
	console.log(`Your grade average is ${average}!`)
	determineGrade(average);
}

studentGrade();