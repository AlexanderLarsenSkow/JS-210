// mutation

let myVar = [1];

function myFunc(myVar) {
	myVar[0] = 2; // mutating action
}

myFunc(myVar)
console.log(myVar) // [2]