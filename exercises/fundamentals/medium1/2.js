// Conditional Loop:

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i); // 0 % 3 === 0 00000000
  } else {
    i += 1; // 1 2 3
  }
}

/*
	This code creates an infinite loop because, if i is a multiple of 3, it outputs i, but 
		fails to increment it again. So, it continues looping at 0 forever as it only increments the
		value of i if it is not a multiple of 3.

		The increment should occur every time. So there should be no else statement.
*/

