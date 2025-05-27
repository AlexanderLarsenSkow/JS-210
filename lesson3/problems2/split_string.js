// String Splitter

/*
	Write a function that takes two argument:
		string to be split
		delimiter.

		logs the split parts into the console.

		Can use length and bracket notation to figure it out.

		log an error if no delimiter (second arg) is passed in.

		// Problem:

			empty string splits into characters.
			The split does not include the delimiter.

				Edge Cases:
					'' empty string: split into characters and log each character.
					no delimiter: error.


		// Examples:

			comma delimiter, we split at the comma. Create a new string whenever we see the delimiter.
			splitString('abc,123,hello world', ','); 
// logs:
// abc
// 123
// hello world

	log an error when there's no delimiter present.
splitString('hello');
// logs:
// ERROR: No delimiter

	empty string means we split into characters.
splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

	doesn't find delimiter, just puts in the new string
splitString('hello', ';');
// logs:
// hello

	finds the delimiter and creates a string for each one until it comes across the delimiter.
splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

Data Structures:
	if no delimiter given, log an error and return.
	if the delimiter is an empty string, split by characters. log each character in a helper.
	return

	elswise, create a new string.
		when you reach a delimiter, log the string and reassign the string to an empty string again.
		don't add any delimiters. Only add if it isn't a delimiter.
	iterate through the string with for
*/

function splitString(string, delimiter) {
	if (delimiter === undefined) {
		console.log('ERROR: No delimiter');
		return;
	}
	else if (delimiter === '') {
		displayChars(string);
		return;
	}

	createSplit(string, delimiter);
}

function createSplit(string, delimiter) {
	let splitter = '';

	for (let index = 0; index < string.length; index++) {
		if (string[index] === delimiter) {
			console.log(splitter);
			splitter = '';
		} else {
			splitter += string[index];
		}
	}

	if(string[string.length - 1] !== delimiter) {
		console.log(splitter);
	}
}

function displayChars(string) {
	for (let i = 0; i < string.length; i++) {
		console.log(string[i]);
	}
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello