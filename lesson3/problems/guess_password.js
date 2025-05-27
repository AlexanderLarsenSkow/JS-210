function guessPassword() {
	const password = 'ninja';

	for (let guesses = 0; guesses < 3; guesses++) {
		let guess = prompt('What is the password?');

		if (guess === password) {
			console.log('Congratulations! You have successfully logged in.')
			return;
		}	else {
			console.log('That is the wrong password.')
		}
	}

	console.log('You have been denied access, peasant.')
}

guessPassword();