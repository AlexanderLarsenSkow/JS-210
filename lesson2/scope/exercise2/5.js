var a = 'hello';
var a = 'goodbye';

for (var index = 0; index < 5; index += 1) {
	var a = index; // new local variable a declared with each iteration
 }

console.log(a); // 4
var a = 'just no'
console.log(a);
