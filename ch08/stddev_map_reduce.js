const sum = (x, y) => x + y;
const square = x => x * x;

let data = [1, 1, 3, 5, 5];
let mean = data.reduce(sum) / data.length;
let deviations = data.map(x => x - mean);
let stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));

console.log(stddev);
