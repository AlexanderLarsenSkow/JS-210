let myVar = 1;

function myFunc(myVar) {
	myVar = 2;
}

myFunc(myVar) // nothing happens, local variable reassignment doesn't affect outer variable
console.log(myVar) // 1 