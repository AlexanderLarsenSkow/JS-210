function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

// let { baz, qux, bar } = foo(1, 2, 3);

let obj = foo(1, 2, 3);

let baz = obj.baz; // 2
let qux = obj.qux; // 3
let bar = obj.bar; // 1

console.log(baz, qux, bar);