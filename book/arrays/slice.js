let fruits = ['mango', 'orange', 'banana', 'pear', 'apple'];
aFew = fruits.slice(1, 3); // starting at index 1 going to index 3.

console.log(aFew) // WHAT ['orange', 'banana']

console.log(fruits)

// not destructive

idk = fruits.slice(2);
console.log(idk); // ['banana', 'pear', 'apple']

console.log(fruits.slice()) // duplicates the array, no slice taken.