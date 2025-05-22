console.log(false ?? null); // false
console.log(true ?? (1 + 2)); // true
console.log((1 + 2) ?? true); // 3
console.log(null ?? false); // false
console.log(undefined ?? (1 + 2)); // 3
console.log((1 + 2) ?? null); // 3
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null

// second time

function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7); // 'foo is 5, bar is 7'
show(0, 0); // 'foo is 0, bar is 0'
show(4); // 'foo is 4, bar is 42'
show(); // 'foo is 3, bar is 42'