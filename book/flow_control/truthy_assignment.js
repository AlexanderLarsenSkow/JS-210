let foo = null;
let bar = 'joe'

let a = foo || bar;

console.log(a) // 'joe'
// Because of short curcuit execution, assigns a to referene the truthy value referenced by bar.

// A better way:

let b;
if (foo || bar) {
	b = true;
}
else {
	b = false;
}

console.log(b) // true

// ternary expression:

let c = (foo || bar) ? true : false;

console.log(c) // true

// !!

let d = !!(foo || bar)

console.log(d) // true