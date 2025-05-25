let myVar = [1];

function myFunc(myVar) {
	myVar[0] = 2;
}

// no argument passed in

myFunc(); // TypeError: can't set properties of undefined.
console.log(myVar); // never runs