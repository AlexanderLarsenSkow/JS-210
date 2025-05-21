let arr = [1, 2, 3, 4, 5]

// Destructive just like in Ruby.
function changeFirstElement(array, element){
	array[0] = element
}

changeFirstElement(arr, 200)

console.log(arr)

// This function does not mutate the array, but returns a new array altogether.
function addToArray(array) {
	return array.concat(10)
}

console.log(addToArray(arr))