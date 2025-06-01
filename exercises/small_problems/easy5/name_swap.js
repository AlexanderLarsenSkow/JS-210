/*
	input: string with two names
	output: string with names switched

	return last name first, comma, first name

	swapName('Joe Roberts');    // "Roberts, Joe"


*/

function swapName(name) {
	name = name.split(' ')
	return `${name[1]}, ${name[0]}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// More than one name?

function swapName2(name) {
	return name.split(' ').reverse().join(', ');
}

console.log(swapName2('Joe Lincoln Roberts')) // "Roberts, Lincoln, Joe"

function swap3(...names) {
	let all = '';
	names.forEach(name =>
		all += name.split(' ').reverse().join(', ')
	)

	return all;
}

console.log(swap3('Joe Roberts', 'Jake Solomon'))