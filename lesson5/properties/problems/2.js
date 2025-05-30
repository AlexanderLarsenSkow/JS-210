// increment Property
	// 2 args: object and string

/*
object contains property?
	increment value of property.

doesn't exist?
	add new property with value of 1.

return new value of property.
*/

function incrementProperty(object, property) {
	if (Object.keys(object).includes(property)) {
		return object[property] += 1;
	} else {
		return object[property] = 1;
	}
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(	incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }