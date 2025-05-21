let arr = [1, 2, 3]
console.log(arr.length)

let ind = arr[arr.length]
console.log(ind) // undefined

// Using an index that is greater or equal to the length of an array will return undefined, since
// there is no value at that index.