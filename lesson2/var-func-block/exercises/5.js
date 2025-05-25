let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop(); // THIS REASSIGNS ASHHHHHHHHH
  return colors;
}

let newColors = removeColor(colors); // removing 'blue'
addColor(colors, color); // adding 'blue' because color was reassigned in the removeColor function.
console.log(newColors); // ['red', 'green', 'blue']

// newColors and colors reference the same array. When colors is passed into newColors, the 
	// function body reassings color to reference colors.pop(), which simultaneously mutates the colors
	// array by removing the final element AND reassigning the global variable colors to the string
	// 'blue'. 

	// So, when colors is passed into addColor on line 15, the string `color` is also passed in,
		// which was reassigned to 'blue' when removeColor() was called. As such, the resulting
		// array that is logged is ['red', 'green', 'blue']