const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dateSuffix(date) {
	let day = String(date);
	let lastDigit = day[day.length - 1];
	let suffix;

	if (day === '11' || day === '12' || day === '13') {
		suffix = 'th';
	}
	else if (lastDigit === '1') {
		suffix = 'st';
	}
	else if (lastDigit === '2') {
		suffix = 'nd';
	}
	else if (lastDigit === '3') {
		suffix = 'rd';
	}
	else {
		suffix = 'th';
	}

	return `${day}${suffix}`;
}

let today = new Date()

// let dayNumber = today.getDay();
// let dayName = daysOfWeek[dayNumber];
let dateNumber = dateSuffix(today.getDate())
// let month = months[today.getMonth()];

function formattedMonth(today) {
	return months[today.getMonth()];
}

function formattedDay(today) {
	let dayNumber = today.getDay();
	let dayName = daysOfWeek[dayNumber];

	return `${dayName},`
}

function formattedDate(today) {
	let date = dateSuffix(today.getDate());
	let month = formattedMonth(today);
	let day = formattedDay(today);

	return `Today is ${day} ${month} the ${date}!`
}

console.log(formattedDate(today));

let dayVal = today.getTime();

let tomorrow = new Date(dayVal);
console.log(tomorrow);

tomorrow.setDate(31);
console.log(tomorrow)
console.log(formattedDate(tomorrow));

let nextWeek = new Date(today.getTime());
console.log(nextWeek === today) // false

function datesEqual(date1, date2) {
	return date1.getDay() === date2.getDay() && 
	date1.getMonth() === date2.getMonth() &&
	date1.getFullYear() === date2.getFullYear();
}

console.log(datesEqual(today, nextWeek)); // true

nextWeek.setDate(today.getDate() + 7);
console.log(nextWeek);

// getHours
// getMinutes

function formatTime(date) {
	let hours = String(date.getHours());
	let minutes = String(date.getMinutes());

	hours = hours.length === 1 ? '0' + hours : hours;
	minutes = minutes.length === 1 ? '0' + minutes : minutes;

	return `${hours}:${minutes}`
}

console.log(formatTime(today));

let newDate = new Date('1970')
console.log(formatTime(newDate))