import { Range } from "./range.js";

for (let x of new Range(1, 10)) {
    console.log(x);
}

console.log([... new Range(-2, 2)]);