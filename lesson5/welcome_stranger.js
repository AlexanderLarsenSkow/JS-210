/*
	input: array and object.
	output: display name of person with job and title from object.

*/

function greetings(names, jobInfo) {
	const fullName = names.join(' ');
	const title = jobInfo['title'];
	const job = jobInfo['occupation'];

	console.log(`Hello, ${fullName}! Nice to have a ${title} ${job} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.