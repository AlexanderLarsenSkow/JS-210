console.log(null ?? 'over here!');
console.log(undefined ?? 'pick me!');
console.log(false ?? 'not me')
console.log(0 ?? 'not me either.')

// ?? returns the right side operand if the left side is `null` or `undefined`.
// Short curcuits when the left hand operand is not nullish.

// Example:

function foo(str) {
	let found = ['Pete', 'Ali', 'Chris'].find(name => name === str);
	return found ?? 'Not Found.';
};

console.log(foo('Ali'));
console.log(foo('James'));
