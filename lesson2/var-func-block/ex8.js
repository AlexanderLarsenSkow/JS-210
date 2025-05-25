let myVar = [1];

function myFunc(myVar) {
	myVar = [2];
}

myFunc(myVar) // reassignment doesn't affect outer var
console.log(myVar) // [1]