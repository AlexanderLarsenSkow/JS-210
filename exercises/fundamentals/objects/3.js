// What is logged to the console and why?

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]); // push each element from array1 into 2
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) { 
    array1[i] = array1[i].toUpperCase();
		array2[i] = array1[i]; // change the reference at the index to 'CURLY' 'CHICO'
  }
}

console.log(array2); // ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
