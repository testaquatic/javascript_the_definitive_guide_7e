let data = [1, 3, 5, 7, 9];

const stats = require('./stats.js');
let average = stats.mean(data);
console.log(average);

const { stddev } = require('./stats.js');
let sd = stddev(data);
console.log(sd);

