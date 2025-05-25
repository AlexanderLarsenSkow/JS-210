let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color); // mutate colors
  return colors; // return that mutated array
}

let newColors = updateColors(colors, color1); // difference variable, same reference
updateColors(newColors, color2); // mutating the same colors array
console.log(colors); // ['red', 'green', 'blue', 'purple', 'pink']

// Because updateColors mutates and returns the same array, initializing a new variable
	// newColors to reference that returned array actually just creates a new reference to the same
	// object.

// Passing in newColors to updateColors as an argument mutates the same array. So, the strings 'purple'
	// and 'pink' show up in the array at the end.