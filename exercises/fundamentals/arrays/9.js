/*
Oddities

input: array argument.
output: new array with every other element from the original array
*/

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6]) === [2, 4, 6]);      // false
console.log(oddities(['abc', 'def']) === ['abc']);         // false

/*
	These will always return false because objects in js only evaluate equality between objects
		with object equality. That is, they must be the exact same object-- or have the same reference.
	These would return true if the array was mutated.
*/