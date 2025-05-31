/* After Midnight Part 1 
	Reimplement the minutes after midnight function using the date object in JS

	input: number of minutes in an integer (positive or negative)
	output: time of day in 24 hour format : "hh:mm"

Examples:

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"
// 

Algo:
	create a date for right now. Add the number of minutes to it.
		return the new dates hour and minute.
*/

function formatTime(date) {
	let hours = String(date.getHours());
	let minutes = String(date.getMinutes());

	hours = hours.length < 2 ? '0' + hours: hours;
	minutes = minutes.length < 2 ? '0' + minutes: minutes;

	return `${hours}:${minutes}`;
}

function timeOfDay(minutes) {
	let date = new Date('January 01-01');
	date.setMinutes(minutes);

	return formatTime(date);
}

console.log(	timeOfDay(0))        // "00:00"
console.log(timeOfDay(-3));       // "23:57"
console.log(timeOfDay(35));       // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));       // "13:20"
console.log(timeOfDay(-4231));      // "01:29"