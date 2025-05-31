// What is Logged?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges'; // creating new property 3.4
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon'; // creating new property -2
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

/*
	The reason that the length property of the array never changes is because we never add a real 
	element to the array. This requires that we add an element at an established index with a value.
	What is done in this code, however, is the creation of properties: key / value pairs that do
	not affect the length.

	After the array is done adding these properties, there is a property at array['3.4'] and array['-2'],
	which are not calculated into the length. However, these keys are totaled into the length of
	the keys, which is calculated with Object.keys(). This value continues to increment.

	This demonstrates the tension in JS where arrays are objects and also arrays. Properties (key value)
	pairings can be added but they are not treated as real elements, as seen by the length property.

*/