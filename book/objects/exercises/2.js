obj = {};

obj['1'] = 'a';
obj[undefined] = 'b';
obj[true] = 'c';
// obj[1] = 'd' numbers cannot be keys in objs. Sounds like everything else is fair game.

console.log(obj)