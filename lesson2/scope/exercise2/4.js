function hello() {
	a = 'hello';
	console.log(a);

	if (false) {
		let a = 'hello again' // never initialized since this code never runs, only available to block.
	}
}

hello(); // hello
console.log(a); // hello, since a is a global variable