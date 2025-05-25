let a = 'hello';

for (let index = 0; index < 5; index++) {
	let a = index; // new local variable declared, shadowing, not available globally
} 

console.log(a) // hello