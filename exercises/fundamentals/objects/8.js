/* The End is Near but Not Here
	
	This code doesn't work properly because it is trying to take the element at the -2 index,
		which does not exist in js arrays. This would have to be added as an object property to retrieve
		a value other than undefined.
*/

function penultimate(string) {
	let array = string.split(' ');
	let secondToLast = array.length - 2;
	
  return array[secondToLast];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"