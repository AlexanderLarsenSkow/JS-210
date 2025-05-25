console.log(a); // ReferenceError: cannot access 'a' before initialization

let a = 1;

// The main difference between let/const and var with the creation phase is that:
	// let and const are not initialized in creation
	// var is initialized in creation but just isn't assigned its value until it's read later.