// Object Type Reassignment

let colors = ['red', 'green', 'blue'];
let param = colors; // same referenced object

param.push('yellow');

console.log(colors); // ['red', 'green', 'blue', 'yellow']

