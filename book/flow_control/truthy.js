function truthy(value) {
	if (value) {
		console.log('How that this be true?');
	}
	else {
		console.log('It is not true!');
	}
}

let a = 5;
let b = 0; // not truthy
let c; // not truthy undefined

truthy(a) // 'How can this be true?'
truthy(b) // 'It is not true!' not truthy in JS
truthy(c) // It is not true!