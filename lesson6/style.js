// 1. Unused variable, Should use single quotes

// let title = 'The Three-Body Problem';
// console.log(title);

// 2. Should be using multiple let keywords for each initialization of the variables.

let title = 'The Three-Body Problem';
let author = 'Cixin Liu';
let pageCount = 400;

// 3. == should not be used. Instead, the strict equality operator should be: ===

// let completed = lastPageRead === 400;

// 4. Should have curly braces on line 18 and line 20.

// if (finishedBook()) {
//   console.log('You have finished reading this book');
// }

/* 5.
	a. Uses function declaration instead of expression.
	b. Too many spaces / tabs from start of line to first typed code.
	c. no spaces for page=0 => should be page = 0
	d. don't use ++, use += 1 instead
	e. Using implicit type coercion with + instead of interpolation
*/

const read = function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
  	let message = `You read page ${page}`;
    console.log(message);
  }
}

read(400);