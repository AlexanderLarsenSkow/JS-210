let myVar = 1;

function myFunc(myVar) {
	myVar = 2; // has no effect on outside variable.
}

myFunc();
console.log(myVar); // 1