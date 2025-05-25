let a = 'outer';
let b = 'outer';

console.log(a); // outer
console.log(b); // outer

setScope(a); 
console.log(a); // outer
console.log(b); // inner

function setScope(foo) {
	foo = 'inner'; // this is a local variable foo that is distanced from a.
	b = 'inner';
}

// assigment with parameters in JS has no effect on the outer variables.