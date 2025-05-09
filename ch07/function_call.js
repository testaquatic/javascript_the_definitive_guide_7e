let a = { 0: "a", 1: "b", 2: "c", length: 3 };

console.log(Array.prototype.join.call(a, "+"));
console.log(Array.prototype.map.call(a, (x) => x.toUpperCase()));
console.log(Array.prototype.slice.call(a, 0));
console.log(Array.from(a));
