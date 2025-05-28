/*
Century

Problem:
	Input: year
	Output: century string

	Rules:
		century should have correct ending:
		A century -1 is + 1 the current year / 100. math.floor


			- end in 1: st
			- end in 2: nd
			- end in 3: rd

			- end in 11, 12, 13: th
			- end in anything else: th

	Examples:
century(2000);        // "20th" // 2000 is still 20th cent
century(2001);        // "21st" 21
century(1965);        // "20th" 
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

// */

function calculateCentury(year) {
	return Math.floor((year - 1) / 100) + 1;
}

function century(year) {
	let centNum = String(calculateCentury(year));
	let lastTwo = centNum.slice(centNum.length - 2);

	if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13') {
		centNum += 'th';
	}
	else if (lastTwo === '1' || lastTwo === '01') {
		centNum += 'st';
	}
	else if (lastTwo === '2' || lastTwo === '02') {
		centNum += 'nd';
	}
	else if (lastTwo === '3' || lastTwo === '03') {
		centNum += 'rd';
	} else {
		centNum += 'th';
	}

	return centNum;
}

console.log(century(2000));        // "20th" // 2000 is still 20th cent
console.log(century(2001));        // "21st" 21
console.log(century(1965));        // "20th" 
console.log(century(256));        // "3rd"
console.log(century(5));        // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"