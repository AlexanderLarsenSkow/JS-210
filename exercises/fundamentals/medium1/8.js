// Product of Sums

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2); // undefined * undefined => NaN
  return result; // NaN
}

function total(numbers) {
  let sum; // nope, undefined value.

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]; // NaN
  }

  sum; // no explicit return, which is a problem.
}

console.log(productOfSums([1, 2], [1]));