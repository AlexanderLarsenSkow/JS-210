// Does this average function return five with the call? why or why not?

const myArray = [5, 5];
myArray[-1] = 5; // creating property
myArray[-2] = 5; // creating property

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i]; // 5 5 5 5 20
  }

  return sum / Object.keys(array).length; // 20 / 2 Using Object.keys() gets the full length.
}

console.log(average(myArray)); // 10

// This code is fairly clever in that in starts at -2 and gets the values of that property in the array,
	// however, the length of the array never includes the properties added to it, only the elements
	// at the indices. So, in this case, average function call returns 10.