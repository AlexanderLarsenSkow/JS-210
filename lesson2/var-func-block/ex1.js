let myVar = 1; // myVar initialized, available to global scope

function myFunc() {
	myVar = 2; // reassigning global variable
}

myFunc(); // reassigning
console.log(myVar) // 2