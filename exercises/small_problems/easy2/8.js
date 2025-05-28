/*
Grade Book

	input: 3 integers representing scores
	output: letter string that is letter grade.

	90 - 100 A
	80 - 90 B
	70 - 80 C
	60 - 70 D
	< 60 F
*/

function getGrade(grade1, grade2, grade3) {
	const average = Math.floor((grade1 + grade2 + grade3) / 3);
	if (average >= 90) {
		return 'A';
	}
	else if (average >= 80) {
		return 'B';
	}
	else if (average >= 70) {
		return 'C';
	}
	else if (average >= 60) {
		return 'D';
	} else {
		return 'F';
	}
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(40, 30, 40)) // 'F'