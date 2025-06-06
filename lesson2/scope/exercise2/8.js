var a = 'global';

function checkScope() {
	var a = 'local';

	const nested = function() {
		var a = 'nested';

		let superNested = () => {
			a = 'superNested';
			return a;
		}
		return superNested();
	}

	console.log(a) // local
	return nested();
}

console.log(checkScope()); // superNested
console.log(a); // global