let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color); // mutate colors
}

updateColors(colors);
console.log(colors); // ['red', 'green', 'blue', 'yellow']

