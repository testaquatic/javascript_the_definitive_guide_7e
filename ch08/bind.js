let sum = (x, y) => x + y;
let succ = sum.bind(null, 1);
console.log(succ(2));

function f(y, z) {
    return this.x + y + z;
}
let g = f.bind({x: 1}, 2);
console.log(g(3));