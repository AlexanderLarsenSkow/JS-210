// for-of is another way to iterate over an array. Made available in ES6

let arr = [10, 20, 30];
for (let value of arr) {
	console.log(value); // 10 20 30
}

// Good for strings too!

let string = 'Happy Birthday!';
for (let char of string) {
	console.log(char); // H a p p y  B i r t h d a y
}