let a = 'outer';

console.log(a); // outer
setScope(); // TypeError: setScope is not a function
console.log(a); // outer

var setScope = function () {
	a = 'inner';
}