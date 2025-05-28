/*
Right Triangles

Problem:
	input: integer
	output: triangle of stars

	top start should always be furthest away.
	bottom should be the full length of stars.

Examples:

triangle(5);

    * (4 spaces, 1 star)
   **
  *** 
 ****
***** (full length)

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Spaces go up while stars go down, vice versa.

Data Structures:
	loop, create a count that starts with 1. Length - count gets the spaces.
	space then star

*/

function triangle(size) {
	const star = '*';
	const space = ' ';

	for (let count = 1; count <= size; count++) {
		let spaceCount = size - count;
		console.log(space.repeat(spaceCount) + star.repeat(count));
	}
}


triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
