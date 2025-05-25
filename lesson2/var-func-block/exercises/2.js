let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors); // color not passed in
console.log(colors); // ['red', 'green' 'blue', undefined]

// Because nothing is passed in the for the second arugment, the value for `color` is undefined.
// When the `colors` array is mutated with push, undefined is added to the end of the array.