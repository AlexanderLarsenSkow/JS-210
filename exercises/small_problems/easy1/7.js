// Leap Years

/*
	Leap years occur every year that the year is divisible by 4,
		unless the year is also divisible by 100.

		Leap years also occur whenever a year is evenly divisible by 400.	

		Leap Years occur:
			evenly with 4
			evenly with 400
		
		NOT with 100, unless is 400.
*/

function isLeapYear(year) {
	if (year % 100 === 0 && year % 400 !== 0) {
		return false;
	}
	else if (year % 4 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(	isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));       // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true