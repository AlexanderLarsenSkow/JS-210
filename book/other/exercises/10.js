let x = "5";
x = x + 1;
console.log(x) // "51";

let y = "5";
console.log(y++) // "5" is return since the increment operator after the identifier does not
// return the new value, but the old value. But it returns it as an integer? da fuq

// ++ uses type coercion, except it will coerce the value it's used on.