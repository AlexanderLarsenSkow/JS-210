function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// First it splits the string into an array of words.
// Then it reverses the order of the array (mutating it)
// Finally, it converts the reversed array into an array of length numbers with map.

console.log(doSomething('Hi There Kid')); // [3, 5, 2]

