// some methods do NOT mutate passed in objects / arrays. For example, Array.prototype.map()

function capitalize(names) {
	return names.map(name => name[0].toUpperCase() + name.slice(1));
}

let names = ["chris", "kevin", "naveed"];
capitalize(names); // returns ['Chris', 'Kevin', 'Naveed']
console.log(names); // => ['chris', 'kevin', 'naveed']