// Length

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4; // changing the length
console.log(languages); // ['JavaScript', 'Ruby', 'Python' <1 empty item>];
console.log(languages.length); // 4

languages.length = 1; // changing the length again
console.log(languages); // ['JavaScript'];
console.log(languages.length); // 1

languages.length = 3; // increasing length
console.log(languages); // ['JavaScript', <2 empty items>];
console.log(languages.length); // 3

languages.length = 1; // decreasing again
languages[2] = 'Python'; // adding new element, new length is 3
console.log(languages); // ['JavaScript', <1 empty item>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

/*
	at each point in this code, we are changing the length property. Increasing the length
	explicitly causes the array length to increase and <empty items> are added to account for each
	index. However, trying to access these items still returns undefined. There is essentially nothing
	there.

	Countered by this, reducing the length will remove elements. That's why reducing the length to 1
	shows that 'Ruby' and 'Python' are removed from teh array. Because they are gone.

	Lastly adding an element at an index equal to or greater than the length will also increase the 
	length of the array. Adding an element at an index greater than the length will create empty items
	between the previous last item and newly added element, explaining this output at the end:
	[ 'JavaScript', <1 empty item>, 'Python' ]
*/