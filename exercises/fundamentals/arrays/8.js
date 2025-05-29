/*
Slice and Splice

Slice:
	input: 3 args: array, two integers (start and end index exclusive with end).
	output: sliced array (new array)

	Rules:
		values of indexes always greater than 0
		if begin or end is greater than length, set it to length.

	Examples:

slice([1, 2, 3], 1, 2);               // [2] only 2, exclusive end
slice([1, 2, 3], 2, 0);               // [] nothing taken with 0 end.
slice([1, 2, 3], 5, 1);               // [] nothing taken.
slice([1, 2, 3], 0, 5);               // [1, 2, 3]
	

	Data Structures:
		array 

	Algorithm:
		if start is greater than length, set start to length
		same for end

		create empty arr
		iterate from start index to less than the end index.
		Add every value in this range to the new array.
		return the array.
*/

function slice(array, start, end) {
	const length = array.length;

	if (start > length) start = length;
	if (end > length) end = length;

	let arrSlice = [];

	for (let index = start; index < end; index++) {
		arrSlice.push(array[index]);
	}

	return arrSlice;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// 	console.log(slice(arr1, 1, 3));          // [2, 3]
// 	console.log(arr1);                      // [1, 2, 3]

/*
	Splice

	input: array, start index, number to delete, and zero or more elements to add at start
	output: returns a new array with removed elements. Empty array if nothing removed.
	
	Rules:
		- removal occurs depending on number to remove at start
		- new elements are added at start index.
		- mutates teh original array with added / removed elements.
		- start and number to Delete will always be >= to 0
		- if start is greater than array length, set to length
		- if deleteCount is than number of elements from start to the length, set deleteCount to
			difference between length and start.
		- optional arguments for elements to add to teh array. If no elements, only removes.

	Examples:
		splice([1, 2, 3], 1, 2);              // [2, 3] returns removed elements. mut [1]
splice([1, 2, 3], 1, 3);              // [2, 3]  [1]
splice([1, 2, 3], 1, 0);              // [] remove nothing
splice([1, 2, 3], 0, 1);              // [1] remove 1, [2, 3]
splice([1, 2, 3], 1, 0, 'a');         // [] remove nothing, [1, 2, 3, 'a']

const arr2 = [1, 2, 3];
splice(arr2, 1, 1, 'two');             // [2]
arr2;                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
arr3;                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
splice(arr4, 1, 0);                    // []
splice(arr4, 1, 0, 'a');               // []
arr4;                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
splice(arr5, 0, 0, 'a');               // []
arr5;                                  // ["a", 1, 2, 3]

Data Structures:
	all input: 
	
	original array, likely iteration from that start index.
	
	start index, if it's greater than the length set it to the length
		- beginning of iteration. - iterate from this number to less than start + deleteCount
	
	deleteCount - if 0, delete nothing. 
		set deleteCount to length - start if greater than number here.

	arguments to add: 
		array
		has to be added starting at start.
	
	returning new array as well. Every removed element needs to be in here.

	Creating a Range:
		start index
		delete Count
			need number that are safe on the end.

		[1, 2, 3, 4, 5] => splice(2, 2) =>

			add start + deleteCount - 1 => end Index. 3

				if the current index is greater than endIndex, put it in a savedElemetns array.
				if the current index is less than, put it in removed elements array.
				iterate down to the start index.
		
		saved => unshift [5]
		removed => unshift [3, 4]
		[1, 2] => same array.

		start at start index, which is at the length of the newarray.
			if there are arguments, add all teh arguments with push.
			Then add all teh saved elements.

	Algorithm:
		is start greater than length? set start to length.
		is deleteCount greater than length - start? set deleteCount to this value

		create removal array for removed elements.
		create saved array for end elements to save.
		Create a range of indexes by adding startIndex + deleteCount - 1. this is rangeEnd.
		
		--REMOVAL
		iterate from end of array down to start index.
			if the current index is greater than the rangeEnd, use pop and add to beginning of savedarray
			if current index is less than rangeEnd, use pop and add to beginning of removalArray.
			do not mess with elements at indicies lower than start index.

		--REBUILD(array, args, savedElements, startIndex)
		iterate from the beginning of the argumetns array to the end.
		add each element at the start index, incrementing startIndex each time something is added.
		afterwards, iterate again from the beginning of the savedElements array and add each element.  

		return removedElements.
	*/

	function splice(array, start, deleteCount, ...args) {
		let length = array.length;
		if (start > length) start = length;
		if (deleteCount > length - start) deleteCount = length - start;

		let savedElements = [];
		let removedElements = [];
		let arr;

		const rangeEnd = start + deleteCount - 1;

		for (let index = length - 1; index >= start; index--) {
			arr = index > rangeEnd ? savedElements : removedElements;
			arr.unshift(array.pop());
		}
		console.log(removedElements);

		rebuildSplice(array, args, savedElements);
		return removedElements;
	}

	function rebuildSplice(array, args, savedElements) {
		const addElements = args.concat(savedElements);
		addElements.forEach(element => array.push(element));

		return array;
	}

	// let testArray = [1, 2, 3]
	// console.log(splice(testArray, 0, 1)); // [1]
	// console.log(testArray); // [2, 3]

	let emptyArray = [];
	console.log(splice(emptyArray, 0, 0)); // []
	console.log(emptyArray); // []

// 	console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// 	console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// 	console.log(splice([1, 2, 3], 1, 0));              // []
// 	console.log(splice([1, 2, 3], 0, 1));              // [1]
// 	console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// 	console.log(splice([1, 2, 3, 4, 5, 6], 2, 3)); // [3, 4, 5]

// const arr2 = [1, 2, 3];
// console.log(splice(arr2, 1, 1, 'two'));             // [2]
// console.log(arr2);                                  // [1, "two", 3]

// const arr3 = [1, 2, 3];	
// console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
// console.log(arr3);                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// console.log(splice(arr4, 1, 0));                    // []
// console.log(splice(arr4, 1, 0, 'a'));               // []
// console.log(arr4);                     // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// console.log(splice(arr5, 0, 0, 'a'));               // []
// console.log(arr5);                                  // ["a", 1, 2, 3]