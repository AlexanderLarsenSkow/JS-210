/*	
	What happens in this code?
*/

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`); // Function: firstName function: lastName

// displays the functions themselves since it doesn't call them.
/*
Actual Display:

firstName() {
    return 'Victor';
  } lastName() {
    return 'Reyes';
  }
*/