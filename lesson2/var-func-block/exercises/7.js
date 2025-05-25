function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1); // returning new string capitalized
}

function exclaim(word) {
  return word += '!!!'; // returning string concactenation and reassigning word
}

let word = 'hello'; // initializing word to reference 'hello';
let capitalizedWord = capitalize(word); // Hello
let exclaimedWord = exclaim(capitalizedWord); // Hello!!!

console.log(word); // hello
console.log(capitalizedWord); // Hello
console.log(exclaimedWord); // Hello!!!

// This time, the return value of every function is used in each function afterward.