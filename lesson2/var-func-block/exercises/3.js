let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color); // mutate
}

updateColors(colors, color1); // adding purple
updateColors(colors, color2); // adding pink
console.log(colors); // ['red', 'green', 'blue', 'purple', 'pink']

// We pass in the argument color1 and color2 to the function, which are then added to the end
	// of the colors array, which is the first argument for the function call.