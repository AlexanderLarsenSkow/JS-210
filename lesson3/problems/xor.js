/*
	XOR
	&& - both must be truthy. or it's false.
	|| one or both can be truthy.

	XOR - Exactly one MUST be truthy.
		conditions:
		if both are true, return false.
		if neither are true, return false
		if one is true, return true.

	algo:
		if one is true and one is false
*/

const isXor = (side1, side2) => { 
	return (!!side1 && !side2) || (!side1 && !!side2);
}

console.log(isXor(false, true) === true);     // true
console.log(isXor(true, false) === true);     // true
console.log(isXor(false, false) === false);    // false
console.log(isXor(true, true) === false);      // false
console.log(isXor(false, 3)) === true;        // true
console.log(isXor('a', undefined) === true);  // true
console.log(isXor(null, '') === false);        // false
console.log(isXor('2', 23) === false);         // false