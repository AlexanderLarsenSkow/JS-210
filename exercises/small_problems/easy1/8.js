// Leap 2

/*
	Before 1752: any year evenly divided was a leap year.

	After 1752: any year evenly divided by 4 but not evenly by 100 but 400 is a leap year.

	Before 1752: 
		return year % 4 === 0;

	evenly 400 ?
		return true;

	evenly 100
		return false;

	evenly 100 ?
*/

function isLeapYear(year) {
	if (year < 1752) {
		return year % 4 === 0;
	}
	else if (year % 400 === 0) {
		return true;
	}
	else if (year % 100 === 0) {
		return false;
	} else {
		return year % 4 === 0;
	}
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));       // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true