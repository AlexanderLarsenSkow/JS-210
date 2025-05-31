// Invoice

function invoiceTotal(...invoiceAmounts) {
  return invoiceAmounts.reduce((total, amount) => total + amount, 0);
}

console.log(invoiceTotal(20, 30, 40, 50));   // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?

/*
To make this code work properly with any number of arguments, we need to use a rest parameter 
	(modern JS) or the arguments local variable. Because a rest parameter creates an array and
	each argument is passed to the array, we can call Array methods like Array.prototype.reduce() to
	effectively sum each value stored inside.
*/