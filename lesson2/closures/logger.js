function makeLogger(identifier) {
	return function(message) {
		console.log(identifier, message);
	}
}

systemError = makeLogger('SystemError: ');
systemError('That action is not available.')