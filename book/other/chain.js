let str = 'Pete Hanson';
let names = str.toUpperCase().split(' ').reverse();

console.log(names); // Each method call is placed on the return value of the previous method.

// Another Way to write it!

// let str = 'Pete Hanson';
// let names = str.toUpperCase()
//   .split(' ')
//   .reverse()
//   .join(', ');
// console.log(names);

// Optional Chaining:
	// guard clause at the start of the chain.

	function reverseWords(sentence) {
		return sentence?.split(' ')
			.reverse()
			.join(' ');
	}

	console.log(reverseWords('I have a cake!')) // 
	console.log(reverseWords(null)) // undefined, no TypeError raised.

// optional chaining with the `?` on `sentence` returns `undefined` if it's null or undefined