let a = 'outer';

function testScope() {
	a = 'inner';
	console.log(a);
}

// reassigning a inside the function body. Still available in the global scope.

console.log(a); // outer
testScope(); // inner
console.log(a); // inner