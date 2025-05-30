let today = new Date;
let nineteenSeventy = new Date("1970-01-01");
console.log(nineteenSeventy);

let timeNow = today.getTime();
let timeThen = nineteenSeventy.getTime();

console.log(nineteenSeventy.getTime());

console.log(timeNow - timeThen);

// getTime() logs all millisceonds that have occurred since 1970.