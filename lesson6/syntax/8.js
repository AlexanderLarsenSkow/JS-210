const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

// const { first, second, ...rest } = obj;

const first = obj.first;
const second = obj.second
rest = Object.assign({ third: obj.third }, obj.rest);

console.log(first) // 'I am the first'
console.log(second) // 'I am the second'
console.log(rest) //  { third: [1, 2, 3], rest: {a: 'a', b: 'b'} }