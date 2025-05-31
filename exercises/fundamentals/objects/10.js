// After Midnight Part 2

/*
	input: hours / minutes string.
	output: should return an integer between 0 and 1439.

	// Examples:

	after midnight, before midnight.

	afterMidnight('00:00');       // 0
	beforeMidnight('00:00');      // 0
	afterMidnight('12:34');       // 754
	beforeMidnight('12:34');      // 686

	// 2 * 30 

	// Algorithm:
		split the string into two parts: hours and minutes.
		parse both minutes and hours into integers.
		
		after midnight:
			- set the hours on the date to the hours integer.
			- set the minutes to the minutes integer.
			- return the minutes per hour * hours + minutes.

		before midnight:
			- do teh same thing but put the values in as negatives.
	
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function parseTimeStamp(timeStamp) {
	let time = timeStamp.split(':');
	return time.map(stamp => parseInt(stamp));
}

function afterMidnight(timeStamp) {
	const [hours, minutes] = parseTimeStamp(timeStamp);

	let date = new Date('January 1, 2025 00:00:00');
	date.setMinutes(minutes);
	date.setHours(hours);

	return date.getHours() * MINUTES_PER_HOUR + date.getMinutes();
}

function beforeMidnight(timeStamp) {
	let [hours, minutes] = parseTimeStamp(timeStamp);

	let date = new Date('January 1, 2025 00:00:00');
	date.setMinutes(minutes);

	if (hours >= HOURS_PER_DAY) {
		hours %= HOURS_PER_DAY;
	}

	let negHours = hours * MINUTES_PER_HOUR;
	return negHours - date.getMinutes();
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
console.log(beforeMidnight('15:59')); // 841
console.log(beforeMidnight('24:00')); // 0
console.log(beforeMidnight('48:00')); // 0